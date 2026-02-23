let starData = [];
let starPositions = [];

let camX = 0, camY = 0;
let zoom = 1;
let isDragging = false;
let tooltip;

function preload() {
  loadJSON("star_dataset_cleaned.json", data => {
    starData = Array.isArray(data) ? data : Object.values(data);
    starData.sort((a, b) => a["Distance (ly)"] - b["Distance (ly)"]);
    buildPositions();
  });
}

function buildPositions() {
  randomSeed(42);
  noiseSeed(42);
  starPositions = starData.map((star, i) => {
    let d = lyToPixels(star["Distance (ly)"]);
    let angle = noise(i * 0.5) * TWO_PI * 6;
    return { x: cos(angle) * d, y: sin(angle) * d };
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tooltip = select("#tooltip");
  textFont("monospace");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildPositions();
}

// Log scale: maps light-years to canvas pixels
function lyToPixels(ly) {
  return log(ly + 1) * min(width, height) * 0.13;
}

// Star display radius from real radius data
function starDisplayRadius(rSolar) {
  return constrain(pow(rSolar, 0.45) * 5, 2.5, 52);
}

function getSpectralColor(cls) {
  const colors = {
    O: [100, 180, 255],
    B: [160, 210, 255],
    A: [255, 255, 255],
    F: [255, 244, 190],
    G: [255, 210, 100],
    K: [255, 165, 60],
    M: [255, 80,  80],
  };
  let key = cls ? cls[0] : "A";
  return colors[key] || [255, 255, 255];
}

/* ── DRAW ── */
function draw() {
  background(6, 6, 14);

  push();
  translate(width / 2 + camX, height / 2 + camY);
  scale(zoom);

  drawRings();
  drawStars();
  drawSun();

  pop();

  drawLegend();
  drawHint();
}

/* ── DISTANCE RINGS ── */
function drawRings() {
  const distances = [5, 10, 25, 50, 100, 250, 500, 1000, 2000];
  noFill();
  textAlign(CENTER);

  for (let ly of distances) {
    let r = lyToPixels(ly);
    let screenR = r * zoom;
    if (screenR < 15 || screenR > max(width, height) * 3) continue;

    stroke(255, 255, 255, 18);
    strokeWeight(1 / zoom);
    ellipse(0, 0, r * 2, r * 2);

    noStroke();
    fill(255, 255, 255, 55);
    let ts = constrain(10 / zoom, 6, 13);
    textSize(ts);
    text(ly + " ly", 0, -r - ts * 0.6);
  }
}

/* ── SUN — simple radial gradient circle ── */
function drawSun() {
  let r = starDisplayRadius(1) * 1.5;

  let ctx = drawingContext;
  let grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
  grad.addColorStop(0,   "rgba(255, 255, 230, 1)");
  grad.addColorStop(0.35,"rgba(255, 220, 80,  1)");
  grad.addColorStop(0.75,"rgba(255, 140, 10,  1)");
  grad.addColorStop(1,   "rgba(180,  60,  0,  0)");

  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  noStroke();
  fill(255, 255, 255, 150);
  let ts = constrain(9 / zoom, 7, 13);
  textSize(ts);
  textAlign(CENTER);
  text("Sun", 0, -r - ts);
}

/* ── STARS ── */
function drawStars() {
  let hovered = null;

  for (let i = 0; i < starData.length; i++) {
    let star = starData[i];
    let pos  = starPositions[i];
    if (!pos) continue;

    let r            = starDisplayRadius(star["Radius (R/Ro)"]);
    let [cr, cg, cb] = getSpectralColor(star["Spectral Class"]);
    let screenX      = pos.x * zoom + width / 2 + camX;
    let screenY      = pos.y * zoom + height / 2 + camY;
    let isHover      = dist(mouseX, mouseY, screenX, screenY) < max(r * zoom, 7);

    if (isHover) hovered = { star, pos };

    let ctx = drawingContext;
    let lumFactor = constrain(log(star["Luminosity (L/Lo)"] + 1) / log(200000), 0.05, 1);

    // Luminosity-scaled halo
    let haloR = r * (1.5 + lumFactor * 3.5);
    let halo  = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, haloR);
    halo.addColorStop(0,   `rgba(${cr},${cg},${cb},0.3)`);
    halo.addColorStop(0.5, `rgba(${cr},${cg},${cb},0.08)`);
    halo.addColorStop(1,   `rgba(${cr},${cg},${cb},0)`);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, haloR, 0, Math.PI * 2);
    ctx.fillStyle = halo;
    ctx.fill();

    // Core: radial gradient with white highlight
    let core = ctx.createRadialGradient(
      pos.x - r * 0.3, pos.y - r * 0.3, 0,
      pos.x, pos.y, r
    );
    core.addColorStop(0,   `rgba(255,255,255,1)`);
    core.addColorStop(0.45,`rgba(${cr},${cg},${cb},1)`);
    core.addColorStop(1,   `rgba(${Math.round(cr*0.4)},${Math.round(cg*0.4)},${Math.round(cb*0.4)},1)`);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
    ctx.fillStyle = core;
    ctx.fill();

    // Hover ring
    if (isHover) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r + 3 / zoom, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth   = 1 / zoom;
      ctx.stroke();
    }

    // Name label
    noStroke();
    fill(255, 255, 255, isHover ? 230 : 95);
    let ts = constrain(9 / zoom, 6, 12);
    textSize(ts);
    textAlign(CENTER);
    text(star["Name"], pos.x, pos.y - r - ts * 0.7);
  }

  updateTooltip(hovered);
}

/* ── TOOLTIP ── */
function updateTooltip(hovered) {
  if (!hovered) { tooltip.addClass("hidden"); return; }
  let { star } = hovered;
  let specMap  = { O:"Blue giant", B:"Blue-white", A:"White", F:"Yellow-white", G:"Yellow", K:"Orange", M:"Red dwarf" };
  let specName = specMap[star["Spectral Class"][0]] || "—";

  tooltip.removeClass("hidden");
  tooltip.position(mouseX + 16, mouseY + 16);
  tooltip.html(`
    <div class="tt-name">${star["Name"]}</div>
    <div class="tt-row"><span>Distance</span>${star["Distance (ly)"].toFixed(1)} ly</div>
    <div class="tt-row"><span>Type</span>${specName} · ${star["Spectral Class"]}</div>
    <div class="tt-row"><span>Radius</span>${star["Radius (R/Ro)"].toFixed(2)} R☉</div>
    <div class="tt-row"><span>Luminosity</span>${star["Luminosity (L/Lo)"].toFixed(0)} L☉</div>
    <div class="tt-row"><span>Temperature</span>${Math.round(star["Temperature (K)"]).toLocaleString()} K</div>
  `);
}

/* ── LEGEND ── */
function drawLegend() {
  const classes = [
    { label:"O — Blue giant",   c:[100,180,255] },
    { label:"B — Blue-white",   c:[160,210,255] },
    { label:"A — White",        c:[255,255,255] },
    { label:"F — Yellow-white", c:[255,244,190] },
    { label:"G — Yellow (Sun)", c:[255,210,100] },
    { label:"K — Orange",       c:[255,165,60]  },
    { label:"M — Red dwarf",    c:[255,80, 80]  },
  ];

  let x = 20, y = 20, rowH = 22;
  noStroke();
  textAlign(LEFT);
  fill(0, 0, 0, 130);
  rect(x - 8, y - 8, 170, classes.length * rowH + 14, 4);

  for (let i = 0; i < classes.length; i++) {
    let [cr, cg, cb] = classes[i].c;
    let cy = y + i * rowH + 7;
    fill(cr, cg, cb);
    ellipse(x + 6, cy, 10, 10);
    fill(255, 255, 255, 185);
    textSize(11);
    text(classes[i].label, x + 18, cy + 4);
  }
}

/* ── HINT ── */
function drawHint() {
  fill(255, 255, 255, 50);
  noStroke();
  textSize(11);
  textAlign(RIGHT);
  text("scroll to zoom  ·  drag to pan  ·  double-click to reset", width - 18, height - 14);
}

/* ── INTERACTION ── */
function mousePressed()  { isDragging = true; }
function mouseReleased() { isDragging = false; }
function mouseDragged()  { camX += movedX; camY += movedY; }
function doubleClicked() { camX = 0; camY = 0; zoom = 1; }
function mouseWheel(event) {
  zoom = constrain(zoom * (event.delta > 0 ? 0.9 : 1.1), 0.08, 10);
  return false;
}
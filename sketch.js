const STARS = [
  {"Name":"Achernar","Distance (ly)":143.629960688,"Luminosity (L/Lo)":3154.4345967156,"Radius (R/Ro)":9.1951749425,"Temperature (K)":14969.6872402637,"Spectral Class":"B6Vep"},
  {"Name":"Acrux","Distance (ly)":320.5286601686,"Luminosity (L/Lo)":25004.9632509792,"Radius (R/Ro)":8.3040984892,"Temperature (K)":28028.4827990838,"Spectral Class":"B0.5IV"},
  {"Name":"Aldebaran","Distance (ly)":64.6936573254,"Luminosity (L/Lo)":522.1631626286,"Radius (R/Ro)":44.1608986861,"Temperature (K)":3940.9822432178,"Spectral Class":"K5III"},
  {"Name":"Alnilam","Distance (ly)":2000.2545569215,"Luminosity (L/Lo)":53704.6457106366,"Radius (R/Ro)":32.4837946169,"Temperature (K)":27523.8868238369,"Spectral Class":"B0Ia"},
  {"Name":"Alpha Centauri B","Distance (ly)":4.7356216586,"Luminosity (L/Lo)":5.4391034606,"Radius (R/Ro)":0.9091029747,"Temperature (K)":5293.5113957685,"Spectral Class":"K1V"},
  {"Name":"Altair","Distance (ly)":17.0047525574,"Luminosity (L/Lo)":15.5096535842,"Radius (R/Ro)":1.5741356101,"Temperature (K)":7589.0188616057,"Spectral Class":"A7V"},
  {"Name":"Antares","Distance (ly)":549.8094446057,"Luminosity (L/Lo)":10004.8888934298,"Radius (R/Ro)":679.9451981136,"Temperature (K)":3503.2203387407,"Spectral Class":"M1.5Iab"},
  {"Name":"Arcturus","Distance (ly)":36.2018057329,"Luminosity (L/Lo)":174.7332915547,"Radius (R/Ro)":25.4414997431,"Temperature (K)":4248.4080308476,"Spectral Class":"K1.5III"},
  {"Name":"Barnard's Star","Distance (ly)":6.1871656307,"Luminosity (L/Lo)":4.9569442338,"Radius (R/Ro)":0.1391027781,"Temperature (K)":3145.3595033456,"Spectral Class":"M4Ve"},
  {"Name":"Bellatrix","Distance (ly)":239.7726343351,"Luminosity (L/Lo)":6404.8043623041,"Radius (R/Ro)":5.7502530575,"Temperature (K)":22611.9374037649,"Spectral Class":"B2III"},
  {"Name":"Betelgeuse","Distance (ly)":642.7547888999,"Luminosity (L/Lo)":126004.9078150664,"Radius (R/Ro)":887.0573491617,"Temperature (K)":3476.8994046145,"Spectral Class":"M2Iab"},
  {"Name":"Canopus","Distance (ly)":310.2130102878,"Luminosity (L/Lo)":10504.6540480726,"Radius (R/Ro)":71.0789493001,"Temperature (K)":7379.1485905192,"Spectral Class":"A9II"},
  {"Name":"Capella","Distance (ly)":43.2689811044,"Luminosity (L/Lo)":83.5321362018,"Radius (R/Ro)":12.0600037322,"Temperature (K)":4895.7142393517,"Spectral Class":"G8III"},
  {"Name":"Castor","Distance (ly)":51.5702100582,"Luminosity (L/Lo)":59.9336417557,"Radius (R/Ro)":2.3172943774,"Temperature (K)":10334.1403388822,"Spectral Class":"A1V"},
  {"Name":"Deneb","Distance (ly)":2600.0541116982,"Luminosity (L/Lo)":196004.8540806223,"Radius (R/Ro)":203.0227148555,"Temperature (K)":8502.2960328903,"Spectral Class":"A2Ia"},
  {"Name":"Fomalhaut","Distance (ly)":24.8431170801,"Luminosity (L/Lo)":21.4360232444,"Radius (R/Ro)":1.8758857976,"Temperature (K)":8630.9352414921,"Spectral Class":"A3V"},
  {"Name":"Hadar","Distance (ly)":349.8618670626,"Luminosity (L/Lo)":50004.948951253,"Radius (R/Ro)":8.924915432,"Temperature (K)":24982.4559984331,"Spectral Class":"B1III"},
  {"Name":"Lalande 21185","Distance (ly)":8.7317322984,"Luminosity (L/Lo)":4.7862383088,"Radius (R/Ro)":0.3347032307,"Temperature (K)":3382.6890402272,"Spectral Class":"M2.1V"},
  {"Name":"Mira","Distance (ly)":418.2183952968,"Luminosity (L/Lo)":8704.7806495111,"Radius (R/Ro)":370.0744266107,"Temperature (K)":2925.3920762981,"Spectral Class":"M7IIIe"},
  {"Name":"Polaris","Distance (ly)":323.034675098,"Luminosity (L/Lo)":2204.9741518094,"Radius (R/Ro)":37.4487610573,"Temperature (K)":6061.9433548655,"Spectral Class":"F7Ib"},
  {"Name":"Procyon","Distance (ly)":11.1468819371,"Luminosity (L/Lo)":12.2188621199,"Radius (R/Ro)":2.0247293673,"Temperature (K)":6503.7855898504,"Spectral Class":"F5IV-V"},
  {"Name":"Regulus","Distance (ly)":78.8696975851,"Luminosity (L/Lo)":292.7771392799,"Radius (R/Ro)":3.2154445654,"Temperature (K)":12493.5400873692,"Spectral Class":"B7V"},
  {"Name":"Rigel","Distance (ly)":860.3803983161,"Luminosity (L/Lo)":120004.7228303429,"Radius (R/Ro)":78.8201839886,"Temperature (K)":12100.4388145159,"Spectral Class":"B8Ia"},
  {"Name":"Rigil Kentaurus","Distance (ly)":4.4729427678,"Luminosity (L/Lo)":6.4969976741,"Radius (R/Ro)":1.1768595688,"Temperature (K)":5809.0653228186,"Spectral Class":"G2V"},
  {"Name":"Ross 154","Distance (ly)":9.3233893462,"Luminosity (L/Lo)":4.9957946161,"Radius (R/Ro)":0.1833450975,"Temperature (K)":2775.2989538037,"Spectral Class":"M3.5V"},
  {"Name":"Sirius","Distance (ly)":8.4048850423,"Luminosity (L/Lo)":30.3632115552,"Radius (R/Ro)":1.697550319,"Temperature (K)":9929.1974867611,"Spectral Class":"A1V"},
  {"Name":"Spica","Distance (ly)":250.3496408249,"Luminosity (L/Lo)":22004.5947970871,"Radius (R/Ro)":7.4870500968,"Temperature (K)":25392.5355901035,"Spectral Class":"B1III-IV"},
  {"Name":"Vega","Distance (ly)":25.4072867274,"Luminosity (L/Lo)":45.0263999451,"Radius (R/Ro)":2.3758185019,"Temperature (K)":9589.7203318027,"Spectral Class":"A0V"},
  {"Name":"Wolf 359","Distance (ly)":7.573447101,"Luminosity (L/Lo)":4.9281268039,"Radius (R/Ro)":0.1897370426,"Temperature (K)":2812.8697252841,"Spectral Class":"M6V"}
];

let STATE = "title";
let transitionT = 0;
let scrollOn = false;

let camX = 0, camY = 0;
let zoom = 1.0, targetZoom = 1.0;
let dragging = false;

let stars = [];
let pos = {};
let bgDots = [];

const STAGE_TEXT = [
  "Our star, the Sun.",
  "Nearby stars, light-years away...",
  "Our stellar neighborhood.",
  "We are but a fraction of our galaxy."
];
let stageIdx = -1, stageTimer = 0;

const SPECCOLOR = {
  O: [100, 190, 255],
  B: [160, 215, 255],
  A: [255, 255, 255],
  F: [255, 244, 200],
  G: [255, 218, 110],
  K: [255, 178,  72],
  M: [255, 110,  90]
};

// ── SETUP ──────────────────────────────────────────
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  noCursor();

  stars = STARS.slice().sort((a, b) => a["Distance (ly)"] - b["Distance (ly)"]);

  buildStarPositions();

  randomSeed(7);
  for (let i = 0; i < 600; i++) {
    bgDots.push({
      x: random(-12000, 12000),
      y: random(-12000, 12000),
      r: random(0.2, 1.4),
      a: random(12, 65)
    });
  }

  document.getElementById("homebtn").addEventListener("click", () => {
    camX = 0; camY = 0; targetZoom = 0.28;
  });
}

// CHANGE: recompute star positions on resize so layout stays correct
function buildStarPositions() {
  randomSeed(42);
  noiseSeed(42);
  for (let i = 0; i < stars.length; i++) {
    let d = lyToPx(stars[i]["Distance (ly)"]);
    let angle = noise(i * 0.31) * TWO_PI * 4;
    pos[i] = { x: cos(angle) * d, y: sin(angle) * d };
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildStarPositions();
}

// ── MAIN LOOP ──────────────────────────────────────
function draw() {
  let ctx = drawingContext;
  let g = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, max(width, height) * 0.75);
  g.addColorStop(0,   "rgb(2,4,20)");
  g.addColorStop(0.6, "rgb(1,2,10)");
  g.addColorStop(1,   "rgb(0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);

  if      (STATE === "title")      doTitle();
  else if (STATE === "transition") doTransition();
  else                             doExplore();

  drawCursor();
}

// ── TITLE STATE ────────────────────────────────────
function doTitle() {
  ambientDust();
  push();
    translate(width / 2, height * 0.28);
    drawSun(true);
  pop();
}

// ── TRANSITION STATE ───────────────────────────────
function doTransition() {
  transitionT += 0.005;
  let t = easeInOut(min(transitionT, 1));
  zoom = lerp(1.0, 0.28, t);

  ambientDust();
  push();
    translate(width/2 + camX, height/2 + camY);
    scale(zoom);
    drawBgDots(t * 160);
    drawRings(t * 45);
    drawAllStars(floor(t * 255));
    drawSun(false);
  pop();

  if (transitionT >= 1) enterExplore();
}

// ── EXPLORE STATE ──────────────────────────────────
function doExplore() {
  zoom = lerp(zoom, targetZoom, 0.075);
  zoom = constrain(zoom, 0.003, 1.2);

  ambientDust();
  push();
    translate(width/2 + camX, height/2 + camY);
    scale(zoom);
    drawBgDots(165);
    drawRings(45);
    drawAllStars(255);
    drawSun(false);
  pop();

  // Sun tooltip in explore mode (drawAllStars handles hiding tip when no star hovered,
  // so we check sun AFTER and override if needed)
  let _ssx = 0 * zoom + width/2 + camX;
  let _ssy = 0 * zoom + height/2 + camY;
  let _sunR = max(starRadius(1.0) * 3 * zoom, 10);
  if (dist(mouseX, mouseY, _ssx, _ssy) < _sunR) showSunTooltip();

  drawLegend();
  updateStage();
  updateScaleBar();
}

function enterExplore() {
  STATE = "explore";
  targetZoom = zoom;
  scrollOn = true;

  let tu = document.getElementById("title-ui");
  tu.classList.add("fade-out");
  setTimeout(() => tu.classList.add("gone"), 550);

  let h = document.getElementById("hints");
  h.classList.add("show");
  if (window.matchMedia("(pointer: coarse)").matches)
    document.getElementById("hint-zoom-text").textContent = "Pinch to zoom";
  setTimeout(() => h.classList.remove("show"), 6000);

  document.getElementById("scalebar").classList.add("show");
  document.getElementById("homebtn").classList.add("show");
}

// ── SUN ────────────────────────────────────────────
function drawSun(titleMode) {
  let baseR = titleMode ? min(width, height) * 0.042 : starRadius(1.0);
  let pulse = 1 + sin(frameCount * 0.021) * 0.06;
  let r = baseR * pulse;
  let ctx = drawingContext;

  noStroke();

  let corona = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 16);
  corona.addColorStop(0,   "rgba(255,220,60,0.11)");
  corona.addColorStop(0.4, "rgba(255,150,0,0.04)");
  corona.addColorStop(1,   "rgba(0,0,0,0)");
  ctx.fillStyle = corona;
  ellipse(0, 0, r * 32);

  let inner = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 5);
  inner.addColorStop(0,    "rgba(255,255,200,0.92)");
  inner.addColorStop(0.35, "rgba(255,210,50,0.48)");
  inner.addColorStop(1,    "rgba(255,100,0,0)");
  ctx.fillStyle = inner;
  ellipse(0, 0, r * 10);

  fill(255, 255, 230);
  ellipse(0, 0, r * 2.4);

  if (!titleMode) {
    let ls = constrain(11 / zoom, 9, 16);
    fill(255, 255, 255, 130);
    textAlign(CENTER, BOTTOM);
    textSize(ls);
    text("Sun  ·  0 ly", 0, -r * 6);
  }

}

// ── ALL STARS ──────────────────────────────────────
function drawAllStars(alpha) {
  let hoveredStar = null;

  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    let p = pos[i];
    let depth = map(s["Distance (ly)"], 0, 2600, 1.0, 0.45);
    let a = alpha * depth;
    if (a < 2) continue;

    let angle = atan2(p.y, p.x);
    let starDist = lyToPx(s["Distance (ly)"]);

    let tickInner = starDist * 0.94;
    let tickOuter = starDist * 1.06;
    stroke(255, 255, 255, a * 0.35);
    strokeWeight(max(1.2 / zoom, 0.5));
    line(
      cos(angle) * tickInner, sin(angle) * tickInner,
      cos(angle) * tickOuter, sin(angle) * tickOuter
    );
    noStroke();
  }

  // Pass 2: stars
  for (let i = 0; i < stars.length; i++) {
    let s   = stars[i];
    let p   = pos[i];
    let lum = s["Luminosity (L/Lo)"];
    let r   = starRadius(s["Radius (R/Ro)"]);
    let c   = specColor(s["Spectral Class"]);

    let depth = map(s["Distance (ly)"], 0, 2600, 1.0, 0.45);
    let a = alpha * depth;
    if (a < 2) continue;

    let sx = p.x * zoom + width/2 + camX;
    let sy = p.y * zoom + height/2 + camY;
    let hitR = max(r * 2.0 * zoom, 5);
    let hovered = (STATE === "explore") && dist(mouseX, mouseY, sx, sy) < hitR;
    if (hovered) hoveredStar = s;

    push();
      translate(p.x, p.y);
      drawStarGlow(c, lum, r, a / 255, hovered);

      if (hovered) {
        let ls = constrain(10 / zoom, 8, 14);
        fill(255, 220);
        noStroke();
        textAlign(CENTER, BOTTOM);
        textSize(ls);
        text(s["Name"], 0, -(r * 2.5) - ls);
        fill(255, 200, 80, 180);
        textSize(ls * 0.85);
        text(s["Distance (ly)"].toFixed(1) + " ly", 0, -(r * 2.5) - ls * 2.2);
      }
    pop();
  }

  showTooltip(hoveredStar);
}

function drawStarGlow(c, lum, r, af, hovered) {
  let ctx = drawingContext;
  let gm  = glowMult(lum);
  let pw  = hovered ? 1 + sin(frameCount * 0.1) * 0.05 : 1;

  let bloom = ctx.createRadialGradient(0, 0, 0, 0, 0, r * gm * 3.5);
  bloom.addColorStop(0,   `rgba(${c[0]},${c[1]},${c[2]},${af * 0.06})`);
  bloom.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},${af * 0.03})`);
  bloom.addColorStop(1,   `rgba(${c[0]},${c[1]},${c[2]},0)`);
  ctx.fillStyle = bloom;
  ellipse(0, 0, r * gm * 7);

  let mid = ctx.createRadialGradient(0, 0, 0, 0, 0, r * gm);
  mid.addColorStop(0,    `rgba(255,255,255,${af * 0.95})`);
  mid.addColorStop(0.25, `rgba(${c[0]},${c[1]},${c[2]},${af * 0.6})`);
  mid.addColorStop(0.7,  `rgba(${c[0]},${c[1]},${c[2]},${af * 0.15})`);
  mid.addColorStop(1,    `rgba(${c[0]},${c[1]},${c[2]},0)`);
  ctx.fillStyle = mid;
  ellipse(0, 0, r * gm * 2.2);

  fill(255, 255, 245, af * 255);
  ellipse(0, 0, r * 1.8);

  if (hovered) {
    noFill();
    stroke(255, 255, 255, 130 * pw);
    strokeWeight(0.8 / zoom);
    ellipse(0, 0, r * 3.5 * pw);
    noStroke();
  }
}

function glowMult(lum) {
  let lf = constrain(Math.log(lum + 1) / Math.log(200000), 0.05, 1.0);
  return map(lf, 0, 1, 1.6, 5.5);
}

// ── BACKGROUND ─────────────────────────────────────
function drawBgDots(alpha) {
  noStroke();
  for (let d of bgDots) {
    let tw = 0.7 + sin(frameCount * 0.013 + d.x * 0.008) * 0.3;
    fill(255, 255, 255, alpha * (d.a / 255) * tw);
    ellipse(d.x, d.y, d.r * 2);
  }
}

function ambientDust() {
  randomSeed(999);
  noStroke();
  for (let i = 0; i < 250; i++) {
    let x  = random(width), y = random(height);
    let tw = 0.55 + sin(frameCount * 0.009 + i * 1.8) * 0.45;
    fill(255, 255, 255, random(6, 40) * tw);
    ellipse(x, y, random(0.25, 0.85) * 2);
  }
}

// ── DISTANCE RINGS ─────────────────────────────────
function drawRings(alpha) {
  let intervals = [5, 10, 25, 50, 100, 500, 1000, 2000];

  for (let d of intervals) {
    let r  = lyToPx(d);
    let sr = r * zoom;
    if (sr < 18 || sr > max(width, height) * 5) continue;

    let fade = constrain(map(sr, 18, 60, 0, 1), 0, 1) * (alpha / 255);

    stroke(255, 255, 255, fade * 58);
    strokeWeight(max(0.8 / zoom, 0.4));
    noFill();
    ellipse(0, 0, r * 2);

    stroke(255, 255, 255, fade * 18);
    strokeWeight(max(3.5 / zoom, 1.5));
    ellipse(0, 0, r * 2);

    noStroke();

    let ls = constrain(10 / zoom, 8, 14);
    let labelY = -r - ls * 0.8;
    let labelText = d + " ly";

    let ctx = drawingContext;
    ctx.font = `${ls}px Inconsolata`;
    let tw = ctx.measureText(labelText).width;
    ctx.fillStyle = `rgba(0,0,8,${fade * 0.75})`;
    ctx.fillRect(-tw/2 - 5, labelY - ls, tw + 10, ls * 1.4);

    fill(255, 255, 255, fade * 200);
    textSize(ls);
    textAlign(CENTER, BOTTOM);
    text(labelText, 0, labelY);
  }
}

// ── SPECTRAL LEGEND ────────────────────────────────
function drawLegend() {
  let classes = ["O","B","A","F","G","K","M"];
  let names   = ["Blue supergiant","Blue-white","White","Yellow-white","Sun-like","Orange","Red dwarf"];

  let isMobile = width < 500;
  let rowH  = isMobile ? 20 : 26;
  let dotX  = isMobile ? 22 : 28;
  let textX = isMobile ? 32 : 38;
  let fs    = isMobile ? 9  : 10.5;
  let panW  = isMobile ? 150 : 192;
  let startY = 12;

  let displayClasses = isMobile
    ? classes.map((c,i) => ({c, n: c}))
    : classes.map((c,i) => ({c, n: c + "  " + names[i]}));

  let ctx = drawingContext;
  ctx.fillStyle = "rgba(0,0,12,0.58)";
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(8, startY, panW, classes.length * rowH + 16, 4);
  else ctx.rect(8, startY, panW, classes.length * rowH + 16);
  ctx.fill();

  push();
  for (let i = 0; i < classes.length; i++) {
    let c = SPECCOLOR[classes[i]] || [255,255,255];
    let y = startY + 14 + i * rowH;

    let dctx = drawingContext;
    let gr = dctx.createRadialGradient(dotX, y, 0, dotX, y, 7);
    gr.addColorStop(0,   "rgba(255,255,255,0.9)");
    gr.addColorStop(0.4, `rgba(${c[0]},${c[1]},${c[2]},0.8)`);
    gr.addColorStop(1,   `rgba(${c[0]},${c[1]},${c[2]},0)`);
    dctx.fillStyle = gr;
    noStroke();
    ellipse(dotX, y, 14);

    fill(c[0], c[1], c[2], 230);
    ellipse(dotX, y, isMobile ? 4.5 : 5.5);

    fill(255, 255, 255, 140);
    textSize(fs);
    textAlign(LEFT, CENTER);
    text(displayClasses[i].n, textX, y);
  }
  pop();
}

// ── TOUCH SUPPORT ──────────────────────────────────
function touchStarted() {
  if (STATE === "title") {
    let t = touches[0];
    if (dist(t.x, t.y, width/2, height * 0.28) < min(width,height) * 0.12) {
      STATE = "transition";
      transitionT = 0;
      document.getElementById("title-ui").classList.add("fade-out");
    }
    return false;
  }
  dragging = true;
  return false;
}

function touchEnded() { dragging = false; return false; }

function touchMoved() {
  if (STATE === "explore" && touches.length === 1) {
    camX += touches[0].x - ptouches[0].x;
    camY += touches[0].y - ptouches[0].y;
  }
  if (STATE === "explore" && touches.length === 2) {
    let d1 = dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
    let d2 = dist(ptouches[0].x, ptouches[0].y, ptouches[1].x, ptouches[1].y);
    if (d2 > 0) targetZoom = constrain(targetZoom * (d1/d2), 0.003, 1.1);
  }
  return false;
}

// ── TOOLTIP ────────────────────────────────────────
function showTooltip(s) {
  let el = document.getElementById("tip");
  if (!s) {
    let _ssx = width/2 + camX;
    let _ssy = height/2 + camY;
    let _sunR = max(starRadius(1.0) * 3 * zoom, 10);
    if (dist(mouseX, mouseY, _ssx, _ssy) >= _sunR) el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");

  let sp  = s["Spectral Class"][0];
  let tn  = {O:"Blue supergiant",B:"Blue/white",A:"White",F:"Yellow-white",G:"Yellow",K:"Orange",M:"Red dwarf"};
  el.innerHTML = `
    <div class="name">${s["Name"]}</div>
    <div class="row"><span class="lbl">Distance</span>   <span class="val">${s["Distance (ly)"].toFixed(2)} ly</span></div>
    <div class="row"><span class="lbl">Type</span>       <span class="val">${tn[sp] || sp}</span></div>
    <div class="row"><span class="lbl">Radius</span>     <span class="val">${s["Radius (R/Ro)"].toFixed(2)} R☉</span></div>
    <div class="row"><span class="lbl">Luminosity</span> <span class="val">${s["Luminosity (L/Lo)"].toFixed(0)} L☉</span></div>
    <div class="row"><span class="lbl">Temperature</span><span class="val">${s["Temperature (K)"].toFixed(0)} K</span></div>
  `;

  let tipW = el.offsetWidth  || 220;
  let tipH = el.offsetHeight || 140;
  let tx = mouseX + 20;
  let ty = mouseY + 20;
  if (tx + tipW > width  - 10) tx = mouseX - tipW - 10;
  if (ty + tipH > height - 10) ty = mouseY - tipH - 10;
  el.style.left = max(tx, 10) + "px";
  el.style.top  = max(ty, 10) + "px";
}

// ── STAGE LABEL ────────────────────────────────────
function updateStage() {
  let idx = zoom > 0.5 ? 0 : zoom > 0.13 ? 1 : zoom > 0.03 ? 2 : 3;
  if (idx !== stageIdx) {
    stageIdx = idx; stageTimer = 240;
    let el = document.getElementById("stage");
    el.textContent = STAGE_TEXT[idx];
    el.classList.add("show");
  }
  if (stageTimer > 0 && --stageTimer === 0)
    document.getElementById("stage").classList.remove("show");
}

// ── SCALE BAR ──────────────────────────────────────
function updateScaleBar() {
  let pct = constrain(map(Math.log(zoom), Math.log(0.003), Math.log(1.2), 0, 100), 0, 100);
  document.getElementById("fill").style.height = pct + "%";
}

// ── CURSOR ─────────────────────────────────────────
function drawCursor() {
  // Hit test against the sun's new position on the title screen
  let onSun = STATE === "title" && dist(mouseX, mouseY, width/2, height * 0.28) < min(width,height) * 0.09;

  let onStar = false;
  if (STATE === "explore") {
    for (let i = 0; i < stars.length; i++) {
      let p  = pos[i];
      let r  = starRadius(stars[i]["Radius (R/Ro)"]);
      let sx = p.x * zoom + width/2 + camX;
      let sy = p.y * zoom + height/2 + camY;
      if (dist(mouseX, mouseY, sx, sy) < max(r * 2.0 * zoom, 5)) { onStar = true; break; }
    }
  }

  push(); noFill();
  if (onSun || onStar) {
    stroke(255, 210, 70, 210); strokeWeight(1.2);
    ellipse(mouseX, mouseY, 26);
    fill(255, 210, 70, 110); noStroke();
    ellipse(mouseX, mouseY, 7);
  } else if (dragging) {
    stroke(255, 255, 255, 90); strokeWeight(1);
    ellipse(mouseX, mouseY, 20);
    stroke(255, 255, 255, 55);
    line(mouseX-6, mouseY, mouseX+6, mouseY);
    line(mouseX, mouseY-6, mouseX, mouseY+6);
  } else {
    stroke(255, 255, 255, 80); strokeWeight(1);
    ellipse(mouseX, mouseY, 16);
    fill(255, 255, 255, 150); noStroke();
    ellipse(mouseX, mouseY, 3);
  }
  pop();
}

// ── INPUT ──────────────────────────────────────────
function mousePressed() {
  if (STATE === "title") {
    if (dist(mouseX, mouseY, width/2, height * 0.28) < min(width,height) * 0.09) {
      STATE = "transition";
      transitionT = 0;
      document.getElementById("title-ui").classList.add("fade-out");
    }
    return;
  }
  dragging = true;
}

function mouseReleased() { dragging = false; }

function mouseDragged() {
  if (STATE === "explore") { camX += movedX; camY += movedY; }
}

function mouseWheel(e) {
  if (STATE === "title") {
    if (e.delta > 0) {
      STATE = "transition";
      transitionT = 0;
      document.getElementById("title-ui").classList.add("fade-out");
    }
    return false;
  }

  if (!scrollOn) return false;
  let f = e.delta > 0 ? 0.88 : 1.13;
  if (zoom < 0.03) f = e.delta > 0 ? 0.93 : 1.07;
  targetZoom = constrain(targetZoom * f, 0.003, 1.1);
  return false;
}

// ── HELPERS ────────────────────────────────────────
function lyToPx(ly) {
  let base = min(width, height);
  let sf = base < 600 ? base*0.20 : base < 1000 ? base*0.15 : base*0.115;
  return Math.log(ly + 1) * sf;
}

function starRadius(r) {
  return constrain(Math.sqrt(r) * 3.5 * (min(width,height) / 900), 1.2, 38);
}

function specColor(cls) {
  return SPECCOLOR[cls ? cls[0] : "A"] || [255,255,255];
}

function easeInOut(t) {
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
}

// ── SUN TOOLTIP ────────────────────────────────────
function showSunTooltip() {
  let el = document.getElementById("tip");
  el.classList.remove("hidden");
  el.innerHTML = `
    <div class="name">The Sun</div>
    <div class="row"><span class="lbl">Distance</span>   <span class="val">0 ly (our star)</span></div>
    <div class="row"><span class="lbl">Type</span>       <span class="val">Yellow dwarf (G2V)</span></div>
    <div class="row"><span class="lbl">Radius</span>     <span class="val">1.00 R☉</span></div>
    <div class="row"><span class="lbl">Luminosity</span> <span class="val">1 L☉</span></div>
    <div class="row"><span class="lbl">Temperature</span><span class="val">5,778 K</span></div>
  `;
  let tipW = el.offsetWidth  || 220;
  let tipH = el.offsetHeight || 140;
  let tx = mouseX + 20;
  let ty = mouseY + 20;
  if (tx + tipW > width  - 10) tx = mouseX - tipW - 10;
  if (ty + tipH > height - 10) ty = mouseY - tipH - 10;
  el.style.left = max(tx, 10) + "px";
  el.style.top  = max(ty, 10) + "px";
}

function hideTip() {
  document.getElementById("tip").classList.add("hidden");
}
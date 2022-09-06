////////////////INFO & FEATURES
let myTitle = "WAVES CIRCLE";
let present = '<h2>' + myTitle + '</h2><p>by</p><h3>smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.06"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
  "Palette": palette.name,
  "Brush": brush.name,
  "Force": turb.name,
  "Radius": rad.name,
  "Inner Radius": inRad.name,
  "Position X": circlePosX.name,
  "Position Y": circlePosY.name,
  "Mode": amp.name
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
// let globalW = window.innerWidth;
// let globalH = window.innerHeight;
let globalSize = 1024;
let cnv;
let pD = 1;
let gen;

function preload() { }

async function setup() {
  progressShow();
  randomSeed(seed);
  noiseSeed(seed);
  cnv = createCanvas(globalSize, globalSize*1.5)
  cnv.parent('fullScreen');
  pixelDensity(pD);
  rectMode(CENTER)
  angleMode(DEGREES)
  background(random(palette.bgClr))
  grainy(10)
  gen = new myObj();
  gen.show();
}

function draw() {
}
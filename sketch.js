var canvas;

let angle = 0;
let train;

function preload() {
  train = loadModel('block.obj' ,true);
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, 1000 ,WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function draw() {
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  background(245);
  noStroke();
  ambientLight(60, 60, 60);
  ambientMaterial(255);
  translate(400,0);
  pointLight(255, 255, 255, -100, -200, 300);
  pointLight(10, 20, 20, 400, 200, -600);
  rotateX(550+locY * -0.001);
  rotateY(800.3+locX * -0.001);
  rotateZ(-50+mouseY * -0.001);
  scale(2);
  model(train);
}
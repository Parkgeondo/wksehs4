var canvas;
let current;
let res = 10;
let particles = [];
let img;
let x = 1;
let y = 1;
let easing = 0.05;
let mySound;

function windowResized () {
  resizeCanvas(windowWidth, 7800);
}

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('MP_Blop');
}

function setup() {
  img = loadImage('img/sticker1.png');
  canvas = createCanvas(windowWidth, 7800);
  canvas.position(0,0);
  canvas.style('z-index','1');
}

function draw() {
}

function mousePressed(){
  placeParticles()
  console.log(particles);
  for (let i= 0; i < particles.length; i++){
  particles[i].display();
  }
  mySound.play();
}

function placeParticles(){
 let i = mouseX;
 let j = mouseY;
 particles.push(new Particle(i, j));
}

class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
}
  display() {
    fill(24,26,24);
    image(img, this.x - 100, this.y - 100, 200, 200);
  }
}

function canvasPressed() {
  mySound.play();
}
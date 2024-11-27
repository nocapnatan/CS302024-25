// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let music, boundSound
let started = false;
let pos; let vel;
let totalBounces = 0;

function preload(){
  music = loadSound("assets/backround.mp3");
  bounceSound = loadSound("assets/bounceSound.wav")
}

function setup() {
  createCanvas(300, 200);//4:3
  pos = createVector(width/2,height/2);
  vel = createVector(5,3)
  textSize(30)
  textAlign(CENTER)
}

function draw() {
  background(220);
  if(started === false){
    text("Click to Begin", width/2,height/2);
    if(mouseIsPressed){
      started = true;
      music.setVolume(0.1)
      music.loop()
    }
  }
  else{
    updateBall();
    text(totalBounces, width/2,height/2);
  }
}

function updateBall(){
  pos.add(vel);
  bounceSound.setVolume(0.9);
  if (pos.x < 0 || pos.x > width){
    totalBounces++;
    boundSound.play();
    vel.x*= -1;
    localStorage.setitem("bounce", totalBounces)
  }
  if (pos.y <0 || pos.y > height){
    totalBounces++;
    vel.y*= -1;
  }
  circle(pos.x, pos.y, 20)
}
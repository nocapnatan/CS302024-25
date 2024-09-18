// Events (mouse/keyboard)
// Natan 
// sep.12 2024

//Global Variable Scope 
let tSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  textSize(tSize);
  let position = mouseX + ", " + mouseY;
  text(position, mouseX, mouseY);
  fill(255,0,0);
  circle(width/2, height/2, 100)
}

function mousePressed(){
  tSize = random(20, 200);
}


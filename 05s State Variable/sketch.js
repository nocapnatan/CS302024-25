// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let currentColor = 0; 
let circleSize = 50;
let myColor;
let growing;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(50,230,165);
}

function draw() {
  background(225);

  switch(currentColor){
    case 0:
      fill(255,0,0);   break;
    case 1:
      fill(myColor);   break;
    case 2:
      fill(0,255,255);  break;
  }
  
  if (frameCount % 30 === 0) {
  currentColor ++;
  if(currentColor > 2) currentColor = 0;

}

if (growing) circleSize += 2;
else circleSize -=2;

circle(width/2, height/2, circleSize);
}

function keyPressed(){
  if(key === "a"){
    growing = !growing;
  }
}
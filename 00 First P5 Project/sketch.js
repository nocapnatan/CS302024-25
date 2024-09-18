// Coordinate systems 
// Natan.M
// Sept 11. 2024
//Looking at how coordinates work 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  print("setup runs once at tthe start.")
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircles();

}

function drawCircles() {
 //draw  some circles
  fill(100,200,255);  //R, G, B
  circle(0,0,50);

  fill(204,102,0)
  circle(100,-20,50);

  fill(500,0,0)
  circle(700,50,50);
}
drawCircles()

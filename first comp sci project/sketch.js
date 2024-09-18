// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(141,221,233)
  randomSeed(5)
  fill(255,206,186)
  circle(75,75,400)

  noStroke()
  fill(255)

  
circle(random(0,400)+mouseX,100,200)
circle(random(0,400)+mouseY,125,200)
circle(random(0,400)+mouseY,150,200)
}


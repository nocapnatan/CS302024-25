// Project Title
// natan mathenge
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
}

function cantor(x,y,len,depth){
  if (depth > 0){
    line(x,y, x+len, y);

    let newY = y + 20; 
    cantor(x, newY, len/3, depth-1);
    cantor(x + 2/3*len,newY, len/3, depth - 1)

  }
}
function draw() {
  background(225);
  //circleInCircle(width/2, height/2,width);
  //cantor(width*0.1, height*0.3, width*0.8, 6)
  //circleFractal(width/2, height/2,height/2)
  squarefractal(width/2, height/2,width/2)
}

function squarefractal(x,y,len){
  if (len > 10){
    rectMode(CENTRE);
    fill(random(s55), random(255), random(255))

    push()
    translate(x,y);
    rotate(radians(frameCount))
    square(0,0 len);
    pop()

    squarefractal(x - len/2,y - len/2, len/2)
    squarefractal(x - len/2,y + len/2, len/2)
    squarefractal(x + len/2,y - len/2, len/2)
    squarefractal(x + len/2,y + len/2, len/2)
  }
}
function circleFractal(x,y, d){
  if(d>2){
    circle(x,y,d)

    circleFractal(x,y,d/den);

function circleInCircle(x+d/2, y, d/2);
  if(d>10){
    circle(x,y,d)
    let den = map(mouseX,0, width, 1.01, 1.5)
    circleInCircle(x,y,d/den);
  }
}
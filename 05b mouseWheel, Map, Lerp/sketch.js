// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, d=100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/4;  y= height/4;
  noFill
}

function draw() {
  background(220);
  x = lerp(x, mouseX, 0.15);
  y = lerp(y, mouseY, 0.15);

  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = map(x, 0, width, 0, 255, 0);
  circle(x,y,d);
}

function mouseWheel(event){
  print(event.delta);
  if(event.delta > 0){
    d -= 10;
    if(d < 10) d = 10;
  }
  else{
    d += 10;
  }
}

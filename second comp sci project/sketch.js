// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  mybackground();
  myForeground();
}

function mybackground() {

  let rectHeight = 40;
  for(let y = 0; y < height; y+= rectHeight){
    Let value = MAP(Y,0,WIDTH,0,255)
    fill(value,255-value,value);
    rect(0, y, width, rectHeight)
  }
}

function myForeground(){
  for (let x = 0 ; x < width ; x = x + 40){
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x,height/2);
  }

  let starCount = 0;
  fill(255,0,0);
  while(starCount < 100){
    let x = random(0, width);
    let y = random(0, height);
    circle(x,y,10);
    starCount++;

  }
}
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  loopReview();
}

function loopReview(){
  for(let x = 0; x <= 40; x = x+20 ) {
    for(let y = 0; y <= 40; y += 20){
      print(x,y);
    }
  }
}


function draw() {
  background(220);
  renderGrid();
}

function roundDist(x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(yy1 - y2);
  let c = sqrt(sq(a) + sq(b));

}

function renderGrid(){
  for(let x = 0; x < width; x += gridSpacing){
  for(let y = 0; y < height; y += gridSpacing){
    circle(x,y,gridSpacing);

    text(d, x,y);
    }
  }
}
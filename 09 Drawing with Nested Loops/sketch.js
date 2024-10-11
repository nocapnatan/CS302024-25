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
}


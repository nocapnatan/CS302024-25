// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let NUM_CIRCLES = 40;   LEFT_ARROW
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  noFill();
  let smallest = Infinity; //dummy value 
  let smallx = 0;
  let smally = 0;
  for(let i = 0; i<NUM_CIRCLES; i++){  //repeat 40
    let x = random(0,width);
    let y = random(0,height);
    let d = random(20,60);
    if(d < smallest){
      smallest = d;
      smallx = x;   small = y;
    }
    circle(x,y,d)
  }
  // too late...
}
fill(255,0,0);
text(smallest, width/2)
text(smallest,width/2, height/2)
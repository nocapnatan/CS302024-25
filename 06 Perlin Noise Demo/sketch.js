// Perlin Noise Demo
// Mr. Scott
// Sept 27, 2024

// random()  vs  noise()
let cTime = 5; //current "noise" time
let cInterval = 0.02; // how fast we move
           // down the noise graph

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(2);
}

function draw() {
  background(220);
  line(width / 2, 0, width / 2, height);

  // draw with random()
  randomCircle();
  // draw with noise()
  perlinCircle();

  staircase();
}

function staircase(){
  //draw a staircase using loops
  randomSeed(2); //reset Time if using perlin
  for(let x = 0; x < width; x += 20){
    //20...rectangle spacing / rectWidth
    fill(0);
    let rectHeight = random(50,500);
    rect(x, height, 20, -rectHeight);
  }
}

function perlinCircle(){
  // draw a circle using noise() with
  // unpredictable size (later, color)
  let cSize = noise(cTime); // 0-1
  cSize = map(cSize, 0, 1, 1, 255);
  
  let r = noise(cTime);      //0-1
  let g = noise(cTime + 2);  //0-1
  let b = noise(cTime + 5);  //0-1

  r = map(r, 0, 1, 0, 255);
  g = map(g, 0, 1, 0, 255);
  b = map(b, 0, 1, 0, 255);

  fill(r, g, b);
  circle(width * 0.75, height/2, cSize)
  text(round(cSize),width * 0.75, height/2);
  cTime += cInterval;
}

function randomCircle() {
  // draw a circle that uses random()
  // unpredictable size (later, color)
  let cSize = random(1, 255);
  fill(cSize, 255-cSize, cSize/2)
  circle(width * 0.25, height / 2, cSize);
  textAlign(CENTER, CENTER)
  textSize(30);   fill(0);
  text(round(cSize), width * 0.25, height / 2);
}

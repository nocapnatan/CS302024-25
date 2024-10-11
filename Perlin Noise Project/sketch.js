

// Perlin noise project
// Natan

let cTime = 5;
let rectWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(220);
  stairCase();
  widthChanger();
}

function stairCase(){
  for(let x = 0; x < width; x += rectWidth){
    cTime += 0.01;
    noFill();
    let rectHeight = noise(cTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(x, height, rectWidth, -rectHeight); // Fixed "reactWidth" typo
  }
}

function widthChanger(){
  if(keyIsPressed && keyCode === 83){ // 'S' key for decreasing width
    rectWidth -= 1;
  } 
  else if (keyIsPressed && keyCode === 87){ // 'W' key for increasing width
    rectWidth += 1;
  }
}



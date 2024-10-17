// Perlin noise project
// Natan
//10/11/2024



let cTime = 5;
let rectWidth = 5;
let highestPeak = 0;
let peakX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(220);
  stairCase();
  widthChanger();
  drawFlag(peakX, highestPeak); // Drawing the flag at the highest peak
}

function stairCase() {
  highestPeak = 0; // Reset the highest peak for each frame
  for (let x = 0; x < width; x += rectWidth) {
    cTime += 0.01;
    noFill();
    let rectHeight = noise(cTime);
    rectHeight = map(rectHeight, 0, 1, 0, height);
    rect(x, height, rectWidth, -rectHeight);

    // Check if this rectangle is the highest so far
    if (rectHeight > highestPeak) {
      highestPeak = rectHeight;
      peakX = x;
    }
  }
}

function widthChanger() {
  if (keyIsPressed && keyCode === 83) { // 'S' key for decreasing width
    rectWidth -= 1;
  } 
  else if (keyIsPressed && keyCode === 87) { // 'W' key for increasing width
    rectWidth += 1;
  }
}

function drawFlag(x, peakHeight) {
  stroke(0);
  fill(255, 0, 0);
  ellipse(x + rectWidth / 2, height - peakHeight, 10, 10); // Flag at the highest peak
}

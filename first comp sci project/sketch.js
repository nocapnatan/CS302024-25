let snowflakes = [];
let snowmanX, snowmanY;
let currentBack = 0;

function setup() {
  createCanvas(1800, 1600);
  snowmanX = width / 2;
  snowmanY = height - 100;

  // Create snowflakes
  for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake());
  }
}

function draw() {
  setBackground();

  // Draw snowflakes and update when the mouse is pressed
  if (mouseIsPressed) {
    for (let flake of snowflakes) {
      flake.update();
      flake.display();
    }
  }

  // Draw snowman, move with mouse when pressed
  drawSnowman(snowmanX, snowmanY);
  if (mouseIsPressed) {
    snowmanX = mouseX;
    snowmanY = mouseY;
  }

  // Display artist's name
  fill(0);
  textSize(16);
  text("Your Name", 10, height - 10);
}

// Background state changer on middle mouse button click
function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4;
  }
}

// Function to change background based on state
function setBackground() {
  if (currentBack === 0) background(200, 230, 255); // Light blue
  if (currentBack === 1) background(135, 206, 235); // Day blue
  if (currentBack === 2) background(0); // Night
  if (currentBack === 3) background(255); // Snowstorm
}

// Draw a simple snowman
function drawSnowman(x, y) {
  fill(255);
  stroke(0);
  ellipse(x, y, 60);     // Bottom
  ellipse(x, y - 40, 40); // Middle
  ellipse(x, y - 70, 30); // Head

  // Eyes and carrot nose
  fill(0);
  ellipse(x - 10, y - 75, 5); // Left eye
  ellipse(x + 10, y - 75, 5); // Right eye
  fill(255, 140, 0);
  triangle(x, y - 70, x, y - 60, x + 10, y - 65); // Nose
}

// Snowflake class
class Snowflake {
  constructor() {
    this.posX = random(width);
    this.posY = random(-50, 0);
    this.size = random(2, 5);
    this.speed = random(1, 3);
  }

  update() {
    this.posY += this.speed;
    if (this.posY > height) {
      this.posY = 0;
      this.posX = random(width);
    }
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
}

// Interactive scene
// Natan mathenge 
// 10/9/2024

let snowflakes = [];
let snowmanX, snowmanY;
let backgroundColor;
let currentBack = 0; 

function setup() {
  createCanvas(1800, 1600);
  snowmanX = width / 2;
  snowmanY = height - 100;

  for (let i = 0; i < 300; i++) {
    snowflakes.push(new Snowflake());
  }

  // Set initial background color based on currentBack state
  updateBackground();

  describe('Snowmen move with the mouse, snowflakes fall, and background color cycles with middle-click.');
}

function draw() {
  setBackground(); // Set the background based on the currentBack state

  for (let flake of snowflakes) {
    flake.update();
    flake.display();
  }

  drawSnowman(snowmanX, snowmanY);
  if (mouseIsPressed) {
    snowmanX = mouseX;
    snowmanY = mouseY;
  }

  // Draw a tree on the left side
  drawTree(300, height - 100, 50, 150);

  displayName();

  if (keyIsPressed && key === 'r') {
    resetSnowman();
  }
}

// Update background color based on the currentBack state
function setBackground() {
  background(backgroundColor);
}

// Draw snowman at (x, y) position
function drawSnowman(x, y) {
  fill(255);
  stroke(0);
  ellipse(x, y, 60, 60); // Bottom
  ellipse(x, y - 40, 40, 40); // Middle
  ellipse(x, y - 70, 30, 30); // Head

  // Snowman face details
  fill(0);
  ellipse(x - 10, y - 75, 5, 5); // Left eye
  ellipse(x + 10, y - 75, 5, 5); // Right eye
  fill(255, 140, 0); // Orange for nose
  triangle(x, y - 70, x - 10, y - 60, x + 10, y - 65); // Nose
}

// Draw a tree at position (x, y)
function drawTree(x, y, trunkWidth, trunkHeight) {
  // Draw the trunk
  fill(139, 69, 19); // Brown color for the trunk
  rect(x - trunkWidth / 2, y - trunkHeight, trunkWidth, trunkHeight);

  // Draw the leaves as ellipses
  fill(34, 139, 34); // Green color for the leaves
  ellipse(x, y - trunkHeight, trunkWidth * 2, trunkWidth); // Bottom layer of leaves
  ellipse(x, y - trunkHeight - trunkWidth / 2, trunkWidth * 1.5, trunkWidth); // Middle layer
  ellipse(x, y - trunkHeight - trunkWidth, trunkWidth, trunkWidth / 2); // Top layer
}

// Reset snowman to the center of the canvas
function resetSnowman() {
  snowmanX = width / 2;
  snowmanY = height - 100;
}

// Display the name in the bottom left corner
function displayName() {
  fill(0);
  text("Natan", 10, height - 10);
}

// Key press functionality to randomize background color on spacebar
function keyPressed() {
  if (key === ' ') {
    backgroundColor = color(random(255), random(255), random(255)); 
  }
}

// Mouse pressed function to handle middle-click and cycle background state
function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4; // Cycle through 0, 1, 2, 3
    updateBackground(); // Update the background based on currentBack
  }
}

// Update the background color based on the currentBack state
function updateBackground() {
  if (currentBack === 0) {
    backgroundColor = color(135, 206, 235); // Light blue (daytime sky)
  } else if (currentBack === 1) {
    backgroundColor = color(25, 25, 112); // Midnight blue (night sky)
  } else if (currentBack === 2) {
    backgroundColor = color(240, 128, 128); // Light coral (sunset sky)
  } else if (currentBack === 3) {
    backgroundColor = color(47, 79, 79); // Dark slate gray (stormy sky)
  }
}

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
    noStroke();
    fill(255);
    ellipse(this.posX, this.posY, this.size);
  }
}

// The Balloon tree Project
// Natan
// 11/22/2024

let scale = 15; // Base length for branches
let leafDepthLimit = 4; // Depth below which leaves are drawn
let branchLimit = 250; // Horizontal limit for branch expansion

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(255);
  drawTree(width / 2, height * 0.9, 90, 6);
}

// Function to draw a branch line
function drawLine(x1, y1, x2, y2, depth) {
  // Set stroke color and weight based on depth
  stroke(0);
  strokeWeight(map(depth, 1, 6, 1, 10));
  line(x1, y1, x2, y2);
}

// Recursive tree drawing function
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    // Calculate endpoint for the current branch
    let x2 = x1 + cos(radians(angle)) * scale* depth;
    let y2 = y1 - sin(radians(angle)) * scale* depth;

    // Limit horizontal expansion of branches
    if (x2 < width / 2 - branchLimit || x2 > width / 2 + branchLimit) {
      return; // Stop branch growth if beyond the limit
    }

    // Draw the current branch
    drawLine(x1, y1, x2, y2, depth);

    // Adjust branch angles based on mouseX position
    let angleShift = map(mouseX, 0, width, 10, 40);

    // Recursively draw three branches
    drawTree(x2, y2, angle - angleShift, depth - 1);
    drawTree(x2, y2, angle + angleShift, depth - 1);
    drawTree(x2, y2, angle, depth - 1);

    // Draw leaves on branches below the depth limit
    if (depth < leafDepthLimit) {
      drawLeaf(x2, y2, depth);
    }
  }
}

// Function to draw a leaf (or balloon-like object)
function drawLeaf(x, y, depth) {
  // Randomize leaf size and color
  randomSeed(x * y * depth); // Ensures consistent appearance
  fill(random(50, 200), random(100, 255), random(50, 150));
  noStroke();

  // Size decreases for higher branches
  let size = random(10, 30 - depth * 3);
  ellipse(x, y, size, size);
}

// Function to adjust leaf depth limit with keyboard input
function keyPressed() {
  if (key === 'x') {
    leafDepthLimit = min(leafDepthLimit + 1, 6); // Increase limit, max 6
  } else if (key === 'z') {
    leafDepthLimit = max(leafDepthLimit - 1, 0); // Decrease limit, min 0
  }
}



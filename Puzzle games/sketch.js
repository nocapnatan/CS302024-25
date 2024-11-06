// Puzzle Game
// Natan Mathenge
// 10/29/2024
// Simple puzzle game with flipping patterns, win condition, and random starting board.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 255, 0, 0, 0],
  [255, 255, 255, 0, 0]
];
let pattern = "cross"; // Initial flip pattern is cross

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizeGrid(); // Randomize the starting grid
}

function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
  drawOverlay();
  checkWinCondition();
}

function mousePressed() {
  if (keyIsDown(SHIFT)) {
    flip(currentCol, currentRow); // Shift-click flips only the selected square
  } else {
    applyPatternFlip(currentCol, currentRow); // Regular click applies pattern flip
  }
}

function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    gridData[row][col] = gridData[row][col] === 0 ? 255 : 0; // Toggle between 0 and 255
  }
}

function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function drawOverlay() {
  fill(0, 255, 0, 100); // Semi-transparent green overlay
  if (pattern === "cross") {
    highlightAffectedSquares(currentCol, currentRow, [-1, 0, 1, 0], [0, -1, 0, 1]);
  } else {
    highlightAffectedSquares(currentCol, currentRow, [-1, 0, 1, -1, 0, 1, -1, 1], [-1, -1, -1, 0, 0, 0, 1, 1]);
  }
}

function highlightAffectedSquares(col, row, colsOffset, rowsOffset) {
  for (let i = 0; i < colsOffset.length; i++) {
    let newCol = col + colsOffset[i];
    let newRow = row + rowsOffset[i];
    if (newCol >= 0 && newCol < NUM_COLS && newRow >= 0 && newRow < NUM_ROWS) {
      rect(newCol * rectWidth, newRow * rectHeight, rectWidth, rectHeight);
    }
  }
}

function checkWinCondition() {
  let firstValue = gridData[0][0];
  for (let row of gridData) {
    for (let value of row) {
      if (value !== firstValue) return; // Exit if any value differs
    }
  }
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text("You Win!", width / 2, height / 2);
}

function randomizeGrid() {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      gridData[row][col] = random([0, 255]);
    }
  }
}

function applyPatternFlip(col, row) {
  if (pattern === "cross") {
    flip(col, row);
    flip(col - 1, row);
    flip(col + 1, row);
    flip(col, row - 1);
    flip(col, row + 1);
  } else {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        flip(col + dx, row + dy);
      }
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    pattern = pattern === "cross" ? "square" : "cross";
  }
}

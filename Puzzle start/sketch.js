// Puzzle start
// Natan mathenge 
// 10/28/2024

let grid = [[0, 100, 250, 50, 200],
            [255,0, 150, 100, 255],
            [0, 0, 255, 100, 50]];

const NUM_ROWS = 3;
const NUM_COLS = 5;

let rectheight, rectwidth;


function getArrayY(){
  return(int(mouseY/rectheight))
}

function getArrayX(){
  return(int(mouseX/rectwidth))
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(220);
  for (let x = 0; x < NUM_ROWS; x++) {
    for (let y = 0; y < NUM_COLS; y++) {
      element = grid[index];
    }    
  }
}
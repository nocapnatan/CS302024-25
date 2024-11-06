// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = []
let level = [
  [0, 1, 0, 0,1],
  [0, 0, 1, 1,0],
  [0, 0, 0, 0,0],
  [1, 1, 0, 1,0],
  [0, 1, 0, 0,1]
]
const COLUMNS = 5, ROWS = 5, TITLE_SIZE = 100;
let playerX = 3, playerY = 4

function preload(){
  for(let i = 0; i < 3; i++){
    TITLE_SIZE.push(loadImage("assets/"+ i + ".png"));
  }
}

function setup() {
  createCanvas(COLUMNS*TITLE_SIZE, ROWS*TITLE_SIZE);
  level[playerY][playerX] = 2;
}

function draw() {
  renderBoard()
}


function renderBoard(){
  for(let col =0;  col < COLUMNS; col++){
    for(let row = 0;row < ROWS; row++){
      let pos = level[row][col]
      let currentImage = titles[pos]
      image(currentImage, col*TITLE_SIZE, row*TITLE_SIZE)
    }
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    swap(playerX, PlayerY, PlayerX, playerY)
  }
}
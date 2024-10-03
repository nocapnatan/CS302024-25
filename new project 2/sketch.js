

let snowflakes = [];
let snowmanX, snowmanY; 
let backgroundColor;

function setup() {
  createCanvas(1800, 1600);
  snowmanX = width / 2; 
  snowmanY = height - 100;

 
  for (let i = 0; i < 300; i++) {
    snowflakes.push(new Snowflake());
  }


  describe('Snowmen move with the mouse and snowflakes fall.');
  

  backgroundColor = color(random(255), random(255), random(255));
}

function draw() {
  setBackground(); 


  for (let flake of snowflakes) {
    flake.update(); 
    flake.display(); 
  }


  drawSnowman(snowmanX, snowmanY);
  if (mouseIsPressed) {
    snowmanX = mouseX;
    snowmanY = mouseY;
  }

  displayName();


  if (keyIsPressed && key === 'r') {
    resetSnowman();
  }
}


function setBackground() {
  background(backgroundColor); 
}

function drawSnowman(x, y) {
  fill(255);
  stroke(0);
  ellipse(x, y, 60, 60); 
  ellipse(x, y - 40, 40, 40); 
  ellipse(x, y - 70, 30, 30); 

  fill(0);
  ellipse(x - 10, y - 75, 5, 5); 
  ellipse(x + 10, y - 75, 5, 5); 
  fill(255, 140, 0);
  triangle(x, y - 70, x - 10, y - 60, x + 10, y - 65); 
}


function resetSnowman() {
  snowmanX = width / 2;
  snowmanY = height - 100;
}


function displayName() {
  fill(0);
  text("Natan", 10, height - 10);
}


function keyPressed() {
  if (key === ' ') { 
    backgroundColor = color(random(255), random(255), random(255)); 
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
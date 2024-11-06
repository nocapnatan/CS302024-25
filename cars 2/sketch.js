let eastBound = [];
let westBound = [];
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Populate vehicle arrays with 20 vehicles each
  for (let i = 0; i < 20; i++) {
    eastBound.push(new Vehicle(1));
    westBound.push(new Vehicle(0));
  }

  trafficLight = new TrafficLight();
}

function draw() {
  background(0, 255, 120);
  drawRoad();
  
  // Process eastbound vehicles
  for (let vehicle of eastBound) {
    vehicle.action();
  }

  // Process westbound vehicles
  for (let vehicle of westBound) {
    vehicle.action();
  }

  trafficLight.display();
  trafficLight.checkState();
}

function drawRoad(){
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, width, height / 2);
  for (let i = 0; i <= width; i += width / 12) {
    fill(255, 255, 255);
    rect(i, height / 2, width / 24, 12);
  }
}

class Vehicle {
  constructor(direction) {
    this.type = int(random(0, 2));
    this.color = color(random(255), random(255), random(255));
    this.y = random(height / 4, 3 * height / 4);
    this.direction = direction;
    this.xSpeed = this.direction === 1 ? random(2, 5) : random(-5, -2);
    this.x = this.direction === 1 ? 0 : width;
  }

  display() {
    fill(this.color);
    if (this.type === 0) {
      rect(this.x, this.y, 50, 25); // Car
    } else {
      rect(this.x, this.y, 75, 35); // Truck
    }
  }

  move() {
    if (!trafficLight.red) {
      this.x += this.xSpeed;
      if (this.x > width + 50) {
        this.x = -50;
      } else if (this.x < -50) {
        this.x = width + 50;
      }
    }
  }

  speedUp() {
    if (abs(this.xSpeed) < 15) {
      this.xSpeed *= 1.1;
    }
  }

  speedDown() {
    if (abs(this.xSpeed) > 1) {
      this.xSpeed *= 0.9;
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  action() {
    this.move();
    if (random(100) < 1) {
      this.speedUp();
    }
    if (random(100) < 1) {
      this.speedDown();
    }
    if (random(100) < 1) {
      this.changeColor();
    }
    this.display();
  }
}

class TrafficLight {
  constructor() {
    this.state = "green";
    this.red = false;
    this.timer = 0;
  }

  display() {
    fill(this.red ? 'red' : 'green');
    rect(width - 50, 50, 20, 60);
  }

  checkState() {
    if (this.red) {
      this.timer++;
      if (this.timer > 120) {
        this.red = false;
        this.timer = 0;
      }
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    trafficLight.red = true;
  }
}

function mousePressed() {
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    eastBound.push(new Vehicle(1));
  } else if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    westBound.push(new Vehicle(0));
  }
}

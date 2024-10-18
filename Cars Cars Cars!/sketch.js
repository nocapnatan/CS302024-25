let eastbound = [];
let westbound = [];
let trafficLight = 'green';
let lightTimer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Populate vehicles
  for (let i = 0; i < 20; i++) {
    let y = height / 2 - 40 + random(0, 80); // Random y value for lane
    eastbound.push(new Vehicle(0, random(width), y, 1, random(2, 5), color(0, 0, 255))); // Cars in blue
    westbound.push(new Vehicle(1, random(width), y, 0, random(2, 5), color(255, 0, 0))); // Trucks in red
  }
}

function draw() {
  drawRoad();
  
  // If the light is green or lightTimer is 0 (back to green), allow cars to move
  if (trafficLight === 'green' || lightTimer === 0) {
    for (let v of eastbound) v.action();
    for (let v of westbound) v.action();
  }

  // Draw traffic light in top-left corner
  fill(trafficLight === 'green' ? 'green' : 'red');
  rect(20, 20, 20, 60);

  // Traffic light timer
  if (trafficLight === 'red' && lightTimer > 0) {
    lightTimer--;
    if (lightTimer === 0) {
      trafficLight = 'green'; // Switch back to green after timer ends
    }
  }
}

// Draw the road with a dashed line in the middle
function drawRoad() {
  background(220); // light gray background
  fill(0);
  rect(0, height / 2 - 50, width, 100); // black road
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2); // dashed lane divider
  }
  noStroke();
}

// Handle mouse clicks to dynamically add cars
function mousePressed() {
  let y = height / 2 - 40 + random(0, 80);
  if (mouseButton === LEFT) {
    if (keyIsDown(SHIFT)) {
      westbound.push(new Vehicle(1, random(width), y, 0, random(2, 5), color(255, 0, 0))); // Add westbound truck
    } else {
      eastbound.push(new Vehicle(0, random(width), y, 1, random(2, 5), color(0, 0, 255))); // Add eastbound car
    }
  }
}

// Handle spacebar press to toggle traffic light to red for 120 frames
function keyPressed() {
  if (key === ' ') {
    trafficLight = 'red';
    lightTimer = 120; // Stay red for 120 frames
  }
}

// Vehicle class
class Vehicle {
  constructor(type, x, y, direction, xSpeed, color) {
    this.type = type; // 0 for Car, 1 for Truck
    this.x = x;
    this.y = y;
    this.direction = direction; // 0 for left, 1 for right
    this.xSpeed = xSpeed;
    this.color = color;
  }

  // Render vehicle
  display() {
    fill(this.color);
    if (this.type === 0) {
      rect(this.x, this.y, 40, 20); // Car dimensions
    } else {
      rect(this.x, this.y, 60, 30); // Truck dimensions
    }
  }

  // Move the vehicle, wrap around if off-screen
  move() {
    this.x += this.direction === 1 ? this.xSpeed : -this.xSpeed;
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
  }

  // Increase speed (up to a max of 15)
  speedUp() {
    this.xSpeed = min(this.xSpeed + 1, 15);
  }

  // Decrease speed (down to a min of 0)
  speedDown() {
    this.xSpeed = max(this.xSpeed - 1, 0);
  }

  // Change vehicle color
  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  // Perform vehicle actions
  action() {
    this.move();
    if (random(1) < 0.01) this.speedUp();
    if (random(1) < 0.01) this.speedDown();
    if (random(1) < 0.01) this.changeColor();
    this.display();
  }
}

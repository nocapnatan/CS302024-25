// Planetary System Simulation
// Natan
// 11/03/2024

let sun;
let planets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(width / 2, height / 2); // Create the sun at the center
}

function draw() {
  background(0);
  sun.display(); // Draw the sun

  // Move and display each planet
  for (let planet of planets) {
    planet.action();
  }
}

class Sun {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50; 
  }

  display() {
    fill(255, 204, 0); 
    ellipse(this.x, this.y, this.radius * 2); 
  }
}

class Planet {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = 20; 
    this.color = color;
    this.xSpeed = random(1, 3); // Horizontal speed of the planet
    this.moons = []; 
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2); // Draw the planet

    // Draw moons
    for (let moon of this.moons) {
      moon.display(this.x, this.y); // Pass planet position to moon
    }
  }

  move() {
    // Move the planet from left to right
    this.x += this.xSpeed;

    // Reset position to the left edge if it moves off the right edge
    if (this.x - this.radius > width) {
      this.x = -this.radius;
    }
  }

  createMoon() {
    // Add a moon to this planet
    if (this.moons.length < 2) { // Limit to 2 moons
      this.moons.push(new Moon(this.color));
    }
  }

  action() {
    this.move(); // Move the planet
    this.display(); // Display the planet and its moons
  }
}

class Moon {
  constructor(planetColor) {
    this.radius = 10; // Smaller than the planet
    this.color = color(red(planetColor), green(planetColor), blue(planetColor), 100); // Greyish
    this.steps = 0;
    this.xSpeed = random(1, 2);
    this.orbitRadius = 30; // Distance from the planet
    this.direction = random([1, -1]);
  }

  display(planetX, planetY) {
    // Calculate moon's position around the planet
    let x = planetX + this.orbitRadius * cos(this.steps * 0.02);
    let y = planetY + this.orbitRadius * sin(this.steps * 0.02);

    // Increment steps for the orbital motion
    this.steps += this.xSpeed * this.direction;

    fill(this.color);
    ellipse(x, y, this.radius * 2); // Draw the moon
  }
}

function mousePressed() {
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    // Add a new planet on left click
    let newPlanet = new Planet(sun.x - 200, sun.y + random(-100, 100), color(random(255), random(255), random(255)));
    planets.push(newPlanet);
  } else if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    // Add a moon to the last planet on shift + left click
    if (planets.length > 0) {
      planets[planets.length - 1].createMoon();
    }
  }
}

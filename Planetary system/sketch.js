// Planetary System Simulation
// Natan
// 11/03/2024

let sun;
let planets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(width / 2, height / 2); 
}

function draw() {
  background(0);

  
  for (let planet of planets) {
    if (planet.direction === 1) {
      planet.action();
    }
  }

  sun.display(); 

  
  for (let planet of planets) {
    if (planet.direction === -1) {
      planet.action();
    }
  }
}

class Sun {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 100; 
  }

  display() {
    fill(255, 204, 0);
    ellipse(this.x, this.y, this.radius * 2);
  }
}

class Planet {
  constructor(color) {
    this.x = sun.x - 300; 
    this.y = sun.y;
    this.radius = 20; 
    this.color = color;
    this.xSpeed = random(1, 3); 
    this.direction = 1; 
    this.moons = []; 
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2); 

    
    for (let moon of this.moons) {
      moon.display(this.x, this.y);
    }
  }

  move() {
    
    this.x += this.xSpeed * this.direction;

    
    if (this.x > sun.x + 300 && this.direction === 1) {
      this.direction = -1;
    }

    
    if (this.x < sun.x - 300 && this.direction === -1) {
      this.direction = 1;
    }
  }

  createMoon() {
    if (this.moons.length < 2) {
      this.moons.push(new Moon(this.color));
    }
  }

  action() {
    this.move(); 
    this.display(); 
  }
}

class Moon {
  constructor(planetColor) {
    this.radius = 10; 
    this.color = color(red(planetColor), green(planetColor), blue(planetColor), 100); 
    this.steps = 0;
    this.xSpeed = random(1, 2);
    this.orbitRadius = 30;
    this.direction = random([1, -1]);
  }

  display(planetX, planetY) {
    let x = planetX + this.orbitRadius * cos(this.steps * 0.02);
    let y = planetY + this.orbitRadius * sin(this.steps * 0.02);

    this.steps += this.xSpeed * this.direction;

    fill(this.color);
    ellipse(x, y, this.radius * 2);
  }
}

function mousePressed() {
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    let newPlanet = new Planet(color(random(255), random(255), random(255)));
    planets.push(newPlanet);
  } else if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    if (planets.length > 0) {
      planets[planets.length - 1].createMoon();
    }
  }
}

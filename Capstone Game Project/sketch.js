// Game states
let gameState = "start"; // start, game, shop, checkout

// Player variables
let player;
let gravity = 0.5;
let jumpForce = -10;
let isJumping = false;

// Game variables
let obstacles = [];
let scrollSpeed = 5;
let gameOver = false;
let score = 0;
let coins = 0;

// Shop variables
let selectedAccessory = null;
let accessories = [
  { name: "Hat", price: 10, purchased: false },
  { name: "Cape", price: 20, purchased: false },
  { name: "Glasses", price: 15, purchased: false }
];

// Setup function
function setup() {
  createCanvas(800, 400);
  player = new Player(100, height - 50, 30, 30);
}

// Draw function
function draw() {
  background(30, 30, 50);

  if (gameState === "start") {
    displayStartScreen();
  } else if (gameState === "game") {
    playGame();
  } else if (gameState === "shop") {
    displayShop();
  } else if (gameState === "checkout") {
    displayCheckout();
  }
}

// Start screen
function displayStartScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Rhythm Runner", width / 2, height / 2 - 50);
  textSize(20);
  text("Press 'Enter' to Start", width / 2, height / 2);
  text("Press 'S' to Enter Shop", width / 2, height / 2 + 50);
}

// Game logic
function playGame() {
  // Check if the game is over
  if (gameOver) {
    displayGameOver();
    return;
  }

  // Update score and coins
  score += 1;
  if (frameCount % 60 === 0) coins += 1;

  displayScore();

  // Player updates
  player.update();
  player.show();

  // Manage obstacles
  if (frameCount % 60 === 0) {
    obstacles.push(new Obstacle());
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].show();

    if (obstacles[i].collides(player)) {
      gameOver = true;
    }

    if (obstacles[i].offScreen()) {
      obstacles.splice(i, 1);
    }
  }
}

// Shop screen
function displayShop() {
  background(50, 50, 80);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Item Shop", width / 2, 50);

  textSize(20);
  for (let i = 0; i < accessories.length; i++) {
    const acc = accessories[i];
    text(
      `${acc.name} - ${acc.price} Coins - ${acc.purchased ? "Purchased" : "Available"}`,
      width / 2,
      150 + i * 50
    );
  }

  text("Press '1', '2', '3' to Select an Item", width / 2, height - 100);
  text("Press 'B' to Go Back to Start Screen", width / 2, height - 50);
}

// Checkout screen
function displayCheckout() {
  background(50, 50, 80);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Checkout", width / 2, 50);

  if (selectedAccessory) {
    const acc = accessories[selectedAccessory];
    textSize(20);
    text(
      `Purchase ${acc.name} for ${acc.price} Coins?`,
      width / 2,
      height / 2 - 50
    );
    text("Press 'Y' to Confirm or 'N' to Cancel", width / 2, height / 2);
  }
}

// Player class
class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity = 0;
    this.accessory = null;
  }

  update() {
    this.velocity += gravity;
    this.y += this.velocity;

    if (this.y > height - this.h) {
      this.y = height - this.h;
      this.velocity = 0;
      isJumping = false;
    }
  }

  jump() {
    if (!isJumping) {
      this.velocity = jumpForce;
      isJumping = true;
    }
  }

  show() {
    fill(255, 100, 100);
    rect(this.x, this.y, this.w, this.h);

    if (this.accessory) {
      fill(255, 255, 0);
      ellipse(this.x + this.w / 2, this.y - 10, 15);
    }
  }
}

// Obstacle class
class Obstacle {
  constructor() {
    this.x = width;
    this.y = height - 50;
    this.w = random(20, 50);
    this.h = random(20, 50);
  }

  update() {
    this.x -= scrollSpeed;
  }

  show() {
    fill(100, 255, 100);
    rect(this.x, this.y, this.w, this.h);
  }

  collides(player) {
    return (
      player.x < this.x + this.w &&
      player.x + player.w > this.x &&
      player.y < this.y + this.h &&
      player.y + player.h > this.y
    );
  }

  offScreen() {
    return this.x + this.w < 0;
  }
}

// Score and game-over screen
function displayScore() {
  fill(255);
  textAlign(LEFT, TOP);
  textSize(16);
  text(`Score: ${score}`, 10, 10);
  text(`Coins: ${coins}`, 10, 30);
}

function displayGameOver() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Game Over! Press 'R' to Restart", width / 2, height / 2);
}

// Key handling
function keyPressed() {
  if (key === " " && gameState === "game") {
    player.jump();
  }

  if (key === "R" && gameOver) {
    resetGame();
  }

  if (key === "Enter" && gameState === "start") {
    gameState = "game";
  }

  if (key === "S" && gameState === "start") {
    gameState = "shop";
  }

  if (key === "B" && gameState === "shop") {
    gameState = "start";
  }

  if (key === "1" || key === "2" || key === "3") {
    if (gameState === "shop") {
      selectedAccessory = parseInt(key) - 1;
      gameState = "checkout";
    }
  }

  if (key === "Y" && gameState === "checkout") {
    const acc = accessories[selectedAccessory];
    if (coins >= acc.price && !acc.purchased) {
      coins -= acc.price;
      acc.purchased = true;
      player.accessory = acc.name;
    }
    gameState = "shop";
  }

  if (key === "N" && gameState === "checkout") {
    gameState = "shop";
  }
}

// Reset game
function resetGame() {
  gameOver = false;
  score = 0;
  player = new Player(100, height - 50, 30, 30);
  obstacles = [];
}

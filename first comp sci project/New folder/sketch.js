// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}
    function setup() {
      createCanvas(windowWidth, windowHeight);
    }

    // Draw clouds and blades
    function draw() {
      background(135, 206, 235); // Sky blue background

      // Draw clouds
      drawClouds();

      // Draw front row of blades
      drawBlades(100);

      // Draw back row of blades
      drawBlades(200);
    }

    // Function to draw clouds
    function drawClouds() {
      for (let i = 0; i < cloudCount; i++) {
        let x = (i * 200) % width;
        let y = (i * 100) % height / 2;
        drawCloud(x, y);
      }
    }

    // Function to draw a single cloud
    function drawCloud(x, y) {
      fill(255);
      noStroke();
      ellipse(x, y, 100, 50);
      ellipse(x + 40, y, 120, 60);
      ellipse(x - 40, y, 120, 60);
    }

    // Function to draw blades of grass
    function drawBlades(offset) {
      for (let i = 0; i < bladeCount; i++) {
        let x = (i * 40) + offset;
        let y = height - 50;
        drawBlade(x, y);
      }
    }

    // Function to draw a single blade of grass
    function drawBlade(x, y) {
      stroke(34, 139, 34);
      strokeWeight(3);
      line(x, y, x, y - random(50, 100));
    }

    // Resize canvas when window size changes
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }



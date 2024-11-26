// 3D Primitives and CSS Centering
// Mr. Scott
// Nov 23, 2023
// Making a fractal in 3D? Load an STL


function setup() {
  createCanvas(1200, 400, WEBGL); //0,0 center
}

function draw() {
  background(0);
  push();
  rotateY(radians(frameCount));
  angle = map(mouseX,0,width,-120,120);
  for(let i = 0; i<360; i+=45){
    push();
    rotateY(radians(i));
    boxes(50);
    pop();
  }
  
  pop();
}

let angle = 5;

function boxes(size){
  if(size > 10){
    rotateZ(radians(angle));
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.7);
  }
}
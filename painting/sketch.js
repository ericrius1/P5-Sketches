// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)vertex

// (230, 230, 250) // background
let radius = 20;
let segments = 20;
let isMousePressed = false;
let startingLinePoit;
let lines = [];

function setup() {
  createCanvas(800, 600);
  background(230, 150, 250);
  stroke(20);

}

function mousePressed() {
  ellipse(mouseX, mouseY, 50, 50);
  isMousePressed = true;
  startingLinePoint = createVector(mouseX, mouseY)
}

function mouseReleased() {
  isMousePressed = false;
  lines.push(new Line(startingLinePoint.x, startingLinePoint.y, mouseX, mouseY));


}

function draw() {
  background(230, 150, 250);  
 
  if(isMousePressed) {
    
    ellipse(mouseX, mouseY, 50, 50);
    line(startingLinePoint.x, startingLinePoint.y, mouseX, mouseY);

  }

  for(let line of lines) {
    line.draw();
  }
  

  
}

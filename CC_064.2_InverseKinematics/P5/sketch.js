// port of Daniel Shiffman's Inverse Kinematics coding challenge
// by madacoo

let tentacle;
let tentacles = [];

function setup() {
  background(0 );

  createCanvas(1800, 1200);

  // We set up point as a p5.Vector instead of passing Segment an x and a y
  // because JavaScript does not have function overloading.
 
}

function mousePressed() {
  console.log("SHNUR");
  tentacles.push(new Tentacle());

}


function draw() {
  //background(0  );
  for(let i = 0; i < tentacles.length; i++){
    tentacles[i].draw();
  }

}



var hr, mn, sc
var scAngle, hrAngle, mnAngle

function setup() {
  createCanvas(800,800);
  
  angleMode(DEGREES);
  
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  translate(400,400)
    rotate(-90)

  push();

  rotate(scAngle);
  stroke(222, 195, 195);
  strokeWeight(5);
  line(0, 0, 100, 0);
  //translate(200, 400);
  pop();

  push();
  rotate(mnAngle);
  stroke(231, 211, 211);
  strokeWeight(7);
  line(0, 0, 100, 0);
 // translate(200, 400);
  pop();

  push();
  rotate(hrAngle);
  stroke(240, 228, 228);
  strokeWeight(9);
  line(0, 0, 100, 0);
  //translate(200, 400);
  pop();

  stroke(255,0,255);
  point(0,0)

  strokeWeight(20);
  noFill();
  stroke(222, 195, 195);
  arc(0,0,400,400,0,scAngle);
  stroke(231, 211, 211);
  arc(0,0,360,360,0,mnAngle);
  stroke(240, 228, 228);
  arc(0,0,320,320,0,hrAngle);
}
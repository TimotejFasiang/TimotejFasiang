// Timotej Fasiang
// 27 fevrier 2020

function setup() {
  createCanvas(600, 600);
}

let red, yellow, green, r, y ,g;

function draw() {
  y = 'white'
  g = 'white'
  r = 'white'
  
  
  
  
  drawLights();
}

function drawLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
  
  
  if (millis() < 2000) { // program starts at red for 2 seconds
    r = 'red'
  }
  else {
  r = 'white'
  }
  
  if (millis() < 6000 && millis() > 2000) { // green for 4 sec
    g = 'green'
  }
  else {
  g = 'white'
  }
  
  if (millis() > 6000 && millis() < 8000) { // yellow for 2 seconds
    y = 'yellow'
  }
  else {
  y = 'white'
  }
  
  if (millis() > 8000) { // red forever at the end
    r = 'red'
  }
  
  //lights
  fill(r);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  fill(y);
  ellipse(width / 2, height / 2, 50, 50); //middle
  fill(g);
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}
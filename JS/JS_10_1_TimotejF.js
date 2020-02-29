let ball;

function changePos() {
  ball.xPos = mouseX;
  ball.yPos = mouseY;
}

function displayBall() {
  fill(ball.fillColor);
  ellipse(ball.xPos, ball.yPos, ball.size*3, ball.size*3);
}

function setup() {
  cnv = createCanvas(400, 400);
  cnv.mouseClicked(changePos);
  ball = {
    xPos: 100,
    yPos: 200,
    size: 25,
    fillColor: color(255, 0, 0),
  }
}

function draw() {
  background(210);
  displayBall();
  frameRate(200);
  if (keyIsDown(87)) { // Changer la taille
    if (ball.size < 100) {
      ball.size +++ 1;
    }
  }
  if (keyIsDown(83)) { // Changer la taille
    if (ball.size > 1) {
      ball.size --- 1;
    }
  }

  // Boundary Check
  if (ball.xPos > 400 - ball.size*1.5) {
    ball.xPos = 399 - ball.size*1.5;
  }
  if (ball.xPos < ball.size*1.5) {
    ball.xPos = 1 + ball.size*1.5;
  }
  if (ball.yPos > 400 - ball.size*1.5) {
    ball.yPos = 399 - ball.size*1.5;
  }
  if (ball.yPos < ball.size*1.5) {
    ball.yPos = 1 + ball.size*1.5;
  }
let ball;

function changePos() {
  ball.xPos = mouseX;
  ball.yPos = mouseY;
}

function displayBall() {
  fill(ball.fillColor);
  ellipse(ball.xPos, ball.yPos, ball.size*3, ball.size*3);
}

function setup() {
  cnv = createCanvas(400, 400);
  cnv.mouseClicked(changePos);
  ball = {
    xPos: 100,
    yPos: 200,
    size: 25,
    fillColor: color(255, 0, 0),
  }
}

function draw() {
  background(210);
  displayBall();
  frameRate(200);
  if (keyIsDown(87)) { // Changer la taille
    if (ball.size < 100) {
      ball.size +++ 1;
    }
  }
  if (keyIsDown(83)) { // Changer la taille
    if (ball.size > 1) {
      ball.size --- 1;
    }
  }

  // Boundary Check
  if (ball.xPos > 400 - ball.size*1.5) {
    ball.xPos = 399 - ball.size*1.5;
  }
  if (ball.xPos < ball.size*1.5) {
    ball.xPos = 1 + ball.size*1.5;
  }
  if (ball.yPos > 400 - ball.size*1.5) {
    ball.yPos = 399 - ball.size*1.5;
  }
  if (ball.yPos < ball.size*1.5) {
    ball.yPos = 1 + ball.size*1.5;
  }
}
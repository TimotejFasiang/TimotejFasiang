let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  background(43);
  fill(200);
  frameRate(60);
}

function draw() {
  background(43, 34, 70);
  rect(x, y, 50, 50);

  if (y == 0 && x < 350) { // getting to top right
    x = x + 3;
  }
  if (x > 350) { // stop
    x = 350
  }

  if (x == 350 && y < 350) { // getting to bottom right
    y = y + 3
  }
  if (y > 350) { // stop
    y = 350
  }

  if (y == 350 && x > 0) { // getting to the bottom left
    x = x - 3
  }
  if (x < 0) { // stop
    x = 0
  }

  if (x == 0 && y > 0) { // getting to the top left
    y = y - 3
  }

  if (y < 0) { // stop
    y = 0
  }
}
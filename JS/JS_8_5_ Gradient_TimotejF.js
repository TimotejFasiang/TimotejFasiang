// Gradient

var c1, c2;

function setup() {
  createCanvas(400, 400);
  // Define colors
  c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);
}

function setGradient(c1, c2) {
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
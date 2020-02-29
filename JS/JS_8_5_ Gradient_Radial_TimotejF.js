// Gradient Radial 

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  const outer = color(0, 255, 0);
  const inner = color(255, 0, 0);

  radialGradient(200, 200, 390, 320, inner, outer);
}

function radialGradient(x, y, w, h, inner, outer) {
  noStroke();
  for (let i = 400; i > 0; i--) {
    const step = i / 400;
    const colour = lerpColor(inner, outer, step);
    fill(colour);
    ellipse(x, y, step * w, step * w);
  }
}
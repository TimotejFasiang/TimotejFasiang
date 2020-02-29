// Spotlight

let img;

function preload() {
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9_kJMad8FU4e99uJOis0uZGiwfNTxEqPB_BYi_A0zEeAyHhD_');
}

function setup() {
  createCanvas(720, 200);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
}

function draw() {
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let loc = (x + y * img.width) * 4;
      let r, g, b;
      r = img.pixels[loc];
      let maxdist = 50;
      let d = dist(x, y, mouseX, mouseY);
      let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      r += adjustbrightness;
      r = constrain(r, 0, 255);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = r;
      pixels[pixloc + 2] = r;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
}

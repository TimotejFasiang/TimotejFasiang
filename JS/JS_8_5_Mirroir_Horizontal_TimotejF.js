// Mirroir Horizontal

function preload() {
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9_kJMad8FU4e99uJOis0uZGiwfNTxEqPB_BYi_A0zEeAyHhD_');
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
}

function draw() {
  translate(width,0);
  scale(-1.0,1.0); 
  image(img, 0, 0, img.width, img.height); 
  }

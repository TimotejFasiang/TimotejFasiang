/* 

JS, Étape 3, 3.0 - 3.3

Creation de ligne plus epaisse si vitesse de sourisX est plus grande */

function setup() {
  createCanvas(400, 400);

}

function draw() {
  let thickness = abs(pmouseX - mouseX);
  strokeWeight(thickness/8);
  line(mouseX, mouseY, 50, 50);
}



/* 

JS, Étape 3, 3.11 - 3.12

Ballon rebandissant dans l'axe X et Y 

Utilisez la touche 'c' pour changer la vitesse, 
la souris pour changer la couleur aléatoirement et
les touches répresentant les flèches vers le haut et vers le bas pour changer la taille de l'objet
 */


let xPos = 200;
let yPos = 200;
let xSpeed;
let ySpeed;
let size = 25;
let cnv;


function setup() {
  cnv = createCanvas(400, 400);
  imageMode(CENTER);
  xSpeed = random(1, 3);
  fastSpeedX = xSpeed * 2;
  normSpeedX = xSpeed;
  ySpeed = random(1, 3);
  fastSpeedY = ySpeed * 2;
  normSpeedY = ySpeed;
  rand1 = random(0, 255);
  rand2 = random(0, 255);
  rand3 = random(0, 255);
  c = color(rand1, rand2, rand3);
  cnv.mouseClicked(changeCol);
  img = createImg("https://www.google.com/s2/u/0/photos/private/AIbEiAIAAABDCPerwNC0xKfqeSILdmNhcmRfcGhvdG8qKDhmZTE1OTFlY2Y1ZmIxYzYzYWFmNGYzMWQwMTlhZTYwMDJjNjkwMjYwAcpgmOCtel52E8FrHQV8pzXjqGBn?sz=40", "404");
  img.hide();

}

function changeCol() {
  rand1 = random(0, 255);
  rand2 = random(0, 255);
  rand3 = random(0, 255);
  fill(c);
  c = color(rand1, rand2, rand3);

}

function draw() {
  background(200);
  frameRate(200);
  xPos += xSpeed;
  yPos += ySpeed;
  ellipse(xPos, yPos, size*3, size*3);
  image(img, xPos, yPos, size*2, size*2);
  if (keyIsDown(38)) { // Changer la taille: 'Up_Arrow'
    if (size < 200) {
      size +++ 1;
    }
  }
  if (keyIsDown(40)) { // Changer la taille: 'Down_Arrow'
    if (size > 1) {
      size --- 1;
    }
  }

  // Boundary Check
  if (xPos > 400 - size*1.5) {
    xSpeed = -xSpeed;
    xPos = 399 - size*1.5;
  }
  if (xPos < size*1.5) {
    xSpeed = -xSpeed;
    xPos = 1 + size*1.5;
  }
  if (yPos > 400 - size*1.5) {
    ySpeed = -ySpeed;
    yPos = 399 - size*1.5;
  }
  if (yPos < size*1.5) {
    ySpeed = -ySpeed;
    yPos = 1 + size*1.5;
  }

  // Double Speed
  if (keyIsDown(67) === true) {
    if (xSpeed > 0) {
      xSpeed = fastSpeedX;
    } 
    else if (xSpeed < 0) {
      xSpeed = -fastSpeedX;
    }
    if (ySpeed > 0) {
      ySpeed = fastSpeedY;
    } 
    else if (ySpeed < 0) {
      ySpeed = -fastSpeedY;
    }
  }

  if (keyIsDown(67) === false) {
    if (xSpeed > 0) {
      xSpeed = normSpeedX;
    } 
    else if (xSpeed < 0) {
      xSpeed = -normSpeedX;
    }
    if (ySpeed > 0) {
      ySpeed = normSpeedY;
    } 
    else if (ySpeed < 0) {
      ySpeed = -normSpeedY;
    }
  }
}
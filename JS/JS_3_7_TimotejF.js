/*

JS, Étape 3, 3.4 - 3.7

Premièrement, utilisez les touches 'C' et 'V' pour changer la couleur des formes,
Deuxièmement, utilisez les touches E' et 'R' avec la souris, pour créer des formes.
Troisièmement, utilisez les touches représentant une flèche vers le haut et une flèche vers le 
bas pour changer la taille des formes.
Finalement, utilisez les touches 'W' et 'B' pour réinitialiser l'écran! */

let c;
let size;
let rand1;
let rand2;
let rand3;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  size = 50;
  c = color(random(0, 360)); //utilisez les touches 'c' et 'v' pour changer les couleurs
}

function couleur() {
  rand1 = random(0, 255);
  rand2 = random(0, 255);
  rand3 = random(0, 255);
  c = color(rand1, rand2, rand3); //utilisez les touches 'c' et 'v' pour changer les couleurs
}

function draw() {


  if (keyIsDown(67)) {           // Changer la couleur: 'C'
    couleur();
  }
  if (keyIsDown(86)) {           // Changer la couleur: 'V'
    couleur();
  }
  if (keyIsDown(38)) {           // Changer la taille: 'Up_Arrow'
    size +++ 1;
  }
  if (keyIsDown(40)) {           // Changer la taille: 'Down_Arrow'
    size --- 1;
  }
  if (keyIsDown(87)) {           // Réinitialiser l'écran a blanc: 'W'
    clear;
    background(360);
  }
  if (keyIsDown(66)) {           // Réinitialiser l'écran a noir: 'B'
    clear;
    background(0);
  }
 
  if (mouseIsPressed) {
    
    if (keyIsDown(82)) {         // Souris + 'R' (Rectangle)
      fill(c);
      rect(mouseX, mouseY, size, size);
    }
    else if (keyIsDown(69)) {    // Souris + 'E' (Cercle)
      fill(c);
      circle(mouseX, mouseY, size, );
      
    }
  }
}

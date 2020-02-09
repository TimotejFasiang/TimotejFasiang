/*

JS, Étape 3, 3.8 - 3.10

Creation de carrés et de cercles si la souris est sur un cote ou l'autre du canevas */

let rand1;
let rand2;
let randcol;

function setup() {
  createCanvas(400, 400);
  rand1 = random(0, 400);
  rand2 = random(0, 400);
  randcol = random(0, 360);
}

function draw() {
	if (mouseX < 200) {
        fill(randcol);
		rect(rand1, rand2, 50, 50);
        rand1 = random(0, 400);
        rand2 = random(0, 400);
        randcol = random(0, 360);
	}

	else if (mouseX >= 200) {
        fill(randcol);
		circle(rand1, rand2, 50);
        rand1 = random(0, 400);
        rand2 = random(0, 400);
        randcol = random(0, 360);
	}
}


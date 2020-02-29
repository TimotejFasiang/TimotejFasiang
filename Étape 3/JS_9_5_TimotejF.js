function setup() {
createCanvas(400, 400);
}

function draw() {
background(240);
	for (let a = 400; a >= 40; a=a-40) {
	ellipse(200, 200, a, a);
	}
}
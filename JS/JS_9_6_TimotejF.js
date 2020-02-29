function setup() {
	createCanvas(400, 400);
}

let colour = ['white', 'black', 'black', 'blue', 'blue', 'red', 'red', 'yellow', 'yellow']
let x = 0
function draw() {
	for (let a = 400; a >= 40; a=a-40) {
		ellipse(200, 200, a, a);
		fill(colour[x]);
        x++;
		}
}


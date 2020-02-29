/*

JS, Étape 3, 3.13 - 3.14

Image qui suit la souris, qui zoom et dézoom avec la mollete de la souris
 */

var img;
var w, h, tow, toh;
var x, y, tox, toy;
var zoom = .01; //zoom step

function preload() {
  img = createImg("https://i.kym-cdn.com/photos/images/newsfeed/001/025/640/6da.png", '404');
  img.hide();
}

function setup() {
  createCanvas(400, 400);
  frameRate(200);
  w = tow = img.width;
  h = toh = img.height;
  x = tox = w / 2;
  y = toy = h / 2;
}

function draw() {
  background(38, 198, 218);

  //tween/smooth motion
  x = lerp(x, tox, .07);
  y = lerp(y, toy, .07);
  w = lerp(w, tow, .07); 
  h = lerp(h, toh, .07);

  image(img, mouseX-w/2, mouseY-h/2, w, h);
}

function mouseWheel(event) {
  var e = -event.delta;

  if (e>0) { //zoom in
    for (var i=0; i<e; i++) {
      if (tow>100*width) return; //max zoom
      tox -= zoom * (mouseX - tox);
      toy -= zoom * (mouseY - toy);
      tow *= zoom+1;
      toh *= zoom+1;
    }
  }
  
  if (e<0) { //zoom out
    for (var i=0; i<-e; i++) {
      if (tow<width/50) return; //min zoom
      tox += zoom/(zoom+1) * (mouseX - tox); 
      toy += zoom/(zoom+1) * (mouseY - toy);
      toh /= zoom+1;
      tow /= zoom+1;
    }
  }
}



// Sepia

function preload() {
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9_kJMad8FU4e99uJOis0uZGiwfNTxEqPB_BYi_A0zEeAyHhD_');
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  }

 function draw(){
        image(img, 0, 0, img.width, img.height);
        loadPixels();
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
              var index = (x + y * width)*4;
              var r = pixels[index+0];
              var g = pixels[index+1];
              var b = pixels[index+2];
              var a = pixels[index+3];     

              var tr = r *.393 + g *.769 + b *.189;
              var tg = r *.349 + g *.686 + b *.168;
              var tb = r *.272 + g *.534 + b *.131;
              
              pixels[index+0] = tr;
              pixels[index+1] = tg;
              pixels[index+2] = tb;
        }
      }
      updatePixels();
    }
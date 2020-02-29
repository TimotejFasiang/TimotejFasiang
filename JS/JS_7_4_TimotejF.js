var timestamp = 0;
var numbr = [0, 255];
var index = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  
  background(numbr[index]);
  
  if (millis() - timestamp > 2000) {
    index++;
    timestamp = millis();
    
    if (index > numbr.length - 1){
      index = 0;
    }
  }
}
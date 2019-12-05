let x = 100;
let y = 100;
let b = 100;


function setup() {
  createCanvas(windowWidth,windowHeight,);
  fill(255, 0, 0);
}


 
function draw() {
  
   background(204);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
  
  
y = y + 1;  
if(y>width){ 
  y=50 
}

  
  
  
  
  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  
    
  }

  clear();

  triangle(x+30, y+75, x+58, y+20, x+86, y+75);
}
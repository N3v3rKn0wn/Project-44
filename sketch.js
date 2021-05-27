var target;
var mouse;
function setup() {
  createCanvas(1800,900);

  mouse=createSprite(100,100,20,20);
  target=createSprite(700,120,100,100);
  target.x=Math.round(random(50,1750));
  target.y=Math.round(random(50,850));
  mouse.shapeColor="red";

  

 
}

function draw() {
  background(255,255,255);  
  drawSprites();

  textSize(100);
 text("Aim practice",700,300)
  textsize(50);
 text("click on the grey squares",700, 500)

 mouse.x=World.mouseX;
 mouse.y=World.mouseY;
 lastX = mouse.x; 
 lastY= mouse.y;
  target.depth=mouse.depth;
  mouse.depth=mouse.depth+1;

  if (mouse.isTouching(target)&&mouseDown("leftButton")){
    target.destroy;
    target.x=Math.round(random(50,1750));
    target.y=Math.round(random(50,850));
  }
  
}

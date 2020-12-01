
var MovingRect, FixedRect


function setup() {
  createCanvas(800,400);
  MovingRect=createSprite (600,200,20,20);
  MovingRect.shapeColor = "red";
  MovingRect.debug = true;

  FixedRect=createSprite(400,200,30,50);
  FixedRect.shapeColor = "red";
  FixedRect.debug = true;
}

function draw() {
  background(255,255,255);  

MovingRect.x = World.mouseX;
MovingRect.y = World.mouseY;

if(MovingRect.width/2+FixedRect.width/2>MovingRect.x-FixedRect.x&&
  MovingRect.width/2+FixedRect.width/2>FixedRect.x-MovingRect.x&&
  MovingRect.height/2+FixedRect.height/2>MovingRect.y-FixedRect.y&&
  MovingRect.height/2+FixedRect.height/2>FixedRect.y-MovingRect.y){
  MovingRect.shapeColor = "green";
  FixedRect.shapeColor = "green";
}
else {
  MovingRect.shapeColor = "red";
  FixedRect.shapeColor = "red";

}

  drawSprites();
}
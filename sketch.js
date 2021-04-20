
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);
  speed=random(255,390);
  weight=random(30,52);
  thickness = (22,83);
 wall=createSprite(1200,200, thickness,height/2);
  wall.shapeColor=("black");
  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;
  
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet,wall) )
  {
    bullet.velocityX=0;
    var damage=0.5* weight * speed* speed/(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
  
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true 
  }
  return false;
  
} 

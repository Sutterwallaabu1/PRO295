var  moving;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
moving=createSprite(100,300,50,400)
}
function draw() {
  background("yellow");  
 if(keyDown("right")){
 moving.velocityX=6
 }
 if(keyDown("left")){
moving.velocityX=-5
 }
if(keyDown("up")){
moving.velocityY=-7
}
  drawSprites();
}
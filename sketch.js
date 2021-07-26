var ship, sea, shipImg, seaImg;

function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(600,400);
  
  sea =createSprite(600, 300) 
  sea.scale=0.3
  sea.addImage(seaImg)
  
  
  ship = createSprite(130, 300, 70, 70)
  ship.scale=0.2
  ship.addAnimation("ship_moving",shipImg)
}

function draw() {
  background("white");

if(sea.x<=0){

  sea.x=sea.width/2
}
sea.velocityX=-2

 drawSprites()
}
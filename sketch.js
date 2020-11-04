function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 100, 50, 50);
  movingrect.velocityY = 5;
  movingrect2 = createSprite(400,350,70,35);
  movingrect2.velocityY = -5;
}

function draw() {
  background("red");

  if(abs(movingrect.x - movingrect2.x) <= movingrect.width/2 + movingrect2.width/2){
    movingrect.velocityX = movingrect.velocityX*-1;
    movingrect2.velocityX = movingrect2.velocityX*-1;
  }

  if(abs(movingrect.y - movingrect2.y) <= movingrect.height/2 + movingrect2.height/2){
    movingrect.velocityY = movingrect.velocityY*-1;
    movingrect2.velocityY = movingrect2.velocityY*-1;
  }

  drawSprites();
}
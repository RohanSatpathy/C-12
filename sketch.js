var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);



//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
//  createApples();
//  createLeaves();

  rabbit.x = World.mouseX;

  drawSprites();

  var select_sprites = Math.round(random(1,3));
  
  if(frameCount%80 === 0){
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createLeaves();
    }else {
      createRed();
    }
  }
  }

function createApples(){
  apple = createSprite(random(50,350), 40, 10, 10)
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY = 5;
  apple.lifetime = 200;
}

function createLeaves(){
  leaf = createSprite(random(50,350), 40, 10, 10)
  leaf.addImage(leafImg);
  leaf.scale = 0.05;
  leaf.velocityY = 5;
  leaf.lifetime = 200;
}

function createRed(){
  orange = createSprite(random(50,350), 40, 10, 10)
  orange.addImage(orangeLeafImg);
  orange.scale = 0.05;
  orange.velocityY = 5;
  orange.lifetime = 200;
}
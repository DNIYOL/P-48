var tom, racoon;
var rr;
var ri, ti;
var road,roadImage;
var cash, cashImage, cG;
var diamonds,diamondsImage, dG;
var jewels,jewelsImage, jG;
var x, y;
var score= 0;
var coinSound,bgSound;

function preload(){
roadImage = loadImage("Road.png");
cashImage = loadImage("cash.png");
diamondsImage = loadImage("diamonds.png");
jewelsImage = loadImage("jwell.png");
ri = loadImage("RaccoonRobber.png");
ti = loadImage("tom2.png");
coinSound=loadSound("coin.wav");
bgSound=loadSound("background.wav");

}

function setup(){
   createCanvas(displayWidth,displayHeight);
   road = createSprite(width/2,200);
   road.addImage(roadImage);
   road.velocityY=4;
   tom = createSprite(width/2,height-120, 50, 50);
   tom.shapeColor= "red";
   tom.addImage(ti);
   tom.scale= 0.4;
   racoon = createSprite(width/2,height-520,50,50);
   racoon.shapeColor="blue";
   racoon.addImage(ri);
   racoon.scale= 0.3;
   

   cG = new Group();
   dG = new Group();
   jG = new Group();
   
}

function draw (){
  stroke(0);
background(roadImage)
bgSound.play();
if(road.y>height){
  road.y= height/2;
}
// if(keyIsDown(RIGHT_ARROW)){
// tom.velocityX=4;
// tom.velocityY=0;
// }
// if(keyIsDown(LEFT_ARROW)){
//   tom.velocityX=-4;
//   tom.velocityY=0;
//   }
tom.x= World.mouseX;
//  if(World.frameCount%300==0){
//      rr=random(0,displayWidth);
//      racoon.x= rr;  
//    }
// createEdgeSprites();
//   racoon.bounceOff(edges);
//for(var i= 0;i<=width;i++){
//}

// racoon.x=racoon.x+5;

// while(racoon.x == width){
//   racoon.x = racoon.x-5
// }

if(cG.isTouching(tom)){
  cG.destroyEach();
  score=score+100;
  coinSound.play();
}else if(jG.isTouching(tom)){
  jG.destroyEach();
  score=score+200;
  coinSound.play();
}else if(dG.isTouching(tom)){
  dG.destroyEach();
  score=score+300;
  coinSound.play();
  
}
  







spawnCash();
spawnDiamonds();
spawnJwells();
drawSprites();
fill(255);
textSize(30);
text("score:"+score,width/6,height/7);
fill(255);
textSize(30);
text("Cash:100",1000,height/7);
fill(255);
textSize(30);
text("Jwells:200",1000,height/5);
fill(255);
textSize(30);
text("Diamonds:300",1000,height/4);
}

function spawnCash(){
  if(World.frameCount%200==0){
     var cash = createSprite(Math.round(random(50,width-50),40,10,10));
     cash.addImage(cashImage);
     cash.scale= 0.15;
     cash.velocityY=3;
     cash.lifetime=300;
     cG.add(cash);
  }
}

function spawnDiamonds(){
  if(World.frameCount%300==0){
     var diamonds = createSprite(Math.round(random(50,width-50),40,10,10));
     diamonds.addImage(diamondsImage);
     diamonds.scale= 0.1;
     diamonds.velocityY=3;
     diamonds.lifetime=300;
     dG.add(diamonds);
  }
}

function spawnJwells(){
  if(World.frameCount%400==0){
     var jewels = createSprite(Math.round(random(50,width-50),40,10,10));
     jewels.addImage(jewelsImage);
     jewels.scale= 0.3;
     jewels.velocityY=3;
     jewels.lifetime=300;
     jG.add(jewels);
  }
}















//variables declared
var bow,bowImg;
var arrow,arrowImg;
var board;
var score;
boardImg;

function preload(){
  //images loaded
  boardImg=loadImage("target.jpg");
  bowImg=loadImage("bow and arrow.png");
  arrowImg=loadImage("images.png");

}

function setup() {
  createCanvas(2000,1600);

  //sprites created
  bow=createSprite(1000,800,50,50);
  bow.addImage(bowImg);
  //bow.scale=0.5;
  board=createSprite(1000,400,200,200);
  board.addImage(boardImg);
  board.scale=0.5;
  

}

function draw() {

  background(255,255,255);  

  //shoot();
  drawSprites();
}

//function for shooting the arrow
function keyPressed(){
 if(keyCode===32){
   var arrow=createSprite(1000,780,20,20);
    arrow.addImage(arrowImg);
    arrow.scale=0.5;
    arrow.velocityY=Math.round(random(-2,-6));
    arrow.y=random(100,500);
    arrow.x=random(500,1500);
  }
}
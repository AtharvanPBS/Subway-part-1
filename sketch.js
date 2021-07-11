var path,boy,cash,Diamonds,jewllery,sword,coins,BoyImage,GameImage,GameImage2,GameImage,GameImagestart,GameOver,Specialgift
var
pathImg,boyImg,cashImg,DiamondsImg,jewlleryImg,swordImg,coinsImg,BoyImageImg,GameImageImg,GameImage2Img,GameImageImg,GameImagestartImg,GameOverImg,SpecialgiftImg

//Game States
var PLAY=1;
var END=0;
var gameState=1;
var Edges=1;
function preload(){
backgroundImg=loadImage("Background.jpg")
boyImg=loadImage("BoyImage.jpg")
cashImg=loadImage("cash.png")
diamondsImg=loadImage("diamonds.png")
jewlleryImg=loadImage("jwell.png")
coinsImg=loadImage("coins.jpg")
gameImageImg=loadImage("GameImage.jpg")
gameImagestartImg=loadImage("GameImagestart.jpg")
gameoverImg=loadImage("gameOver.png")
specialgiftImg=loadImage("Specialgift.jpg")
}
function setup(){
createCanvas(400,600);
//Moving background
backGround=createSprite(200,200)
backGround.addImage(backgroundImg)
backGround.velocityY=4;

//creating boy running
boy=createSprite(70,580,20,20)
boy.addAnimation("boyImage",boyImg);
boy.scale=0.08

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}
function draw(){
    if(gameState===PLAY)
    boy.x=World.mouseX;

    edges=createEdgeSprites();
    boy.collide(edges);
    if(backGround.y>400){
        backGround.y=height/2
    }

     
    drawSprites();   
}    
                                                                                                                                           
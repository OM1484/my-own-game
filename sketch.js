var count=0
var gameState=1
function preload(){
  groundImg=loadImage("ground.png")
  carImg=loadImage("./car.gif")
  coinImg=loadImage("coin.png")
  obImg=loadImage("Obsticle.png")
  bgImg=loadImage("skyImage.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  obg=createGroup()
 ground= createSprite(width/2, height-350, width, 60);
 ground.addImage(groundImg)
 ground.scale=2.9
 ground2= createSprite(width/2, height-100, width, 30);
 ground2.visible = false
 car= createSprite(250, height-200, width, 60);
 car.addImage("car",carImg)
 car.scale=0.7
 car.debug = false
 car.setCollider("rectangle",0,0,500,300)
coinG=createGroup()
accelarate=createImg("UpArrow.png")
accelarate.position(width-230,height-200)
accelarate.size(150,150)
accelarate.mouseClicked(function(){
  if(car.y>height-300){
  car.velocityY=-14
  }
})
}

function draw() {
  background(bgImg); 
  if(gameState===1){
    car.velocityY+=0.4 
    car.collide(ground2 )
   ground.velocityX=-10
   if(ground.x<0){
     ground.x=width
   }

   if(car.isTouching(obg)){
     gameState=0
   }
 
  for(var i=0;i<coinG.length;i++){
   if(car.isTouching(coinG.get(i))){
     count+=1
     coinG.get(i).velocityX=7
     coinG.get(i).velocityY=-5
   }
  }
  obs()
}
drawSprites();
if(gameState===0){
  coinG.setVelocityXEach(0)
  obg.setVelocityXEach(0)
  car.velocityY=0 
  car.y=height-200
  ground.velocityX=0
  coinG.setVelocityYEach(0)
  noFill()
  rect(width/2-120,height/2-35, 200,50)
  textSize(30)
  fill("black")
text("Game Over", width/2-100,height/2)
accelarate.hide()
}
  
  textSize(25)
  
  stroke("black")
  fill("white")
  rect(width-175, 40, 150,50)
  fill("black")
  text("Coins: "+ count, width-150, 70)
}



function obs(){
  if(frameCount%200===0 || frameCount===0){
    coin1=createSprite(width+400,height-280)
    coin1.addImage(coinImg)
    coin2=createSprite(width,height-150)
    coin2.addImage(coinImg)  
    coin1.velocityX=-9
    coin1.scale=0.2
    coinG.add(coin1)
    coin2.velocityX=-9
    coin2.scale=0.2
    coinG.add(coin2)
    ob=createSprite(width+400,height-150)
    ob.addImage(obImg)
    ob.velocityX=-9
    ob.scale=0.5
    obg.add(ob)
    ob.setCollider("rectangle", 0, 0, 100, 200)
  }
}
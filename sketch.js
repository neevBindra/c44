var floor1,floor2,floor3,floor4,floor5;
var door1,door2,door3,door4,door5;
var player
var border1,border2,border3,border4;
var laser1
function preload(){

}

function setup(){
createCanvas(650,650);
//floors-
floor1 = createSprite(60,100,950,10);
floor1.shapeColor = "black"
floor2 = createSprite(60,200,1200,10);
floor2.shapeColor = "black"
floor3 = createSprite(60,300,1200,10);
floor3.shapeColor = "black"
floor4 = createSprite(60,400,1200,10);
floor4.shapeColor = "black"
floor5 = createSprite(60,500,1200,10);
floor5.shapeColor = "black"

//borders
border1 = createSprite(30,5,2000,10)
border2 = createSprite(30,645,2000,10)
border3 = createSprite(2,300,10,2000)
border4 = createSprite(648,300,10,2000)
//doors-
door1 = createSprite(575,100,150,10)
door1.shapeColor = "red";
player = createSprite(100,100,20,20)
laser1 = createSprite(251,120,20,60);
}


function draw(){
  background("blue");
  createEdgeSprites();
console.log(mouseX,mouseY)
laser1.velocityX = -5;
laser1.bounceOff(edges)
player.collide(floor1)
player.collide(floor2)
player.collide(floor3)
player.collide(floor4)
player.collide(floor5)
player.collide(door1)
player.collide(border1)
player.collide(border2)
player.collide(border3)
player.collide(border4)

border1.visible = false;
border2.visible = false;
border3.visible = false;
border4.visible = false;

if(keyDown("LEFT_ARROW")){
  player.x = player.x - 5;
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 5;
}
if(keyDown("UP_ARROW")){
  player.y = player.y -5;
}
if(keyDown("DOWN_ARROW")){
  player.y = player.y + 5;
}

if(player.isTouching(door1)){
  textSize(20)
  text("Press O to open door",410,145)
}

if(player.isTouching(door1) && keyDown("O")){
  door1.width = 10;
  door1.height = 100
  door1.x = 540
  door1.y = 58
}



drawSprites();



  
  
}

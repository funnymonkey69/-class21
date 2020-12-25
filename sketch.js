var Movingrect,fixrect,g1,g2,g3
function setup() {
  createCanvas(1200,800);
 Movingrect=createSprite(500,200,30,80);
 Movingrect.shapeColor="GREEN"
 fixrect=createSprite(600,400,80,30)
 fixrect.shapeColor="GREEN"

g1=createSprite(150,60,90,85);
g1.shapeColor="GREEN"

g2=createSprite(180,50,95,105);
g2.shapeColor="GREEN"

g3=createSprite(168,98,88,87);
g3.shapeColor="GREEN"


}

function draw() {
  background(255,255,255);
  Movingrect.x=mouseX
    Movingrect.y=mouseY
 
 if (istouching(Movingrect,g3)) {
Movingrect.shapeColor="PINK"
g3.shapeColor="PINK"



 }
 else{

Movingrect.shapeColor="GREEN"
g3.shapeColor="GREEN"

 }




  drawSprites();
 

}

function istouching(object1,object2) {

  if(object2.x -object1.x < object2.width/2 +object1.width/2 &&
   object1.x - object2.x < object2.width/2 +object1.width/2 &&
    object2.y -object1.y < object2.height/2 +object1.height/2 &&
   object1.y - object2.y < object2.height/2 +object1.height/2)
  {
return true
  }
  else{
return false
  
  }








}




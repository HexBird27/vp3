//Create variables here
var dog,dogImg, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
   dog.addImage(dogImg);
   dog.scale= 0.25;
   foodStock=database.ref("Food")
   foodStock.on("value",readStock)
  }


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog)
}
  drawSprites();
  fill("white") 
  text("Press the Up arrow to feed Drago Milk.",100,75);
  text("Food remaining:"+writeStock(), 100,90 );
  //add styles here

}

function readStock(data){
foodS = data.val();

}


function writeStock(){

  database.ref("/").update({
    Food:20
  })
}

var boyrunning_Img,boyrun_Img;
var ground1,boy1;

function preload() {
 boyrunning_Img = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png","boy9.png")
boyrun_Img = loadAnimation("boy-running-0.png","boy-running-1.png","boy-running-2.png","boy-running-3.png","boy-running-4.png","boy-running-5.png","boy-running-6.png","boy-running-7.png","boy-running-8.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 boy1 = createSprite(windowWidth/2,windowHeight/2+240,50,50)
 boy1.addAnimation("run",boyrunning_Img);
 boy1.scale=0.5

ground1 = createSprite(windowWidth/2,windowHeight/2+300,windowWidth,20);

}

function draw() {
  background("skyblue");
 
boy1.collide(ground1)
  drawSprites()
}
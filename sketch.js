
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("mask.png");
  sanitiser = loadImage("sant.png")
  bowImage = loadImage("rambow.png");
  red_balloonImage = loadImage("corona.png");
  green_balloonImage = loadImage("corona.png");
  pink_balloonImage = loadImage("corona.png");
  blue_balloonImage = loadImage("corona.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(500,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.5;
  
  maask = createSprite(80, 500, 40, 50);
  maask.addImage(arrowImage);
  maask.scale = 0.3

  saniti = createSprite(160, 500, 40, 50);
  saniti.addImage(sanitiser);
  saniti.scale = 0.5


   score = 0  
  redB= new Group();
  greenB= new Group();
   blueB= new Group();  
  pinkB= new Group();
  arrowGroup= new Group();
  arrowGroupa = new Group();

  
}

function draw() {

  // moving ground
    

    
    
    
  if (gameState === PLAY) {
    background.velocityX = -3
    if (background.x < 0) {
      background.x = background.width / 2;
    }
    
   
    if (keyDown("UP")) {
      bow.y = bow.y - 10
    }

    if (keyDown("DOWN")) {
      bow.y = bow.y + 10
    }
    var select_balloon = Math.round(random(1, 4));

    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        redBalloon();
      } else if (select_balloon == 2) {
        greenBalloon();
      } else if (select_balloon == 3) {
        blueBalloon();
      } else {
        pinkBalloon();
      }
    }
    if (arrowGroup.isTouching(redB)) {
      redB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }




    if (arrowGroup.isTouching(greenB)) {
      greenB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }



    if (arrowGroup.isTouching(blueB)) {
      blueB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }

    /////////////////////////////////////////////////////////////////////////

    if (arrowGroup.isTouching(pinkB)) {
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }

    if (bow.isTouching(blueB)) {
      blueB.destroyEach();
      arrowGroup.destroyEach();
      score = score - 1;
    }
    if (arrowGroup.isTouching(redB)) {
      redB.destroyEach();
      arrowGroup.destroyEach();
      score = score - 1;
    }

    if (bow.isTouching(greenB)) {
      greenB.destroyEach();
      arrowGroup.destroyEach();
      score = score - 1;
    }
    if (mousePressedOver(maask)) {
      createArrow();
    }

    if (mousePressedOver(saniti)) {
      createArrowa();
    }

    if (bow.isTouching(pinkB)) {
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      score = score - 1;
    }
    textSize(50)
    fill("black")
    text(" GAMEOVER ", 250, 300);


  }

    if (score < -5){
    gameState = END;
      
   }
    
    if (gameState === END) {
      background.velocityX = 0
      fill(black)
      textSize(100)
      
     
  arrowGroup.setLifetimeEach(-1);
  redB.setLifetimeEach(-1);
  greenB.setLifetimeEach(-1);
  blueB.setLifetimeEach(-1);
  pinkB.setLifetimeEach(-1)
  arrowGroup.setVelocityXEach(0);
  redB.setVelocityXEach(0);
  greenB.setVelocityXEach(0);
  blueB.setVelocityXEach(0);
  pinkB.setVelocityXEach(0)
      
      
      

      
      

  }
  //creating continous enemies
 //if (bow.isTouching(greenB)) {
 //  greenB.destroyEach();
 //  arrowGroup.destroyEach();
 //  score = score + 1;
 //}


  
  drawSprites();
  

    fill("red")
    textSize(50)
    text("Score: "+ score, 400,50);




  
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 7;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 10;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 10;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 10;
  pink.lifetime = 150;
  pink.scale = 0.3
  pinkB.add(pink);
}



// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.2;
  arrowGroup.add(arrow);
   
}
function createArrowa() {
  var arrowa = createSprite(100, 100, 60, 10);
  arrowa.addImage(sanitiser);
  arrowa.x = 360;
  arrowa.y = bow.y;
  arrowa.velocityX = -10;
  arrowa.lifetime = 100;
  arrowa.scale = 0.4;
  arrowGroup.add(arrowa);

}
function play(){
}
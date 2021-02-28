var background, backgroundImage;
var tom, tomImage, mouse, mouseImage, tom_running, mouse_running, tom_lastImage, mouse_lastImage;

function preload() {
    //load the images here
    backgroundImage= loadImage("images/garden.png");
     tomImage= loadImage("images/cat1.png");
     tom_running= loadAnimation("images/cat2.png", "images/cat3.png" );
     tom_lastImage= loadAnimation("images/cat4.png"); 
     
     mouse_running= loadAnimation("images/mouse2.png", "images/mouse3.png")
     mouseImage= loadImage("images/mouse1.png");
     mouse_lastImage= loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background=createSprite(0,0,1000,800);
    background.addImage(backgroundImage);
    background.scale=2.5;

    tom=createSprite(900, 400, 10, 20);
    tom.addImage(tomImage);
    tom.scale=0.1;

    mouse=createSprite(200, 400, 10, 20);
    mouse.addImage(mouseImage);
    mouse.scale=0.1;
    

    
    //tom.addAnimation(cat1.png);
   
}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(tom.x-mouse.x<((tom.width-mouse.width)/2)+40)
        {
        tom.addAnimation("catLastImage", tom_lastImage);
        tom.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage", mouse_lastImage);
        mouse.changeAnimation("mouseLastImage");
        tom.velocityX=0;
        mouse.velocityX=0;
      }
    
    keyPressed();
    drawSprites();
}
function keyPressed(){
    if(keyDown("space")){
        tom.velocityX= -5;
        tom.addAnimation("catRunning", tom_running);
        tom.changeAnimation("catRunning");

        mouse.addAnimation("mouseRunning", mouse_running);
        mouse.changeAnimation("mouseRunning");
    }
}



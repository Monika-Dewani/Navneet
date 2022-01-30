//images
var bg1;
var pbImg,ybImg,bbImg,pbb,ybb,bbb;
var closedWindO,closedWindP,closedWindY,openWindO,openWindP,openWindY;
var muscat,muscatImg;
var blue_ballon,yellow_ballon,pink_ballon;

//sprites//////////
var pb,yb,bb;
var bird, birdImg1,birdImg2;
var windO,windY,windP;
var nar, nar2, nar3, nar4, nar5;
var sprite;
var flag=0,flag2=0,flag3=0,flagSong=0,finalFlag=0,musicFlag=0;;
var gmaeState="waiting";


/////sounds/////////////

var youDidIt,finalCelebration,tryAgain;


////dist////////
var muscatDist,pinkDist,yellowDist,blueDist;

function preload(){
  bg1=loadImage("Image Asset Folder/Digital Game Assets/Background Lvl2.png");
 
  birdImg1=loadImage("Image Asset Folder/Digital Game Assets/birds-01.png");
  birdImg2=loadImage("Image Asset Folder/Digital Game Assets/birds-02.png");

  muscatImg=loadImage("Image Asset Folder/Button/teena button.png");

  openWindO=loadImage("Image Asset Folder/Digital Game Assets/open window orange-01.png");
  openWindP=loadImage("Image Asset Folder/Digital Game Assets/open window purple-01.png");
  openWindY=loadImage("Image Asset Folder/Digital Game Assets/open window yellow-01.png");

  closedWindO=loadImage("Image Asset Folder/Digital Game Assets/closed window orange-01.png");
  closedWindP=loadImage("Image Asset Folder/Digital Game Assets/closed window purple-01.png");
  closedWindY=loadImage("Image Asset Folder/Digital Game Assets/closed window yellow-01.png");

  nar=loadSound("Audio Asset Folder/Mascot/Mp3/00 Teena - Hi.mp3");
  nar2=loadSound("Audio Asset Folder/Mascot/Mp3/01 Teena - I am Teena.mp3");
  nar3=loadSound("Audio Asset Folder/Mascot/Mp3/02 Teena - I am a tiger cub.mp3");
  nar4=loadSound("Audio Asset Folder/Mascot/Mp3/03 Teena - I love solving puzzles.mp3");
  nar5=loadSound("Audio Asset Folder/Mascot/Mp3/04 Teena - Do you like puzzles.mp3");

  finalCelebration=loadSound("Audio Asset Folder/Celebration/Big Celebration.mp3");
  youDidIt=loadSound("Audio Asset Folder/Celebration/Teena - Small Celebration with character voice.mp3");

  tryAgain=loadSound("Audio Asset Folder/interactions/Try Again_options.mp3");
  
}

function setup() {
  createCanvas(1500,700);
  bird=createSprite(510, 530, 50, 50);
  bird.addImage(birdImg1);
  bird.scale=0.15;

  windO=createSprite(510, 200, 50, 50);
  windO.addImage(closedWindO);
  windO.scale=0.15;

  windY=createSprite(1000, 200, 50, 50);
  windY.addImage(closedWindY);
  windY.scale=0.15;

  windP=createSprite(750, 400, 50, 50);
  windP.addImage(closedWindP);
  windP.scale=0.15;

  narrative();


 // muscat=createImg("Image Asset Folder/Button/teena button.png");
  muscat=createSprite(1400, 600, 50, 50);
  muscat.addImage(muscatImg);
  muscat.scale=0.5
 // muscat.position(1300,500);
 // muscat.size(200,200);
 // muscat.mouseClicked(info);


 
  
  

}




function draw() {
  
  background(bg1)  ;
 

  if(mousePressedOver(muscat)&&musicFlag===0){
    
    musicFlag=1;
    info();
     } 

  
  //text(mouseX+","+mouseY,mouseX,mouseY);

  if(finalFlag===3){
    gameOver();
    finalFlag=4;

}


  bird.depth++;
  drawSprites();

}


function changeWindow(){
  windP.addImage(openWindP);
  windP.scale=0.15;

  windY.addImage(openWindY);
  windY.scale=0.15;

  windO.addImage(openWindO);
  windO.scale=0.15;

  monkey=createImg("Image Asset Folder/Digital Game Assets/monkey-01.png");
  monkey.position(420, 125);
  monkey.size(150,152);

  rabit=createImg("Image Asset Folder/Digital Game Assets/rabbit-01.png");
  rabit.position(920, 140);
  rabit.size(150,150);

  squirrel=createImg("Image Asset Folder/Digital Game Assets/Squirrel-01.png");
  squirrel.position(672,350);
  squirrel.size(150,155);

  bird.addImage(birdImg2);

  pink_ballon=createImg("Image Asset Folder/Digital Game Assets/pink balloon-01.png");
  pink_ballon.position(460, 50);
  pink_ballon.size(150,152);
  pink_ballon.mouseClicked(pink_blast);
  // pink_ballon.mouseClicked(pink_blast);
  console.log(pink_ballon.x);

  yellow_ballon=createImg("Image Asset Folder/Digital Game Assets/yellow balloon-01.png");
  yellow_ballon.position(897, 120);
  yellow_ballon.size(150,152);
  yellow_ballon.mouseClicked(yellow_blast);
  //yellow_ballon.mouseClicked(yellow_blast);

  blue_ballon=createImg("Image Asset Folder/Digital Game Assets/Blue Ballon-01.png");
  blue_ballon.position(750, 320);
  blue_ballon.size(150,152);
  blue_ballon.mouseClicked(blue_blast);
  //blue_ballon.mouseClicked(blue_blast);
}






function narrative(){

  


  nar.play()
  nar.onended(()=>{
    nar2.play();
  });

  nar2.onended(()=>{
    nar3.play();
  });

  nar3.onended(()=>{
    nar4.play();
  });

  nar4.onended(()=>{
    nar5.play();
    musicFlag=0;
  });

  }


  function info(){ 
    if(flag==0){
     // stopMusic();
      narrative();
      changeWindow();
      popUp();
      flag=1;
    }
    else if(flag===2){

    }
    else{
     // stopMusic();
      narrative();
      popUp();
    }

    
      
  }



  function popUp() {
    // alert("hello I am Teena");
    swal({
      title: `Hello!${"\n"} I am Teena`,
      text: `Help the bird reach top of the tree. ${"\n"} ${"\n"}Tap on the balloons with letter 'a' ` ,
      confirmButtonText: "Ok"
    });
  }


function pink_blast(){
  pink_ballon_blast=createImg("Image Asset Folder/Digital Game Assets/pink ballon blast-01.png");
  pink_ballon_blast.position(460, 50);
  pink_ballon_blast.size(150,152);
  pink_ballon.hide();
  youDidIt.play();
  

  setTimeout(function(){
    bird.x=517;
    bird.y=206;
    pink_ballon_blast.hide();
    monkey.hide();
    finalFlag++;

  },3000);
}


function yellow_blast(){
  yellow_ballon_blast=createImg("Image Asset Folder/Digital Game Assets/yellow balloon blast-01.png");
  yellow_ballon_blast.position(897, 120);
  yellow_ballon_blast.size(150,152);
  yellow_ballon.hide();
  youDidIt.play();

  setTimeout(function(){bird.x=988;
    bird.y=215;
    yellow_ballon_blast.hide();
    rabit.hide();
    finalFlag++;

  },3000);
}


function blue_blast(){
  blue_ballon_blast=createImg("Image Asset Folder/Digital Game Assets/blue ballon blast-01.png");
  blue_ballon_blast.position(750, 320);
  blue_ballon_blast.size(150,152);
  blue_ballon.hide();
  youDidIt.play();
  setTimeout(function(){bird.x=756;
    bird.y=405;
    blue_ballon_blast.hide();
    squirrel.hide();
    finalFlag++;

  },3000);
}


function gameOver() {

  flag=2;

  for(var i=1;i<3;i++){

    balloon1=createImg("Image Asset Folder/Digital Game Assets/Balloon 1.png");
    balloon1.position(Math.round(random(40,1400)),Math.round(random(80,600)));
    balloon1.size(150,150);

   // console.log(balloon1);
   
  
    balloon2=createImg("Image Asset Folder/Digital Game Assets/Balloon 2.png");
    balloon2.position(Math.round(random(40,1400)),Math.round(random(80,600)));
    balloon2.size(200,200);
  
    balloon3=createImg("Image Asset Folder/Digital Game Assets/Balloon 3.png");
    balloon3.position(Math.round(random(40,1400)),Math.round(random(80,600)));
    balloon3.size(200,200);
  
    balloon4=createImg("Image Asset Folder/Digital Game Assets/Balloon 4.png");
    balloon4.position(Math.round(random(40,1400)),Math.round(random(80,600)));
    balloon4.size(200,200);
  }

  finalCelebration.play();
  

  swal({
    title: `Very Well Done`,
    text: "That was mind blowing!!!",
    
    confirmButtonText: "Thanks For Playing"
  });
}










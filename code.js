var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","547b547e-8d60-4a97-a088-1c4a761f7794","8dcffc1e-373d-4d96-a038-ff53823e224b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"fQaR.UqG3cbLXB.hoQL1nG3JTUmcSK3p","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"N81luf3GDF8m81evIOki_PSJhj7FPhkM","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"eb52L6ydlsN2kTVYyUglw_jlmEW.pBP1","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"547b547e-8d60-4a97-a088-1c4a761f7794":{"name":"ground1","sourceUrl":null,"frameSize":{"x":2377,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"BADnZrmvZgoXyMB4G95OzLYfN9Ojd1k5","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":94},"rootRelativePath":"assets/547b547e-8d60-4a97-a088-1c4a761f7794.png"},"8dcffc1e-373d-4d96-a038-ff53823e224b":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;

//create a trex sprite
var monkey = createSprite(200,380,20,50);
monkey.setAnimation("monkey");

//set collision radius for the trex
monkey.setCollider("circle",0,0,30);

//scale and position the monkey
monkey.scale = 0.1;
monkey.x = 50;



//create a ground sprite
var ground = createSprite(200,380,400,20);
ground.setAnimation("ground1");
ground.x = ground.width /2;

var invisibleground = createSprite(200,380,400,20);
invisibleground.visible=false;


//create Obstacle and Cloud Groups
var stoneGroup = createGroup();
var bananaGroup = createGroup();

//place gameOver and restart icon on the screen

//ground.debug=true;
//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);



var SurvivalTime = 0;

function draw() {
  //set background to white
  background("white");
  //display score
 
 
  
stroke("black");
 textSize(20);
fill("black");
SurvivalTime=Math.ceil(frameCount/frameRate())
 text("SurvivalTime : " + SurvivalTime, 100, 50);
 

 
   if(gameState === PLAY){
    
    
    if(keyDown("space")) {
     monkey.velocityY=-10;
     
   } 
    monkey.setCollider("circle",0,0,30);

//scale and position the monkey
monkey.scale = 0.1;
monkey.x = 50; 
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    
       
  monkey.collide(invisibleground);
   
   }
      
    

    //spawn the clouds
    spawnbanana();
  
    //spawn obstacles
    spawnstone();

  
  drawSprites();
}

function spawnstone() {
  if(World.frameCount % 60 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.velocityX = -6
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    stone.setAnimation("stone");
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.15;
    stone.lifetime = 70;
    //add each obstacle to the group
   stoneGroup.add(stone);
  }
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var  banana = createSprite(400,320,40,10);
     banana.y = randomNumber(280,320);
    banana.setAnimation("banana");
     banana.scale = 0.05;
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 134;
    
    //adjust the depth
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
   bananaGroup.add( banana);       
  }
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

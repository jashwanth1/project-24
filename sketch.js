
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,ground;
var box1,box2,box3;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = createSprite(400, 690,800,20);
    ground.shapeColor ="blue"

	  box1 = createSprite(590,610,20,100);
	  box1.shapeColor="red"
	   
	  box2 = createSprite(770,610,20,100);
    box2.shapeColor="red"
	   
    box3 = createSprite(680,670,200,20);
    box3.shapeColor="red"
	  
    Paper1= new Paper(100,640,20)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  Paper1.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(PaperObject.body, PaperObject.body, position, {x:85, y:-85});
    
  }
}



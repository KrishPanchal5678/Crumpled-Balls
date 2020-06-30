const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bin, bin2, bin3, ball, ballIMG;
var ballBody,ground

function preload()
{
 	ballIMG = loadImage("sprites/ball.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ballBody = new paper( 10 , 600, 5);
	World.add(world, ballBody);
	
	ball = createSprite(ballBody.position.x, ballBody.position.y , ballBody.radius)
	
	bin = new Bin(600, 600, 10, 100);
	World.add(world, bin)
	bin2 = new Bin(650, 600, 100, 10);
	World.add(world, bin)
	bin3 = new Bin(700, 600, 10, 100);
	World.add(world, bin)

	//Create a Ground
	ground = new GR (width/2, 610, width, 10);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
ballBody.display();
bin.display();
bin2.display();
bin3.display();


  drawSprites();
 
}




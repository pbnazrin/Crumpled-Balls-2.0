
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var ground;
var leftwall,rightwall,bottomwall;
function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	leftwall = createSprite(400,610,20,80);
	rightwall = createSprite(600,610,20,80);
	bottomwall = createSprite(500,642,200,10);
	
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.
	paperball = new Paperball(100,600,70);
	
	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
rect(ground.position.x,ground.position.y,width,10)
//keyPressed();
paperball.display();
drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:10,y:-13});
	}
}

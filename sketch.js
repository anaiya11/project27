
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof
var bob
var rope

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(350,60,350,15)
bob = new Bob(250,350,30)
bob2 = new Bob(310,350,30)
bob3 = new Bob(370,350,30)
bob4 = new Bob(430,350,30)
bob5 = new Bob(490,350,30)
rope = new Rope(bob.body,roof.body,0*3.5,0)
rope2 = new Rope(bob2.body,roof.body,0*3.5,0 )
rope3 = new Rope(bob3.body,roof.body,0*3.5,0 )
rope4 = new Rope(bob4.body,roof.body,0*3.5,0 )
rope5 = new Rope(bob5.body,roof.body,0*3.5,0 )
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.run(engine);
  drawSprites();

  roof.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}




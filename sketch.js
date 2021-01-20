const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5
var roof1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(width/2,height/4,width/7,20)

	bobDiameter=40;

	startBobPositionX=width/2
	startBobPositionY=height/4+500

	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter)
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)


	rope1=new Chain(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Chain(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Chain(bobObject3.body,roofObject.body,0, 0)
	rope4=new Chain(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Chain(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  drawSprites();
 
}




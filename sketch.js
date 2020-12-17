const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var stom1,stom2,stom3;
var roof, roof2;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var faceimg;
var newton;

function preload(){
	faceimg = loadImage("SirIssacNewton.jpg");

}

function setup() {
	createCanvas(2000,1000);
 
	engine = Engine.create();
	world = engine.world;


	newton = createSprite(800,350,50,50);
	newton.addImage(faceimg);

	//Create the Bodies Here.
	roof = new Roof(390,150,360,40)

	stom1 = createSprite(200,330,20,400);
	stom1.shapeColor="silver";

	stom2 = createSprite(580,330,20,400);
	stom2.shapeColor="silver";

	bobObject1 = new BobObject(250,500,35);
	bobObject2 = new BobObject(320,500,35);
	bobObject3 = new BobObject(390,500,35);
	bobObject4 = new BobObject(460,500,35);
	bobObject5 = new BobObject(530,500,35);

	rope1 = new Rope(bobObject1.body, roof.body, -35*4,0);
	rope2 = new Rope(bobObject2.body, roof.body, -35*2,0);
	rope3 = new Rope(bobObject3.body, roof.body, -35*0,0);
	rope4 = new Rope(bobObject4.body, roof.body, -35*-2,0);
	rope5 = new Rope(bobObject5.body, roof.body, -35*-4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
Engine.update(engine);
push();
fill("black")
textSize(16);
text("Sir Isaac Newton PRS was an English mathematician, physicist, astronomer, theologian, and author", 600,500)
text("who is widely recognised as one of the most influential scientists of all time and as a key figure",600,520)
text(" in the scientific revolution.",600,540)
pop();

  drawSprites();
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000})
	}
	if(keyCode === 50) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-1000,y:1000});
	}
}

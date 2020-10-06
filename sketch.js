const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// const Body = Matter.Body;

var ground, stone, boy, tree, sling;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	ground = new Ground(400,690,1400,10);

	stone = new Stone(100, 100, 50);

	tree = new Tree(700, 400, 100, 400);

	boy = new Boy(150, 610);

	mango1 = new Mango(600, 275, 100);

	mango2 = new Mango(675, 300, 100);

	mango3 = new Mango(750, 300, 100);

	mango4 = new Mango(700, 200, 100);

	mango5 = new Mango(600, 375, 100);

	sling = new Sling(boy.body, stone.body);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(230, 230, 230);
	  
	ground.display();
	stone.display();
	boy.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	sling.display();

  	drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
    stone.fly();
    gameState = "launched";
}

function detectCollision(stone, mango) {
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<-mango.radius+stone.radius)
	{
		Matter.Body.setStatic(mango.body, false);
	}
}

function attach() {
	BodyA = body;
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 235, y: 420});
		sling.attach(stone.body);
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;




	groundObject=new ground(width/2,600,width,20);
	treeObj=new tree(1050,580);
	mango1=new mango(1110,150,30);
	mango2=new mango(1130,200,30);
	mango3=new mango(900,210,30);
	mango4=new mango(900,170,30);
	mango5=new mango(1200,120,30);

	stoneObj=new Stone(225,400,30);
	launcherObject=new Throw(stoneObj.body,{x:225,y:400});





	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  groundObject.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  




  
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}

function detectCollision(stonebody,mangobody){
	stonepos=stonebody.body.position;
	mangopos=mangobody.body.position;
	var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);
	if(distance<=mangobody.r+stonebody.r){
		Matter.Body.setStatic(mangobody.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:225,y:400});
		launcherObject.Launch(stoneObj.body);
	}
}
	








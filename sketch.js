 var ground;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
 var slingshot;
 var polygon_img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
 polygon_img = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(480,560,250,10);

	 
 

	//level one
   
  
	block1 = new Block(390,540,30,40);
	block2 = new Block(420,540,30,40);
	block3 = new Block(450,540,30,40);
	block4 = new Block(480,540,30,40);
	block5 = new Block(510,540,30,40);
	block6 = new Block(540,540,30,40);
	block7 = new Block(570,540,30,40);
	 
	 //level two
	 
	block8 = new Block(420,500,30,40);
	block9 = new Block(450,500,30,40);
	block10 = new Block(480,500,30,40);
	block11 = new Block(510,500,30,40);
	block12 = new Block(540,500,30,40);

	//level three 
	 
	block13 = new Block(450,460,30,40);
	block14 = new Block(480,460,30,40);
    block15 = new Block(510,460,30,40);
	 
	 // top
	 
	block16 = new Block(480,420,30,40);

	polygon = Bodies.circle(100,130,20,40);
	World.add(world ,polygon);
    
	
	

	slingshot = new Slingshot(this.polygon, {x:200,y:390} );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(168,170,169);


  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
  
  imageMode(CENTER)
  image(polygon_img, polygon.position.x , polygon.position.y,50,50); 
  
 keyPressed();
  
  drawSprites();

  
 
}



function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x:mouseX , y:mouseY});
  }
  
  function mouseReleased(){
	 slingshot.fly();
	  
  }
  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
	}  
}   




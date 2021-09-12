const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;
const Constraint = Matter.Constraint;



function preload() {
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(1400,800 );
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);
superhero= new Superhero(400,800,150,150);
  attach=new Throw(superhero.body,{x:100,y:465})

  box1 = new Box(280,350,600,5);
  box2 = new Box(310,350,30,40);
  box3 = new Box(340,350,30,40);
  box4 = new Box(370, 350, 30,40);
  box5 = new Box(400, 350, 30,40);
  box6 = new Box(430, 350, 30,40);
  box7 = new Box(460, 350, 30,40);
  box8 = new Box(490, 350, 30,40);
  box9 = new Box(310, 315, 30,40);
  box10 = new Box(340, 315, 30,40);
  box11 = new Box(370, 315, 30,40);
  box12 = new Box(400, 315, 30,40);
  box13 = new Box(430, 315, 30,40);
  box14 = new Box(460, 315, 30,40);
monster = new Monster(1100,500,150,150);
Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(bg)
 
  ground.display()
  stroke(15)
  superhero.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  
  monster.display()

}

function mouseDragged() {
  Matter.Body.setPosition(superhero.body, { x: mouseX, y:mouseY});
}

function mouseReleased(){
attach.fly();

}

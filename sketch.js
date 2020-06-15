const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,325);
    box2 = new Box(100,300,50,325);
    box3 = new Box(300,300,50,325);
    ground = new Ground(200,380,400,20);
   ground2 = new Ground(20,500,800,20)
   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   box3.display();
 ground2.display();
   
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, bg
function preload(){
bg=loadImage("images/BG.jpg")
}

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
    engine = Engine.create();
    world = engine.world;

    box1 = new Unicorn(50,height-100,100,100);
    //box2 = new Box(240,100,50,100);
    //ground = new Ground(200,height,400,20)
}

function draw(){
    background(bg);
    Engine.update(engine);
    background.velocityX=-5
   
    box1.display();
    //box2.display();
    //ground.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var enemy1, enemy2, ground, pig1, log1, enemy3, enemy4, pig2, log2, enemy5, log3, log4, hero;
var monster, monsterImg;
var bg;

function preload(){
    bg=loadImage("images/GamingBackground.png");



}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    enemy1 = new Box(900,100,70,70);
    enemy2 = new Box(900,100,70,70);
    enemy3 = new Box(900,100,70,70);
    enemy4 = new Box(900,100,70,70);
    enemy5= new Box(900,100,70,70);
    enemy6 = new Box(900,100,70,70);
    enemy7 = new Box(800,100,70,70);
    enemy8 = new Box(800,100,70,70);
    enemy9 = new Box(800,100,70,70);
    enemy10= new Box(800,100,70,70);
    enemy11 = new Box(800,100,70,70);
    enemy12 = new Box(800,100,70,70);
    enemy13 = new Box(700,100,70,70);
    enemy14 = new Box(700,100,70,70);
    enemy15= new Box(700,100,70,70);
    enemy16 = new Box(700,100,70,70);
    enemy17 = new Box(700,100,70,70);
    enemy18 = new Box(700,100,70,70);
    enemy19 = new Box(700,100,70,70);
    enemy20= new Box(700,100,70,70);
    ground= new Ground(600,600,1200,20);
   
    hero=new Hero(200,200,200);
    monster=new Monster(1150,550,300);

    rope=new Ss(hero.body,{x:500,y:50});

}

function draw(){
    background(bg);

    Engine.update(engine);
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    enemy5.display();
    enemy6.display();
    enemy7.display();
    enemy8.display();
    enemy9.display();
    enemy10.display();
    enemy11.display();
    enemy12.display();
    enemy13.display();
    enemy14.display();
    enemy15.display();
    enemy16.display();
    enemy17.display();
    enemy18.display();
    enemy19.display();
    enemy20.display();
    


    ground.display();
    
    hero.display();

    rope.display();
   
    monster.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
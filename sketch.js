const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    
}

function setup(){
   createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,590,1200,20);
    boy1 = new Boy(250,300);

  stone1 = new Stone(50,50);
 
  slingshot1 = new Slingshot(stone1.body,{x:120,y:420});
     tree1 = new Tree(600,600);
    /*pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

   
    
    */
}

function draw(){
    background(150,200,255);
    Engine.update(engine);
    strokeWeight(4);
    boy1.display();
  
    ground.display();
    slingshot1.display();
     tree1.display();
     stone1.display();
   /* log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    
        
    

*/
}


   

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot1.fly();
}

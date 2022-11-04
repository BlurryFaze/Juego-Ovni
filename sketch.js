
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;
let world;
let engine;
var database;
var sueloinvisible;
var luna;
var constructor;
var cuerda;
var titulo,tituloimg;
var avion;
function preload(){
  backgroundimg= loadImage ("fondo ovni.jpg");
  tituloimg= loadImage ("Ovnititulo.png");
  avionimg = loadImage ("avioooon.png");
  ovniimg = loadImage ("ovni4.png");
}
function setup() {
  canvas = createCanvas(700,600);
   // database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  var v_o = {
    restitution: 0.8
    
  }
  titulo = createSprite(130,150,10,20);
  titulo.addImage(tituloimg);
  titulo.scale = 0.1;
  suelo =new Suelo(250,height-10,width,20);
  vaca = Bodies.circle(10,200,15,v_o);
  World.add(world,vaca);

  luna = new Suelo(50,100,100,10);

  //ovni = createSprite(200,100,50,50);
  //ovni.addImage();
 // ovni.scale = 0.2;
 
 cuerda = new Rope(4,{x:100,y:200});
  
 constructor = new Link(cuerda,vaca);
 
}


function draw() 
{
 
  imageMode(CENTER);

  background(51);
  image(backgroundimg,width/2,height/2,width,height);   
  Engine.update(engine);

  
  pop();
  suelo.show();
  luna.show();
  cuerda.show();

  cortarb = createImg('botonprendido.png');
  cortarb.position(10,300);
  cortarb.size(50,50);
  cortarb.mouseClicked(soltar);
  
 // if(keyDown("space")&& fantasma.y >= 100) {
   // fantasma.velocityY = -12;
   drawSprites();
}//
  
function movimientosovni () {
  if(keyDown(LEFT_ARROW)){
    player.positionX -= 10;
  }
   if(keyDown(RIGHT_ARROW)){
    player.positionX += 10;
  }
  if(keyDown(UP_ARROW)){
    player.positionY += 10;
  }
  if(keyDown(DOWN_ARROW)){
    player.positionY -= 10;
  }
}
   //ovni.changeAnimation('apagado');


//if (cortarb.mouseClicked){
//cortarb.changeAnimation("botonA");
//}
function soltar()
{
  cuerda.break();
  constructor.dettach();
  constructor = null; 
}
function cortarcuerda()
{
  cuerda.break();
  constructor.dettach();
  constructor = null; 
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
              
               return true; 
            }
            else{
              return false;
            }
         }
}



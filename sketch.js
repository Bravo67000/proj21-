
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let world;
let engine;
var ball ;
var groundSide ;
var leftSide;
var rightSide;
var pushbtn;

function setup() {
	createCanvas(1200, 500);
    engine = Engine.create();
	world = engine.world;

	ellipseMode(RADIUS);
	rectMode(CENTER);

	let ball_options = {
		isStatic:false,
		restitution: 0.3,
		frictionAir:0,
	    density:1.2
		
	};
   
	
  
	//Create the Bodies Here.
 
	ball = Bodies.circle(100,200,20,ball_options)
	fill(277)
	World.add(world,ball)

	

	groundSide = new Ground(400,450,4400,20)
	rightSide = new Ground(1100,400,20,80)
	leftSide = new Ground(900,400,20,80)


}
function draw (){
	Engine.update(engine);
	background(51)

	ellipse(ball.position.x,ball.position.y,20)
	
	

	groundSide.show()
	rightSide.show()
	leftSide.show()

}
	function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:38,y:-25})
	}
	


	}
	
	

  
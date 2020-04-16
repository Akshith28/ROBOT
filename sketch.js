var x=60;
var y=440;

var radius = 50;
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.06;
var squareY = 150;
var pointY = 150;

function setup(){
 createCanvas(360,480);
  
  strokeWeight(2);
  
  ellipseMode(RADIUS);
}
function draw(){
  background("white");
  
  var targetX=mouseX;
  x=x+(targetX-x)* easing;
  
  if(mouseIsPressed){
    neckHeight = 16;
    squareY = 200;
  }
  
  else{
    neckHeight = 70;
    squareY = 150; 
  }
  
  var neckY=y-bodyHeight-neckHeight-radius;
 
  line(x-15,neckY,x-18,neckY-99);
  line(x+15,neckY,x+18,neckY-99);
  
  noStroke();
  fill("blacK");
  ellipse(x,y-33,33,33);
  fill("black");
  rect(x-45,250,90,bodyHeight);
  
  fill("black");
  square(x-40,squareY,80);
 
}
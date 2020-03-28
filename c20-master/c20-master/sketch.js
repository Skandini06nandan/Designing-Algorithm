//Initialising the three variables as RED,BLUE & PURPLE.
var r = 0;
var p = 50;
var b= 255;

function setup(){
 createCanvas(1000,400);
 
}
function draw(){
  background(r,p,b);

 //To control ellipse with the mouse.
  ellipse(mouseX, 200,60,60);
  //For filling color to the shapes.
   fill(250,118,222);
   
  //MAP command for changing the background.
  r= map(mouseX,0,1000,0,255);
  b = map(mouseX,0,1000,255,0);
  p = map(mouseX,0,1000,0,50);

}

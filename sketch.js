// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 5 variables. red blue green orange yellow
var background;

function setup(){
  createCanvas(1200,400);

  background = createSprite(600,200,1200,400);
}
function draw(){
  // change the value of Red based on the mouse movement about the X axis
 if((mouseX > 0) && (mouseX < 240)){
   background.shapeColor = "red";
 }
  // change the value of blue based on the mouse movement about the X axis
 if((mouseX > 240) && (mouseX < 480)){
  background.shapeColor = "blue";
 }
  // change the value of yellow based on the mouse movement about the X axis
 if((mouseX > 480) && (mouseX < 720)){
  background.shapeColor = "yellow";
 }
 // change the value of orange based on the mouse movement about the X axis
 if((mouseX > 720) && (mouseX < 960)){
  background.shapeColor = "orange";
 }
 // change the value of green based on the mouse movement about the X axis
 if((mouseX > 960) && (mouseX < 1200)){
  background.shapeColor = "green";
 }

 drawSprites();
}  
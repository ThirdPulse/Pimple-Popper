var circ1=20;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,69,40) // an RGB color for the circle's border
  strokeWeight(3);
  fill(255,149,149,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,circ1,circ1); // center of canvas, 20px dia 
  stroke(192,192,192)
  fill(255,255,153)
  textSize(20);
  textFont("Verdana");
  textStyle(NORMAL);     
  text("Pimple Popper",40,40);
}

function mousePressed(){
    if(circ1>40){
       circ1=0;
    }else{
    circ1=circ1+5;
    }
}
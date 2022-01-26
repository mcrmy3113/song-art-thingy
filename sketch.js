var randx;
var randy;
var rands;
var randr;
var randg;
var randb;
var randr2;
var randg2;
var randb2;
var mouseThing;






function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  randx=random(-10,400);
  randy=random(-10,400);
  rands=random(0,200);
  randr=random(0,20);
  randg=random(0,0);
  randb=random(0,200);
  randr2=random(100,200);
  randg2=random(0,0);
  randb2=random(100,200);
  mouseThing=(height/2)-(mouseY);
  background(0);
  
  fill(randr)
  //square(randx,randy,rands)
  
  
  noStroke();
  fill(randr2-50,randg2-50,randb2-50)  
  rect(7, 170, 10, 90+mouseThing);
  
  rect(24, 170, 10, 150+mouseThing);
  rect(41, 170, 10, 190+mouseThing);
  rect(58, 170, 10, 150+mouseThing);
  rect(75, 170, 10, 130+mouseThing);
  rect(92, 170, 10, 150+mouseThing);
  rect(109, 170, 10, 150+mouseThing);
  rect(126, 170, 10, 150+mouseThing);
  rect(143, 170, 10, 120+mouseThing);
  rect(160, 170, 10, 150+mouseThing);
  rect(177, 170, 10, 190+mouseThing);

  rect(194, 170, 10, 190+mouseThing);
  
  rect(211, 170, 10, 190+mouseThing);
  rect(228, 170, 10, 130+mouseThing);
  rect(245, 170, 10, 130+mouseThing);
  rect(262, 170, 10, 130+mouseThing);
  rect(279, 170, 10, 90+mouseThing);
  rect(296, 170, 10, 90+mouseThing);
  rect(313, 170, 10, 90+mouseThing);
  rect(330, 170, 10, 120+mouseThing);
  rect(347, 170, 10, 150+mouseThing);
  rect(365, 170, 10, 130+mouseThing);  
  
  rect(381, 170, 10, 90+mouseThing);
  
  
  fill(randr2+10,randg2+10,randb2+10)  
  rect(7, 150-mouseThing, 10, 15+mouseThing);
  rect(24, 105-mouseThing, 10, 60+mouseThing);
  rect(41, 85-mouseThing, 10, 80+mouseThing);
  rect(58, 105-mouseThing, 10, 60+mouseThing);
  rect(75, 120-mouseThing, 10, 45+mouseThing);
  rect(92, 105-mouseThing, 10, 60+mouseThing);
  rect(109, 105-mouseThing, 10, 60+mouseThing);
  rect(126, 105-mouseThing, 10, 60+mouseThing);
  rect(143, 145-mouseThing, 10, 20+mouseThing);
  rect(160, 105-mouseThing, 10, 60+mouseThing);
  rect(177, 85-mouseThing, 10, 80+mouseThing);
  rect(194, 85-mouseThing, 10, 80+mouseThing);
  rect(211, 85-mouseThing, 10, 80+mouseThing);
  rect(228, 120-mouseThing, 10, 45+mouseThing);
  rect(245, 120-mouseThing, 10, 45+mouseThing);
  rect(262, 120-mouseThing, 10, 45+mouseThing);
  rect(279, 150-mouseThing, 10, 15+mouseThing);
  rect(296, 150-mouseThing, 10, 15+mouseThing);
  rect(313, 150-mouseThing, 10, 15+mouseThing);
  rect(330, 125-mouseThing, 10, 40+mouseThing);
  rect(347, 105-mouseThing, 10, 60+mouseThing);
  rect(365, 115-mouseThing, 10, 50+mouseThing);  
  rect(381, 150-mouseThing, 10, 15+mouseThing);
  
  fill(randr);
  rect(0,165,400,5)
  
 
  
}

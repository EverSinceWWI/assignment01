function setup() {
  createCanvas(800,600);
  background(59, 62, 68);
  rectMode(CENTER);
}

function draw() {
  
  //PORTAL TURRET
  translate(0,0);
  scale(1,1);
  
  //GENERAL BODY ELLIPSE
  noStroke();
  fill(247,247,247);
  ellipse(width/2,height/2,265,400);
  
  //GENERAL BODY MASK
  push();
  noStroke();
  fill(59, 62, 68);
  triangle(width/2-160,height/2-280,width/2+160,height/2-280,width/2,height/2+120); //Top Mask Triangle
  triangle(width/2-160,height/2+280,width/2+160,height/2+280,width/2,height/2-120); //Bottom Mask Triangle
  pop();
  
  //ANTENNAS
  stroke(8,8,8);
  strokeWeight(2.5);
  line(width/2-23,height/2-200,width/2-10,height/2-210); //Long Antenna Diagonal Line
  strokeWeight(3);
  line(width/2-10,height/2-195,width/2-10,height/2-170); //Short Antenna
  line(width/2-23,height/2-200,width/2-23,height/2-170); //Long Antenna Base
  line(width/2-10,height/2-211,width/2-10,height/2-245); //Long Antenna Diagonal Line

  //MAIN BODY MASK
  stroke(59, 62, 68);
  strokeWeight(60);
  ellipse(width/2,height/2,135,280); //Main body Ellipse Mask

  //LEGS
  push(); //Central Leg
  noStroke();
  fill(8,8,8);
  ellipse(width/2,height/2+160,13,170);
  pop();
  
  push(); //Lateral Legs Connectors
  stroke(247,247,247);
  strokeWeight(8);
  noFill();
  arc(width/2+43,height/2+80,50,160,110,180); //Large Right
  arc(width/2-43,height/2+80,50,160,0,70); //Large Left
  strokeWeight(4);
  arc(width/2+43,height/2+80,50,160,80,180); //Thin Right
  arc(width/2-43,height/2+80,50,160,0,100); //ThinLeft
  pop();
  
  push(); //Lateral Legs
  strokeWeight(14);
  stroke(8,8,8);
  noFill();
  translate(width/2,height/2);
  angleMode(DEGREES);
  rotate(-17);
  arc(12,175,10,250,0,89); //Right
  rotate(34);
  arc(-15,178,10,250,91.1,130); //Left
  pop();
  
  push(); //Triangle Knees
  noStroke();
  triangle(width/2+45,height/2+130,width/2+60,height/2+170,width/2+82,height/2+165); //Right
  triangle(width/2-45,height/2+130,width/2-60,height/2+170,width/2-82,height/2+165); //Left
  pop();
  
  push(); //Triangle Knees Mask
  noStroke();
  fill(59,62,68);
  rectMode(CENTER);
  rect(width/2+50,height/2+130,25,15); //Right
  rect(width/2-50,height/2+130,25,15); //Left
  pop();
  
  push(); //Legs Triangle Masks
  noStroke();
  fill(59,62,68);
  triangle(width/2+20,height/2+290,width/2+130,height/2+290,width/2+75,height/2+240); //Right
  triangle(width/2-20,height/2+290,width/2-130,height/2+290,width/2-75,height/2+240); //Left
  pop();
  
  //MAIN BODY ELLIPSE
  push();
  noStroke();
  fill(247,247,247);
  ellipse(width/2,height/2,75,220);
  pop();
  
  //MAIN BODY TOP
  push();
  noStroke();
  fill(247,247,247);
  arc(width/2,height/2-138,82,70,PI,PI);
  pop();
  
  push();
  noStroke();
  fill(247,247,247);
  triangle(width/2-40,height/2-130,width/2+40,height/2-130,width/2,height/2) //Main Body Top Triangle
  pop();
  
  push();
  strokeWeight(10);
  stroke(247,247,247);
  line(width/2-120,height/2,width/2+120,height/2) //Arms Connection
  pop();
  
  //EYE
  push(); //Eye Socket
  noStroke();
  fill(36,39,45);
  ellipse(width/2,height/2,43,43); 
  pop();
  
  push();
  strokeWeight(3);
  stroke(36,39,45);
  line(width/2,height/2-175,width/2,height/2+94);
  

  push(); //Eye IRIS
  noStroke();
  fill(250,0,0);
  translate(width/2, height/2);
  rectMode(CENTER);
  rect(0,0,2,35,6);
  angleMode(DEGREES);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  rotate(15);
  rect(0,0,2,35,6);
  pop();
  
  push(); //Eye Center
  noStroke();
  fill(36,39,45);
  ellipse(width/2,height/2,8,8) 
  pop();
  
  push(); //GUNS
  noStroke();
  fill(247,247,247)
  rectMode(CENTER);
  rect(width/2-85,height/2,28,90,0,5,5,0); //Gun Holder Left White
  rect(width/2+85,height/2,28,90,5,0,0,5); //Gun Holder Right White
  fill(36,39,45)
  rect(width/2-85,height/2,20,80,0,5,5,0); //Gun Holder Left Black
  rect(width/2+85,height/2,20,80,5,0,0,5); //Gun Holder Right Black
  pop();
  
  push();
  noStroke();
  fill(247,247,247);
  ellipse(width/2-85,height/2-18,18,18); //Gun Socket Left-Top
  ellipse(width/2+85,height/2-18,18,18); //Gun Sosket Right-Top
  ellipse(width/2-85,height/2+18,18,18); //Gun Socket Left-Bottom
  ellipse(width/2+85,height/2+18,18,18); //Gun Socket Right-Bottom
  
  stroke(36,39,45);
  strokeWeight(4);
  ellipse(width/2-85,height/2-18,9,9); //Gun Nozzle Left-Top
  ellipse(width/2+85,height/2-18,9,9); //Gun Nozzle Left-Bottom
  
  strokeWeight(2);
  ellipse(width/2-85,height/2+18,12,12); //Gun Nozzle Left-Top
  ellipse(width/2+85,height/2+18,12,12); //Gun Nozzle Left-Bottom
  pop();

  //ARM DETAILS
  push();
  noStroke();
  fill(59, 62, 68);
  rectMode(CENTER);
  rect(width/2-130,height/2,12,8); //Arm Detail Left
  rect(width/2+130,height/2,12,8); //Arm Detail Right
  
  rect(width/2+100,height/2+128,8,8); //Arm Detail Cut Bottom
  rect(width/2-100,height/2+128,8,8);
  rect(width/2+100,height/2-128,8,8); //Arm Detail Cut Top
  rect(width/2-100,height/2-128,8,8);
  pop();
  
  
  //HEART
  push();
  translate(100,90);
  rotate(45);
  scale(0.6,0.6);
 
  fill(230,0,0);
  noStroke();
  rect(width/2,height/2,30,30);
  ellipse(width/2-15,height/2,30,30);
  ellipse(width/2,height/2-15,30,30);
  pop();
  
  
  //P5 ROBOT
  push()
  translate(-200,280);
  scale(0.7,0.7);
  
  //NECK
  strokeWeight(4);
  stroke(30,30,30);
  line(width/2+10,height/2,width/2+10,height/2-60);
  line(width/2,height/2,width/2,height/2-60);
  line(width/2-10,height/2,width/2-10,height/2-60);

  //MAIN BODY
  noStroke();
  fill(148, 206, 203);
  rect(width/2,height/2+50,80,120,10,25,10,0);

  //WHITE STRIPE
  noStroke();
  fill(235, 235, 235);
  rect(width/2,height/2+25,80,15);

  //WHEEL
  strokeWeight(5);
  stroke(59, 62, 68);
  fill(30,30,30);
  ellipse(width/2-30,height/2+90,75,75);
  
  noStroke();
  fill(15,15,15);
  ellipse(width/2-30,height/2+90,60,60);
  
  //HEAD
  stroke(30,30,30);
  strokeWeight(6);
  line(width/2+30,height/2-100,width/2+50,height/2-110);
  line(width/2+30,height/2-85,width/2+50,height/2-80);
 
  stroke(148, 206, 203);
  strokeWeight(10);
  line(width/2-10,height/2-90,width/2-80,height/2-70);
  line(width/2-10,height/2-75,width/2-80,height/2-50);
  line(width/2-10,height/2-105,width/2-75,height/2-90);

  noStroke();
  fill(148, 206, 203);
  ellipse(width/2,height/2+-90,70,70);
  fill(230, 230, 230);
  stroke(124, 173, 170);
  strokeWeight(2);
  ellipse(width/2+10,height/2-96,30,30);
  fill(30,30,30);
  noStroke();
  ellipse(width/2+15,height/2-100,10,10);
  fill(230,230,230);
  ellipse(width/2-10,height/2-100,5,5);
  ellipse(width/2-10,height/2-90,5,5);
  pop();

}
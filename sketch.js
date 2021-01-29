function setup() {
  createCanvas(600, 600);
  background(255);
  // put setup code here
}

function draw() {
  // put drawing code here
   line(0, 300, 115, 300); //flat
   line(150, 300, 160, 300);
   line(195, 300, 205, 300);
   line(240, 300, 250, 300);
   line(285, 300, 295, 300);
   line(330, 300, 340, 300);
   line(375, 300, 385, 300);
   line(420, 300, 430, 300);
   line(465, 300, width, 300);

   //println(mouseX);

   //noFill();
   strokeWeight(.5);
   beginShape();
   vertex(115, 300);
   vertex(120, 275);
   vertex(125, 325);
   vertex(135, 200);
   vertex(145, 400);
   vertex(150, 300);
   endShape();
   
   beginShape();
   vertex(160, 300);
   vertex(165, 275);
   vertex(170, 325);
   vertex(180, 100);
   vertex(190, 500);
   vertex(195, 300);
   endShape();
   
   beginShape();
   vertex(205, 300);
   vertex(210, 275);
   vertex(215, 325);
   vertex(225, 200);
   vertex(235, 400);
   vertex(240, 300);
   endShape();
   
   beginShape();
   vertex(250, 300);
   vertex(255, 275);
   vertex(260, 325);
   vertex(270, 100);
   vertex(280, 500);
   vertex(285, 300);
   endShape();
   
   beginShape();
   vertex(295, 300);
   vertex(300, 275);
   vertex(305, 325);
   vertex(315, 200);
   vertex(325, 400);
   vertex(330, 300);
   endShape();
   
   beginShape();
   vertex(340, 300);
   vertex(345, 275);
   vertex(350, 325);
   vertex(360, 100);
   vertex(370, 500);
   vertex(375, 300);
   endShape();
   
   beginShape();
   vertex(385, 300);
   vertex(390, 275);
   vertex(395, 325);
   vertex(405, 200);
   vertex(415, 400);
   vertex(420, 300);
   endShape();
   
   beginShape();
   vertex(430, 300);
   vertex(435, 275);
   vertex(440, 325);
   vertex(450, 100);
   vertex(460, 500);
   vertex(465, 300);
   endShape();
}





function setup() {
 createCanvas(600,    600);
 angleMode(DEGREES);

} 

function draw() { 
  background(167,224,250);
  translate(width/2, height/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(4);
  stroke(255, 255, 200);
  fill(255, 255, 200);
  //noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 200, 200, 0, secondAngle, CHORD);

  
 stroke(155, 200, 100);
  //fill(155, 200, 100);
  noFill();
  let minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minuteAngle, PIE);

  stroke(255, 255, 50);
  //fill(255, 255, 50);
  noFill();
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 300, 300, 0, hourAngle, CHORD);
  
  if(mn % 10 == 0)
    print("The value of minute is"+mn); 
  

  // fill(255);
  //oStroke();
    //text(hr + ':' + mn + ':' + sc, 300, 300);
}
//A variables
var origAX = 0;
var destAX = 0;
var origAY = 0;
var destAY = 0;

//A & L variables
var origALY = 0;
var destALY = 0;
var origALX = 0;
var destALX = 0;

//L variables
var origLY = 0;
var destLY = 0;

//G variables
var origGX1 = 0;
var destGX1 = 0;
var origGX2 = 0;
var destGX2 = 0;
var origGD = 0;
var destGD = 0;
var origGR = 0;
var destGR = 0;
var origGX = 0;
var destGX = 0;
var origGY = 0;
var destGY = 0;

//time keeping
var wait = 2000;
var startTime;
var animStart = 0;
var animEnd = 0;
var animRun = 0;

function setup() {

  var canvasDiv = document.getElementById('monogram-holder');
var divWidth = canvasDiv.offsetWidth;
var divHeight = canvasDiv.offsetHeight;

if (divWidth >= divHeight){
  width = divHeight;
  height = divHeight;
}

else if (divWidth <= divHeight){
  width = divWidth;
  height = divWidth;
}

var monogram = createCanvas(width,height);
console.log(monogram);
monogram.parent('monogram-holder');

startTime = millis();

  //A stroke setup
  origAX = random(width*.02,width*.2);
  origAY = random(height*.02,height*.2);
  destAX = origAX;
  destAY = origAY;

  //A & L stroke setup
  origALX = random(width*.5,width*.8);
  origALY = random(height*.7,height*.9);
  destALX = origALX;
  destALY = origALY;

  //L stroke setup
  origLY = random(height*.05,height*.2);
  destLY = origLY;

  //G stroke setup
  origGX = random(width*.5,width*.6);
  origGY = random(height*.3,height*.6);
  destGX = origGX;
  destGY = origGY;

  origGX1 = random(width*.09,width*.5);
  origGX2 = random(width*.02+(destGX+(width*.3)),width*.9);
  destGX1 = origGX1;
  destGX2 = origGX2;

  origGD = random(270,360);
  origGR = radians(origGD);
  destGD = origGD;
  destGR = origGR;
}

function draw() {

var canvasDiv = document.getElementById('monogram-holder');
var divWidth = canvasDiv.offsetWidth;
var divHeight = canvasDiv.offsetHeight;

if (divWidth >= divHeight){
  width = divHeight;
  height = divHeight;
}

else if (divWidth <= divHeight){
  width = divWidth;
  height = divWidth;
}

var monogram = createCanvas(width,height);
console.log(monogram);
monogram.parent('monogram-holder');

animStart = millis();

//background
  fill(255);
  noStroke();
  rect(0,0,width,height);

//A Animation
  if(origAX < destAX && origAX != destAX){
    origAX += (width*.0045);
  }
    else if (origAX > destAX && origAX != destAX){
      origAX += -(width*.0045);
    }

   if(origAX-destAX <= (width*.0045) && origAX-destAX >= - (width*.0045)){
   origAX = destAX;
  }

//

    if(origAY < destAY && origAY != destAY){
    origAY += (height*.0045);
  }
    else if(origAY > destAY && origAY != destAY){
      origAY += -(height*.0045);
    }

   if(origAY-destAY <=(height*.0045) && origAY-destAY >=-(height*.0045)){
   origAY = destAY;
  }


//A & L Animation
 if(origALX < destALX && origALX != destALX){
   origALX += (width*.0036);
 }

 else if (origALX > destALX && origALX != destALX){
   origALX += -(width*.0036);
 }

  if(origALX-destALX <=(width*.0036) && origALX-destALX >=-(width*.0036)){
     origALX = destALX;
   }

 //

 if(origALY < destALY && origALY != destALY){
   origALY += (height*.0036);
 }

 else if (origALY > destALY && origALY != destALY){
   origALY += -(height*.0036);
 }

  if(origALY-destALY <=(height*.0036) && origALY-destALY >=-(height*.0036)){
     origALY = destALY;
   }

//L Animation
   if(origLY < destLY && origLY != destLY){
     origLY += (height*.0036);
   }

   else if (origLY > destLY && origLY != destLY){
     origLY += -(height*.0036);
   }

   if(origLY-destLY <=(height*.0036) && origLY-destLY >=-(height*.0036)){
     origLY = destLY;
   }

 //G Animation

   if(origGX < destGX && origGX != destGX){
     origGX += (width*.0036);
   }
   else if(origGX > destGX && origGX != destGX){
     origGX += -(width*.0036);
   }
   if(origGX-destGX <=(width*.0036) && origGX-destGX >=-(width*.0036)){
     origGX = destGX;
   }

//

   if(origGY < destGY && origGY != destGY){
     origGY += (height*.0036);
   }
   else if(origGY > destGY && origGY != destGY){
     origGY += -(height*.0036);
   }
   if(origGY-destGY <=(height*.0036) && origGY-destGY >=-(height*.0036)){
     origGY = destGY;
   }

//

   if(origGX1 < destGX1 && origGX1 != destGX1){
     origGX1 += (width*.0036);
   }
   else if(origGX1 > destGX1 && origGX1 != destGX1){
     origGX1 += -(width*.0036);
   }
   if(origGX1-destGX1 <=(width*.0036) && origGX1-destGX1 >=-(width*.0036)){
     origGX1 = destGX1;
   }

//

    if(origGX2 < destGX2 && origGX2 != destGX2){
     origGX2 += 1;
    }
   else if(origGX2 > destGX2 && origGX2 != destGX2){
     origGX2 += -1;
   }
   if(origGX2-destGX2 <=1 && origGX2-destGX2 >=-1){
     origGX2 = destGX2;
   }

//

   if(origGD < destGD && origGD != destGD){
     origGD += 1;
     origGR = radians(origGD);
   }

   else if(origGD > destGD && origGD != destGD){
     origGD += -1;
     origGR = radians(origGD);
   }

   if(origGD-destGD <=1 && origGD-destGD >=-1){
     origGD = destGD;
     origGR = radians(origGD);

   }


//time keeping
if(origAX == destAX && origAY == destAY && origGX == destGX && origGY == destGY && origGD == destGD && origGX1 == destGX1 && origGX2 == destGX2){

    animEnd = millis();
    animRun = animEnd-animStart;
}

if(millis()-startTime >= wait + animRun){

    startTime = millis();
    animStart = millis();

    //A stroke
    destAX = random(width*.02,width*.2);
    destAY = random(height*.02,height*.2);

    //A & L stroke
    destALX = random(width*.5,width*.8);
    destALY = random(height*.7,height*.9);

    //L stroke
    destLY = random(height*.05,height*.2);

    //G stroke
    destGX1 = random(width*.09,width*.5);
    destGX2 = random(width*.02+(destGX+(width*.3)),width*.9);
    destGX = random(width*.5,width*.6);
    destGY = random(height*.4,height*.7);

    destGD = random(270,360);
    destGR = radians(destGD);
}
  //drawing the lines

  noFill();
  stroke(81);
  strokeWeight((width+height/2)*.015);
  strokeCap(SQUARE);

  //A stroke
  line(origAX, origALY, origALX, origAY);

   //L stroke 1
  line(origALX,origLY,origALX,origALY);

  //L stroke 2
  line(origALX+width*.04,origLY,origALX+width*.04,origALY);

  //G stroke
  arc(origGX,origGY,width*.5,height*.5,0,origGR, OPEN);
  line(origGX1,origGY,origGX2,origGY);

window.addEventListener("resize", draw);

}

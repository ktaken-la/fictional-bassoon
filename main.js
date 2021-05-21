img = "";
status="";

function preload(){
  img = loadImage('bottle.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
   console.log('Model has loaded!');
   status=true;
   objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
   if(error){
 console.log(error);
   }else{
 console.log(results);
   }
}

function draw() {
  image(img, 0, 0, 640, 420);

  fill("#FF0000");
  text("Bottle", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350 );

}
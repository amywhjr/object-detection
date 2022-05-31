objectDetector="";
img="";
status="";
objects=[];
function preload()
{
    img=loadImage("dog_cat.jpg")
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML='status:Detecting objects';
}
function modelLoaded()
{
    console.log("model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
    if (error) 
    {
      console.error(error);  
    }
    console.log(results);
    objects=results;
}


function draw() {
   image(img,0,0,640,420);
   if (status != "") 
   {
  /*  fill("red");
    text("Dog",160,55);
    
    noFill();
    stroke("red");
   
    rect(60,60,300,350);
    fill("cyan")
    text("cat",400,120);
 
    noFill();
    stroke("cyan")
 
    rect(300,50,265,350);
    */
   for(var i=0; i<objects.legnth; i++)
   {
       document.getElementById("status").innerHTML="status:object detected";
       fill("red");
       percent=floor(objects[i].confidence*100);
       
       text(objects[i].label + "" + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
       noFill();
       stroke("cyan");
       rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
   }
   }
    
   
  
  }
  
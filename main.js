var score = 0;
var left_wristX = 0;
var left_wristY = 0;
var song1 = 0;
var song2 = 0;
function setup()
{
  canvas = createCanvas(600,500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',resultados_a);
  
}
function draw()
{
    background("white");
    image(video,0,0,600,500);
    fill("red");
    circle(left_wristX,left_wristY,20);
   if(score>0.6)
   {

     song1.play();
   }
}
function preload()
{
 song1 = loadSound("canción Minecraft.mp3");
 song2 = loadSound("Live_and_Learn_by_Crush_40_Main_Theme_of_SA2_.mp3");
}
function modelLoaded()
{
  console.log("se a cargao tio");
}
function resultados_a(results)
{
  //console.log(results);
  if(results.legnth>0)
  {
   left_wristX = results[0].pose.leftWrist.x;
   left_wristY = results[0].pose.leftWrist.y;
   score = results[0].pose.keypoints[9].score;
   console.log("leftWristX = " + left_wristX +" leftWristY = "+ left_wristY);
  }
}
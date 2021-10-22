var canvas,ctx,rover_width,rover_height,rover_x,rover_y,background_imgtag,rover_imgtag,background_image,rover_image;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="couricity.jpg";
rover_image="download(16).jpg";

rover_x=10;
rover_y=10;

function add()
{
  background_imgtag=new Image();
  background_imgtag.onload= uploadbackground;
  background_imgtag.src=background_image;
  
  rover_imgtag=new Image();
  rover_imgtag.onload= uploadrover;
  rover_imgtag.src=rover_image;
}

function uploadbackground()
{
  ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
  ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
  keyPressed=e.keyCode;
  console.log(keyPressed);
  
  if(keyPressed== '37')
    {
      left();
      console.log("left");
    }
  
  if(keyPressed== '38')
    {
      up();
      console.log("up");
    }
  
  if(keyPressed== '39')
    {
      right();
      console.log("right");
    }
  
  if(keyPressed== '40')
    {
      down();
      console.log("down");
    }
}

function up(){
  if(rover_y >=0){
    rover_y -=10;
    console.log("when up arrow is pressed,x="+rover_x ,"y="+rover_y);
    uploadbackground();
    uploadrover();
  }
}

function down(){
  if(rover_y <=canvas.height-100){
    rover_y +=10;
    console.log("when up arrow is pressed,x="+rover_x ,"y="+rover_y);
    uploadbackground();
    uploadrover();
  }
}

function left(){
  if(rover_x >=0){
    rover_x -=10;
    console.log("when up arrow is pressed,x="+rover_x ,"y="+rover_y);
    uploadbackground();
    uploadrover();
  }
}

function right(){
  if(rover_x <=canvas.width-100){
    rover_x +=10;
    console.log("when up arrow is pressed,x="+rover_x ,"y="+rover_y);
    uploadbackground();
    uploadrover();
  }
}
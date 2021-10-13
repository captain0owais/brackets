canvas=document.getElementById("mycanvas");
var cx,cy,lx,ly,mouse,color,width_of_line;
c=canvas.getContext("2d");

canvas.addEventListener("mousedown", fun1);

function clicked(){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
}

function fun1(e)
{
    lx=e.clientX-canvas.offsetLeft;
    ly=e.clientY-canvas.offsetTop;
}

canvas.addEventListener("mousedown", fun3);

function fun3(e)
{
    mouse="mouseDown";
}

canvas.addEventListener("mouseup", fun4);

function fun4(e)
{
    mouse="mouseUp";
}

canvas.addEventListener("mouseleave", fun5);

function fun5(e)
{
    mouse="mouseLeave";
}

canvas.addEventListener("mousemove", fun2);

function fun2(e)
{
    if(mouse=="mouseDown")
    {
    cx=e.clientX-canvas.offsetLeft;
    cy=e.clientY-canvas.offsetTop;
    c.beginPath();
    c.strokeStyle=color;
    c.lineWidth= width_of_line;
    c.moveTo(lx, ly);
    c.lineTo(cx, cy);
    c.stroke();
    }
    lx=cx;
    ly=cy;
}
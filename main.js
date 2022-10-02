canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var lastposition_ofx, lastposition_ofy;
color="blue";
width_of_line=3;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouseevent="mouseDown";

}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseevent="mouseUp";

}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseevent="mouseLeave";

}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    current_position_ofx=e.clientX-canvas.offsetLeft;
    current_position_ofy=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(lastposition_ofx, lastposition_ofy);
    ctx.lineTo(current_position_ofx, current_position_ofy);
    ctx.stroke();


}

lastposition_ofx=current_position_ofx;
lastposition_ofy=current_position_ofy;}

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var colour="red";
var line_width=2;
var radius=20;
var mouse_event="empty"
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){

    mouse_event="Mousedown"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

current_position_x=e.clientX - canvas.offsetLeft;
current_position_y=e.clientY - canvas.offsetTop;
if(mouse_event == "Mousedown"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=line_width;
ctx.arc(current_position_x,current_position_y,radius,0,2*Math.PI);
ctx.stroke();
}
}
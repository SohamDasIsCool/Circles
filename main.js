canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var last_pos_of_x,last_pos_of_y;
color=document.getElementById("color").value;
width_of_line=3;
var mouseEvent="";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color=color;
    width_of_line=2;
    radius=document.getElementById("radius").value;
mouseEvent="mouseDown"
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_pos_of_mouse_x= e.clientX-canvas.offsetLeft;
    current_pos_of_mouse_y= e.clientY-canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("current position of X_and_Y coordinate =");
        console.log("x = "+current_pos_of_mouse_x+" y = "+current_pos_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_pos_of_mouse_x,current_pos_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }

}
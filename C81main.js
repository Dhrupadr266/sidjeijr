canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color="red";
//steps to make a circle//
ctx.beginPath();//same as pen down//
ctx.strokeStyle = color;
ctx.lineWidth= 3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e) {
    x=e.clientX - canvas.offsetLeft;
    y=e.clientY - canvas.offsetTop;
    console.log("X=" +x + "Y=" +y);
    circle(x,y);
}
function circle (x,y){
    ctx.beginPath();//same as pen down//
ctx.strokeStyle = color;
ctx.lineWidth= 3;
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
} 


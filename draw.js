var isMouseDown=false;
const canvas = document.getElementById("canva");
var body = document.getElementsByTagName("body")[0];
var ctx = canvas.getContext('2d');
var linesArray = [];
currentSize = 10;
var currentBg = "white";
var rect;
let taille = 20;
let activ_color;
let tools;

canvas.addEventListener('mousedown', function() {mousedown(canvas, event);});
canvas.addEventListener('mousemove',function() {mousemove(canvas, event);});
canvas.addEventListener('mouseup',mouseup);
const reed = "red";
const red = document.getElementById("red");
const black = document.getElementById("black");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const peinture = document.getElementById("peinture");
let color = 'Black';
peinture.addEventListener("click",full_paint);
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', eraser_click);
pen = document.getElementById('pen');
pen.addEventListener('click', pen_click);
red.addEventListener("click",change_red);
green.addEventListener("click",change_green);
blue.addEventListener("click",change_blue);
black.addEventListener("click",change_black);
    canvas.addEventListener('mousedown', e => { //des qu'on appuie
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
    });

activ_color = black;
tools = pen;

function pen_click()
{
    if (activ_color == black)
    {
      change_black();
    }
    else if (activ_color == red)
    {
      change_red();
    }
    else if (activ_color == green)
    {
      change_green();
    }
    else if (activ_color == blue)
    {
      change_blue();
    }
    tools.classList.remove('pen_click');
    tools = pen;
    pen.classList.add('pen_click');
}
function eraser_click() {
      taille = taille;
      color = "white";
      tools.classList.remove('pen_click');
      eraser.classList.add('pen_click');
      tools = eraser;
      activ_color.classList.remove('color_click');
        }

function full_paint()
{
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 960, 960);
  tools.classList.remove('pen_click');
 // peinture.classList.add('pen_click');
  //tools = peinture;
}
function getMousePos(canvas, evt) {
      rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }


    function mousedown(canvas, evt) {
      var mousePos = getMousePos(canvas, evt);
      isMouseDown=true
      var currentPosition = getMousePos(canvas, evt);
      ctx.moveTo(currentPosition.x, currentPosition.y)
      ctx.beginPath();
      ctx.lineWidth  = taille;
      ctx.lineCap = "round";
      ctx.strokeStyle = color;

    }


    function mousemove(canvas, evt) {

      if(isMouseDown){
        var currentPosition = getMousePos(canvas, evt);
        ctx.lineTo(currentPosition.x, currentPosition.y)
        ctx.stroke();
        store(currentPosition.x, currentPosition.y, taille, color);
      }
    }


    function store(x, y, s, c) {
      var line = {
        "x": x,
        "y": y,
        "size": s,
        "color": c
      }
      linesArray.push(line);
    }

    function mouseup() {
      isMouseDown=false
      store()
    }

function change_red()
{
    color = '#FF0000';
    activ_color.classList.remove('color_click');
    red.classList.add('color_click');
    activ_color = red;
   remove_class(tools);

}
function change_black()
{
    color = '#000000';
    activ_color.classList.remove('color_click');
    black.classList.add('color_click');
    activ_color = black;
    remove_class(tools);
    
}
function change_green()
{
    color = '#00BE31';
    activ_color.classList.remove('color_click');
    activ_color = green;
    green.classList.add('color_click');
    remove_class(tools);
}
function change_blue()
{
    color = '#00A6FF';
    activ_color.classList.remove('color_click');
    activ_color = blue;
    blue.classList.add('color_click');
    remove_class(tools);
}

function changeRange(value)
{
    taille = value;
    
}
function remove_class(tool)
{
  console.log(tool);
  if (tool != pen)
  {
    eraser.classList.remove('pen_click');
  }
  
}

 
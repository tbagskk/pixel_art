var isMouseDown=false;
const canvas = document.getElementById("canva");
var body = document.getElementsByTagName("body")[0];
var ctx = canvas.getContext('2d');
var linesArray = [];
currentSize = 10;
var currentBg = "white";
var rect;
let taille = 20;

canvas.addEventListener('mousedown', function() {mousedown(canvas, event);});
canvas.addEventListener('mousemove',function() {mousemove(canvas, event);});
canvas.addEventListener('mouseup',mouseup);
const reed = "red";
const red = document.getElementById("red");
const black = document.getElementById("black");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
let color = 'Black';
document.getElementById('eraser').addEventListener('click', eraser);
red.addEventListener("click",change_red);
green.addEventListener("click",change_green);
blue.addEventListener("click",change_blue);
black.addEventListener("click",change_black);
    canvas.addEventListener('mousedown', e => { //des qu'on appuie
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
    });

function eraser() {
            taille = 50;
            color = "white";
            console.log("eraser");
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
}
function change_black()
{
    color = '#000000';
}
function change_green()
{
    color = '#00BE31';
}
function change_blue()
{
    color = '#00A6FF';
}

function changeRange(value)
{
    taille = value;
    
}


 

console.log("caca");

const canvas = document.getElementById("canva");
const context = canvas.getContext("2d");
context.lineWidth = 10;
let isDrawing = false;
let x = 0;
let y = 0;
// Wall
//ctx.strokeRect(75, 140, 150, 110);
//ctx.fillStyle = '#FF5733';
//ctx.fillRect(10, 10, 100, 100);
/*
// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();


function draw() {
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                       Math.floor(255 - 42.5 * j) + ',0)';
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}
draw();
*/
/*
var mon_element = document.getElementById('canva');

mon_element.addEventListener('click', function() {

  var positions = elementPosition(mon_element);

  console.log({
    "Position horizontale dans la fenêtre": positions.clientX, 
    "Position verticale dans la fenêtre": positions.clientY, 
    "Position horizontale dans le document": positions.viewportX, 
    "Position verticale dans le document": positions.viewportY
 });

});
*/
const reed = "red";
const red = document.getElementById("red");
const black = document.getElementById("black");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
let color = 'Black';
red.addEventListener("click",change_red);
green.addEventListener("click",change_green);
blue.addEventListener("click",change_blue);
black.addEventListener("click",change_black);

//debut

const rect = canvas.getBoundingClientRect();
canvas.addEventListener('mousedown', e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});
console.log(x,y);

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 1;
  context.lineHeight = 1;
  context.moveTo(x1, y1); //deplace vers nvl coordonées
  context.lineTo(x2, y2); //connecte le dernier point du sous-chemin en cours aux coordonnées
 // context.arc(x1, y1, 5, 0, 2 * Math.PI); 
  context.stroke();
  context.closePath();
}
 
//fin

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

let pen = document.getElementById('pen');
pen.addEventListener("click",dessiner);

let erraser = document.getElementById('erraser');
erraser.addEventListener("click",effacer);

function dessiner()
{
	console.log("caca");
	context.fillStyle = color;
	context.fillRect(400, 400, 100, 100);
}
function effacer()
{
	console.log("caca");
	context.fillStyle = '#FFFFFF';
	context.fillRect(400, 400, 100, 100);
}
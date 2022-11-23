
console.log("caca");

const canvas = document.getElementById("canva");
const context = canvas.getContext("2d");
context.lineWidth = 10;
let isDrawing = false;
let x = 0;
let y = 0;
let taille = 20;



function changeRange(value)
{
    taille = value;
    
}
console.log(taille);


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
let erraser = document.getElementById('erraser');
erraser.addEventListener("click",effa);
let gomme = false;

function effa()
{
	gomme = true;
	console.log(gomme);
}

canvas.addEventListener('mousedown', e => { //des qu'on appuie
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => { //des qu'on bouge
  if (isDrawing === true)
   {
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
    //console.log(taille);
  }
});
console.log(x,y);

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();

  context.strokeStyle = "Red";
  context.fillStyle = color;
  context.lineWidth = 10;
  context.lineHeight = 10;
  context.moveTo(x1, y1); //deplace vers nvl coordonées
  context.lineTo(x2, y2); //connecte le dernier point du sous-chemin en cours aux coordonnées
 // context.arc(x1, y1, 5, 0, 2 * Math.PI); 
 
   if (gomme == true)
  {
  	context.clearRect(x1 - 50, y1 - 50, 100, 100);
  }
  else
  {
  	 context.fillRect(x1 - (taille/2), (y1 -(taille/2)), taille, taille);
  }
  context.closePath();
}
 /*
function effacer(x1, y1, x2, y2)
{
context.beginPath();
context.moveTo(x1, y1);
context.lineTo(x2, y2);
context.closePath(); // dessine la dernière ligne du triangle
context.stroke();

context.clearRect(400, 400, 100, 100);
}
*/
//fin

function change_red()
{
	color = '#FF0000';
	console.log("red");
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
pen.addEventListener("click",pen_true);

function pen_true()
{
	gomme = false;
}



function background()
{

	context.fillStyle = color;

	context.fillRect(400, 400, 200, 200);
}

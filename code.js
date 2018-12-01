var animate = /*window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||*/
function(callback) { window.setTimeout(callback, 1000/60) };
var canvas=document.createElement ("canvas");
var ctx;
ctx=canvas.getContext("2d");


var width=window.innerWidth;//600;
var height=window.innerHeight;
canvas.width=width;
canvas.height=height;

var imgData;
var vertex=new Array(); 
/*var A=new Point(Math.floor(Math.random()*width),Math.floor(Math.random()*height));//vertex
var B=new Point(Math.floor(Math.random()*width),Math.floor(Math.random()*height));//vertex
var C=new Point(Math.floor(Math.random()*width),Math.floor(Math.random()*height));//vertex
*/
var D=new Point(Math.floor(Math.random()*width),Math.floor(Math.random()*height));
init();
ctx.fillStyle=randomColor();
ctx.fillRect(0,0,width,height);
ctx.fillStyle=randomColor();
drawVertex();
var count=0;

var step = function(){
	count++;
	
	ctx.beginPath();
	ctx.arc(D.x, D.y, 2, 0, 2 * Math.PI);
	ctx.fill();
	nextPoint(D);
	if(count>5000){
		location.reload();
	}
	animate(step);
};

function init(){
	var num=3;//Math.floor(Math.random()*5)+3;
	var i;
	for(i=0;i<num;i++){
		vertex[i]=new Point(Math.floor(Math.random()*width),Math.floor(Math.random()*height));
		
	}
}

function drawVertex(){
	for(i=0;i<vertex.length;i++){
		ctx.beginPath();
		ctx.arc(vertex[i].x,vertex[i].y, 5, 0, 2 * Math.PI);
		ctx.fill();
		
	}
}

function randomColor(){
	var color;
	switch(Math.floor(Math.random()*7)){
		case 0:color="#000000";break;
		case 1:color="#ff0000";break;
		case 2:color="#00ff00";break;
		case 3:color="#0000ff";break;
		case 4:color="#ffff00";break;
		case 5:color="#ff00ff";break;
		case 6:color="#00ffff";break;
		default:color="#00ff00";break;
	}
	return color;
}

function nextPoint(D){
	var r=Math.floor(Math.random()*vertex.length);
	
	D.x=(D.x+vertex[r].x)/2;
	
	D.y=(D.y+vertex[r].y)/2;
	
}

function Point(x,y){
	this.x=x;
	this.y=y;
}

window.onload=function(){
document.body.appendChild(canvas);
animate(step);
};
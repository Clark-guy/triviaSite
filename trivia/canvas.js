
var gameWindow = document.getElementById("canvasGame");
var ctx = gameWindow.getContext("2d");
//ctx.moveTo(0, 0);
//ctx.lineTo(200, 100);
//ctx.stroke();


var playerPos = [0,0];
var size = 10;
var speed = 1;
var bg = new Image();
var yVel = 0;
var xVel = 0;
bg.src = 'images/jsTest.png';
bg.style.width = '50%';
bg.style.height = 'auto';


function randInt(max){
	return Math.floor(Math.random() * max);
}


var left = 0;
var right = 0;
var up = 0;
var down = 0;


window.addEventListener("keydown", function(event){
	var code = event.keyCode || event.which;
	if (code == '13'){
		ctx.moveTo(randInt(100), randInt(100));
		ctx.lineTo(200, 100);
		ctx.stroke();
	}
	else if(code == '37' || code == '65'){
		left = 1;
	}
	else if(code == '38' || code == '87'){
		up = 1;
	}
	else if(code == '39' || code == '68'){
		right = 1;
	}
	else if(code == '40' || code == '83'){
		down = 1;
	}
});


window.addEventListener("keyup", function(event){
	var code = event.keyCode || event.which;
	if(code == '37' || code == '65'){
		left = 0;
	}
	else if(code == '38' || code == '87'){
		up = 0;
	}
	else if(code == '39' || code == '68'){
		right = 0;
	}
	else if(code == '40' || code == '83'){
		down = 0;
	}
});


function isOnFloor(playerPos, platforms){
	if(playerPos[1] >= 150-size)
		return true;
	else
		return false;
}

function move(){
	if(left==1){
		playerPos[0]-=6;
	}
	else if(right==1){
		playerPos[0]+=6;
	}
	if(up==1 && isOnFloor(playerPos, 1)){
		yVel = -10;
	}
	else if(down==1){
		playerPos[1]+=speed;
	}
	playerPos[1]+=yVel;
	if (isOnFloor(playerPos, 1)){
		yVel = 0;
		playerPos[1] = 150-size;
	}
	else {
		yVel+=1;
	}
	
}

function spawnEnemy(){
	var newEnemy = {
		pos: [gameWindow.width, 140],
		speed: 1
	}
	return newEnemy;
}

var lastLongTick = 0;
var enemies = []
function update(pattern){
	move();
	ctx.fillStyle = pattern;
	ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);
	ctx.beginPath();
	ctx.rect(playerPos[0],playerPos[1], size, size);
	ctx.fillStyle="black";
	ctx.fill();
	ctx.font = "30px Arial";
	var ticks= new Date();
	if(ticks-lastLongTick>3000){
		enemies.push(spawnEnemy());
		lastLongTick = ticks;
	}
	if(ticks-lastLongTick>1000){
		for(let i=0; i<enemies.length; i++){
			enemies[i].pos[0]-=enemies[i].speed;
		}
	}
	//make enemies walk towards me
	for(let i=0; i<enemies.length; i++){
		ctx.rect(enemies[i].pos[0],enemies[i].pos[1], size, size);
		ctx.fillStyle="white";
		ctx.fill();
		if (enemies[i].pos[0] <=0)
			enemies.pop();
	}
}


$(document).ready(function() {

	//
	//TODO: change parameter of update to list of sprites when i have more sprites
	var pattern = ctx.createPattern(bg, 'repeat');
	const interval = setInterval(function() {update(pattern);}, 20);	
});



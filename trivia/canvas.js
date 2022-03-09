
var gameWindow = document.getElementById("canvasGame");
var ctx = gameWindow.getContext("2d");
var playerPos = [0,0];
var size = 10;
var speed = .25;
var bg = new Image();
var yVel = 0;
var xVel = 0;
bg.src = 'images/shape.png';
bg.style.width = '50%';
bg.style.height = 'auto';


function randInt(max){
	return Math.floor(Math.random() * max);
}


var left = 0;
var right = 0;
var up = 0;
var down = 0;


//event listeners for keydown/keyup
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


// this function could use some cleaning up. maybe should count base floor as another platform to remove conditional
function isOnFloor(playerPos, platforms){
	//check if player is on bottom floor
	if(playerPos[1] >= 150-size)
		return true;
	else{
		//logic to test if standing on floating platform
		for(let i=0; i<platforms.length; ++i){
			if(playerPos[0] > platforms[i].pos[0]-size && playerPos[0] < platforms[i].pos[0]+platforms[i].width)
				if(playerPos[1] < platforms[i].pos[1] && playerPos[1] > platforms[i].pos[1]-size){
					if(up!=1)
						playerPos[1] = platforms[i].pos[1]-size;
					playerPos[0]+=2;
					return true;
				}
		}
	}
	return false;
}

function move(platforms){
	if(left==1){
		playerPos[0]-=3;
	}
	else if(right==1){
		playerPos[0]+=3;
	}
	if(up==1 && isOnFloor(playerPos, platforms)){
		yVel = -10;
	}
	else if(down==1){
		playerPos[1]+=speed;
	}
	playerPos[1]+=yVel;
	if (isOnFloor(playerPos, platforms) && yVel >0){
		yVel = 0;
		//snap player to base floor 
		if(playerPos[1] > 150-size)
			playerPos[1] = 150-size;
		
	}
	else {
		if (yVel < 8)
			yVel+=1;
	}
	
}


function spawnPlatform(){
	var newPlatform = {
		//pos: [gameWindow.width, randInt(100)+40],
		pos: [-100, randInt(100)+40],
		width: randInt(40)+40
	}
	return newPlatform;
}

function spawnEnemy(){
	var newEnemy = {
		pos: [gameWindow.width, 140],
		speed: randInt(3)+1
	}
	return newEnemy;
}

var lastLongTick = 0;
var enemies = []
var platforms = []
var gameOver =0;
var score = 0;
ctx.font = "20px Arial";

//main game loop
function update(pattern){
	//need to clean this up a little bit
	move(platforms);
	ctx.fillStyle = pattern;
	ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);
	ctx.beginPath();
	ctx.rect(playerPos[0],playerPos[1], size, size);
	if (gameOver == 0){
		ctx.fill();
		ctx.fillStyle="black";
		ctx.strokeText("score: " +score, 30, 30);
		ctx.closePath();
	}
	else{
		ctx.font = "30px Arial";
		for(let i=150;i>=-225;i-=75){
			ctx.strokeText("final score: " +score, playerPos[1]-50, playerPos[0]+i);
		}
	}
	var ticks= Date.now();

	//spawn enemies, platforms
	if(gameOver==0 && ticks-lastLongTick>2500){
		if(enemies.length < 5){
			enemies.push(spawnEnemy());
			platforms.push(spawnPlatform());
		}
		score+=1;
		lastLongTick = ticks;
	}

	//unfinished timer function
	if(ticks-lastLongTick>1000){
		for(let i=0; i<enemies.length; i++){
		}
	}

	//make enemies walk left
	for(let i=0; i<enemies.length; i++){
		enemies[i].pos[0]-=enemies[i].speed;
		if ((enemies[i].pos[0]<=playerPos[0]+10 && enemies[i].pos[0] >=playerPos[0]-10 ) && enemies[i].pos[1]==playerPos[1])
			gameOver=1;
		ctx.rect(enemies[i].pos[0],enemies[i].pos[1], size, size);
		ctx.fillStyle="black";
		if (gameOver == 0){
			ctx.fill();
			ctx.closePath();
		}
		if (enemies[i].pos[0] <=0)
			enemies[i].pos = [300, enemies[i].pos[1]];
	}

	//make platforms move across screen
	for(let i=0; i<platforms.length; i++){
		platforms[i].pos[0]+=1;
		ctx.rect(platforms[i].pos[0],platforms[i].pos[1], platforms[i].width, size/1.5);
		ctx.fillStyle="black";
		if (gameOver == 0){
			ctx.fill();
			ctx.closePath();
		}
		//snap platform back to beginning if at end
		if (platforms[i].pos[0] >=gameWindow.width){
			platforms[i].pos = [-100, randInt(100)+40];
			platforms[i].width = randInt(40)+40;
		}
	}
}


$(document).ready(function() {

	//TODO: change parameter of update to list of sprites when i have more sprites
	//TODO: make sure setInterval is closing upon reload - maybe why cache is causing issues on some browsers? temp fix auto clear cache
	//TODO: need to figure out how to draw different colors on canvas
});


window.onload = function(){
	var pattern = ctx.createPattern(bg, 'repeat');
	const interval = setInterval(function() {update(pattern);}, 20);	//for debug, change 20 to 200	
}

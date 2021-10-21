
var gameWindow = document.getElementById("canvasGame");
var ctx = gameWindow.getContext("2d");
//ctx.moveTo(0, 0);
//ctx.lineTo(200, 100);
//ctx.stroke();


var playerPos = [0,0];
var size = 10;
var speed = 10;
var bg = new Image();
bg.src = 'images/jsTest.png';
bg.style.width = '50%';
bg.style.height = 'auto';


function randInt(max){
	return Math.floor(Math.random() * max);
}





window.addEventListener("keydown", function(event){
	var code = event.keyCode || event.which;
	if (code == '13'){
		ctx.moveTo(randInt(100), randInt(100));
		ctx.lineTo(200, 100);
		ctx.stroke();
	}
	else if(code == '37' || code == '65'){
		playerPos[0]-=speed;
	}
	else if(code == '38' || code == '87'){
		playerPos[1]-=speed;
	}
	else if(code == '39' || code == '68'){
		playerPos[0]+=speed;
	}
	else if(code == '40' || code == '83'){
		playerPos[1]+=speed;
	}
});

bg.onload = function(){
	var pattern = ctx.createPattern(bg, 'repeat');
	ctx.fillStyle = pattern;
	ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);
}

function update(pattern){
	ctx.fillStyle = pattern;
	ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);
	ctx.beginPath();
	ctx.rect(playerPos[0],playerPos[1], size, size);
	ctx.fillStyle="black";
	ctx.fill();
	ctx.font = "30px Arial";
}


$(document).ready(function() {

	var pattern = ctx.createPattern(bg, 'repeat');
	const interval = setInterval(function() {update(pattern);}, 10);	
});




var timer = document.getElementById("timer");
var val = 60*108+1;
var underworld = 0;
var beep = new Audio('sounds/beep.wav');
var alarm = new Audio('sounds/alarm.wav');
var alarm1 = new Audio('sounds/alarmFast.wav');


document.getElementById("user_input").addEventListener("keyup", function(event){
	var code = event.keyCode || event.which;
	if (code == '13' && underworld == 0){
		var beep1 = new Audio('sounds/beep1.wav');
		beep1.play();
		enter(timer);
	}
	/*else if(code == '37'){	//for debugging
		val = val-20;
	}*/
});

function formatTime(time){
	var hrs = Math.trunc(time/3600)
	var mins = Math.trunc((time/60)%60)
	var secs = (time%60)/*dude secs hahah*/
	time = "" + hrs.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false}) + ":" + 
		mins.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false}) + ":" + 
		secs.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false});
	return time;
}

function alarmFast(id){
	alarm1.play();
	if(val<=0){
		clearInterval(id);
	}
}

$(document).ready(function() {
	if(localStorage.getItem("storedVal") !== null){
		val = localStorage.getItem("storedVal");
	}
	var fastFlag = 0;
	var fastId = 0;
	var now = new Date().getTime();
	var later = now + 100;
	var time = document.getElementById("timer");
	document.getElementById("user_input").focus();

	function testing(id){
		if(val>0){
			if(val<10*60 && val > 2*60){
				beep.play();
			}
			else if(val<2*60 && val > 20){
				alarm.play();
			}
			if(val<=21 && fastFlag == 0){
				fastId = setInterval(function(){alarmFast()}, 1450);
				fastFlag = 1;
			}
			val = val-1;
			localStorage.setItem("storedVal", val);
		}
		else{
			clearInterval(fastId);
			clearInterval(id);
			underworld = 1;
		}
		time.innerHTML = formatTime(val);
	}

	var id = setInterval(function(){testing(id)}, 1000);

});


function enter(time){
	box = document.getElementById("user_input");
	if(box.value == "4 8 15 16 23 42"){
		val = 60*108+1;
		//time.innerHTML = val;
		box.value = "";
	}
	else{
		val = val - 180;
		timer.innerHTML = formatTime(val);
		box.value = "";
	}
}

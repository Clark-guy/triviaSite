
var val = 100;

$(document).ready(function() {
	var now = new Date().getTime();
	var later = now + 100;
	var time = document.getElementById("timer");
	function testing(){

		time.innerHTML = val;
		val = val-1;
	}

	setInterval(function(){testing()}, 1000);

});




function enter(){
	box = document.getElementById("user_input");
	if(box.value == "4 8 15 16 23 42"){
		val = 100;
	}
	else{
		val = val - 10;
	}
}
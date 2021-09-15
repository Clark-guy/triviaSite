

$(document).ready(function() {
	var now = new Date().getTime();
	var later = now + 100;
	var time = document.getElementById("timer");
	var val = 100;
	function testing(){

		time.innerHTML = val;
		val = val-1;
	}

	setInterval(function(){testing()}, 1000);
});




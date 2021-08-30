//heres some cod
//
//
$(document).ready(function() {
	
});


var x = 0;
var y = 0;
function clicky(){
	x+=1;
	y+=1;
	if(x>5){
		alert("hello");
		alert("that's enough, thank you.");
		x = 0;
	}
	if(y>20) {
		for(let i=0;i<10;i++){
			alert("no more");
		}
	}
}

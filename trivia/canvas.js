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
		alert("hello, you've found the secret message");
		alert("The secret message is: have a good day!");
		x = 0;
	}
	if(y>20) {
		alert("no more secret messages today");
		y = 0;
		x = -100;
	}
}


var x = 0;
function clicky(){
	x+=1;
	if(x%5==0){
		alert("Hello, you've found the secret message!");
		alert("The secret message is: party forever!");
	}
	else if(x==21){
		alert("no more secrets today");
		x = 1.1;
	}
}

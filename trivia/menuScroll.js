

var prevScrollPos = window.pageYOffset;
var prevScrollDir = 0; //0 means up
var scrollDownPoint = 0;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) { //if scrolling up
		document.getElementById("mobileNav").style.top = "0";
		prevScrollDir = 0;
	}
	else {	//if scrolling down
		if (prevScrollDir == 0){
			prevScrollDir = 1;
			scrollDownPoint = window.pageYOffset;
		}
		if (currentScrollPos > scrollDownPoint+200){
			document.getElementById("mobileNav").style.top = "-100px";
		}
	}
	prevScrollPos = currentScrollPos;
}

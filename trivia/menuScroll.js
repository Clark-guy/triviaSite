

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
		document.getElementById("mobileNav").style.top = "0";
	}
	else {
		document.getElementById("mobileNav").style.top = "-100px";
	}
	prevScrollPos = currentScrollPos;
}

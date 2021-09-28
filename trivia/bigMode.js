


function goBigOrGoHomeIMeanSmall(){
	var style = document.getElementsByTagName('link')[0];
	if (style.getAttribute('href')=='style.css'){
		style.setAttribute('href', 'bigStyle.css');
	}
	else{
		style.setAttribute('href', 'style.css');
	}

}

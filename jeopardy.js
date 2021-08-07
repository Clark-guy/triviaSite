

$(document).ready(function() {
	$.ajax({
		url: "JEOPARDY_CSV.txt",
		dataType: "text",
	}).done(function(data) {
		ajaxLoaded(data);
	});
});



function ajaxLoaded(data){
	var quesText = document.getElementById("quesText");
	var subjText = document.getElementById("subjText");
	lines = data.split("\n");
	lineNum = Math.floor(Math.random() * lines.length);
	//quesText.innerHTML = data.slice(0,1000);//"newText";
	subjText.innerHTML = lines[lineNum].split("	")[3];//"newText";
	quesText.innerHTML = lines[lineNum].split("	")[5];//"newText";
}

function newPrompt() {
	lineNum = Math.floor(Math.random() * lines.length);
	subjText.innerHTML = lines[lineNum].split("	")[3];//"newText";
	quesText.innerHTML = lines[lineNum].split("	")[5];//"newText";
}


function result(){
	alert("hello!");
}

function answer(){
	alert(lines[lineNum].split("	")[6]);
}

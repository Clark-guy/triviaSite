

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
	//TODO duplicated code - just call newPrompt instead of doing all this?
	lineNum = Math.floor(Math.random() * lines.length);
	//quesText.innerHTML = data.slice(0,1000);//"newText";
	subjText.innerHTML = lines[lineNum].split("	")[3];//"newText";
	quesText.innerHTML = lines[lineNum].split("	")[5];//"newText";
}



function newPrompt() {
	//set wanted question value given radio buttons
	var quesVal = "$" + document.querySelector('input[name="questionValue"]:checked').value + " ";
	questionParts = lines[lineNum].split("	");
	lineNum = Math.floor(Math.random() * lines.length);
	//get random new question, if quesVal not equl to found one, try again
	while(questionParts[4].replaceAll("\"","") != quesVal){
		questionParts = lines[lineNum].split("	");
		lineNum = Math.floor(Math.random() * lines.length);
	}
	subjText.innerHTML = lines[lineNum].split("	")[3];//"newText";
	quesText.innerHTML = lines[lineNum].split("	")[5];//"newText";
}


function sayHello(){
	alert("Hello");
}

function answer(){
	alert(lines[lineNum].split("	")[6]);
}

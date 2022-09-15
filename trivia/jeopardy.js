

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
	subjText.innerHTML = "SUBJECT: " + lines[lineNum].split("	")[3];//"newText";
	quesText.innerHTML = "Q: " + lines[lineNum].split("	")[5];//"newText";
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
	subjText.innerHTML = "SUBJECT: " + lines[lineNum].split("	")[3];//"newText";
	quesText.innerHTML = "Q: " + lines[lineNum].split("	")[5];//"newText";
	
	var answerButton= document.getElementById("answerButton");
	var quesButton= document.getElementById("quesButton");
	answerButton.style.display = "inline-block"; 
	quesButton.style.display = "none";
}


function sayHello(){
	alert("Hello");
}

function seeAnswer(){
	var quesText = document.getElementById("quesText");
	var answerButton= document.getElementById("answerButton");
	var quesButton= document.getElementById("quesButton");
	quesText.innerHTML = (lines[lineNum].split("	")[6]);
	answerButton.style.display = "none"; 
	quesButton.style.display = "inline-block";
}

function seeQuestion(){
	var quesText = document.getElementById("quesText");
	var answerButton= document.getElementById("answerButton");
	var quesButton= document.getElementById("quesButton");
	quesText.innerHTML = "Q: " + lines[lineNum].split("	")[5];//"newText";
	answerButton.style.display = "inline-block"; 
	quesButton.style.display = "none";
}

<?php
include "header.php";
?>

<script src = "jeopardy.js"></script>
	<article>
		<h2>trivia</h2>
		<p id="subjText"></p>
		<p id="quesText">loading question...</p>
		<script>
			//need to change this element upon button press
			let quest = document.getElementById("quesText");
		</script>
		<button onclick="sayHello()">say hello</button>
		<button id="answerButton" onclick="seeAnswer()">Answer</button>
		<button id="quesButton" style="display: none" onclick="seeQuestion()">Original Question</button>
		<button onclick="newPrompt()">New Prompt</button>
		<fieldset>
			<legend>Pick a question value</legend>
			<input type="radio" id="200pt" name="questionValue" value="200" checked="checked">
			<label for="200pt">$200</label><br/>

			<input type="radio" id="400pt" name="questionValue" value="400">
			<label for="400pt">$400</label><br/>

			<input type="radio" id="600pt" name="questionValue" value="600">
			<label for="600pt">$600</label><br/>

			<input type="radio" id="800pt" name="questionValue" value="800">
			<label for="800pt">$800</label><br/>

			<input type="radio" id="1000pt" name="questionValue" value="1,000">
			<label for="1,000pt">$1,000</label><br/>
		</fieldset>
	</article>

</body>

</html>

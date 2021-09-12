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
		<button onclick="result()">say hello</button>
		<button onclick="answer()">Answer</button>
		<button onclick="newPrompt()">New Prompt</button>
	</article>

</body>

</html>


<!doctype html>

<html lang="en">
<head>
	<link rel="stylesheet" href="style.css">
	<script src="jquery-3.6.0.min.js"></script>
	<script src="jeopardy.js"></script>
</head>

<body id=bg>
	<h1>My Website</h1>
	<nav>
		<a href="index.php">Index</a>
		<a href="jeopardy.php">Trivia</a>
		<a href="style.css">Stylesheet</a>
	</nav>
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

<!doctype html>

<html lang="en">
<head>
	<meta charset = "utf-8">
	<!--meta name="viewport" content="width=device-width, initial-scale=1.0"-->
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="mobile_stylesheet.css" type="text/css" media="screen and (max-device-width:100px)">
	<script data-ad-client="ca-pub-4179261541988462" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script src="jquery-3.6.0.min.js"></script>
	<script src="bigMode.js"></script>
	<script src="menuScroll.js"></script>
</head>

<?php
$phpSelf = htmlentities($_SERVER['PHP_SELF'], ENT_QUOTES, "UTF-8");
$path_parts = pathinfo($phpSelf);
?>

	<body id=<?php 
		if ($path_parts['filename'] == "countdown"){
			print "countBody";
		}
		else{
			print "bg";
		}?>>
	<span id="mobileNav" onclick="document.getElementById('mobileNavMenu').style.display='block'">[ o o o ]</span>
	<nav id=mobileNavMenu>
		<span id="mobileNavX"  onclick="document.getElementById('mobileNavMenu').style.display='none'">[ . . . ]</span>
		<a href="index.php">Home</a>
		<a href="jeopardy.php">Trivia</a>
		<a href="comic.php">Web Comic</a>
		<a href="countdown.php">Don't click this</a>
		<a href="../index.php">Back to Yikes!</a>
	</nav>
	<h1><a href="index.php">Yikes.pizza trivia</a></h1>
	<nav>
		<a href="index.php">Home</a>
		<a href="jeopardy.php">Trivia</a>
		<a href="comic.php">Web Comic</a>
		<a href="countdown.php">Don't click this</a>
		<a href="../index.php">Back to Yikes!</a>
	</nav>
	
	<button id="bigButt" onclick="goBigOrGoHomeIMeanSmall()">toggle TV/Desktop view</button>

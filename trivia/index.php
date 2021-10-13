<?php
include "header.php";
?>
	<article>
		<h2>Welcome</h2>
		<figure class="jamesPicWrap">
			<img src="images/DSC_0991.jpeg" class=jamesPic> </img>
		</figure>
		<p id="welcomeHello">Hello, and welcome!</p>
		<p>My name is James Putnam and this is my cool website. I mostly use this to work on goofy projects that I do in my free time, but I'm happy to share my nonsense with whoever would like to see it so feel free to poke around. The rest of this splash page defines what each of the tabs on the navigation menu will lead you to so read on if you're interested. You can also find out what happens if you click this button but I promise it's not very interesting</p>
		<button onclick="clicky()" class="centerItem">CLICK ME</button>
		<h2>Site things</h2>
		<h3>Trivia</h3>
		<p>This is a little trivia game I made for fun. Built on a CSV of jeopardy questions that I sourced online, you can find info on the dataset in the README on <a href="http://www.github.com/Clark-guy/triviaSite-bandSite">my github</a>
		<p>Fun fact: the trivia page is why this section of the site is at /trivia. originally that was all that I intended to put here, but then I just started adding more things. I could just change the name of the folder, but by now I've called it the trivia section enough times that it's just easier to leave as is.</p>
		<h3>Web Comic</h3>
		<p>I started making a web comic because I wanted to figure out how I would code it, using pagination and automatic image loading with php. It wasn't particularly difficult, but it was an interesting thing to try and since then I've been making more of these nonsense panelse that involve a duck and an ant-like creature for fun. I've been following along with inktober, which is an event every year during the month of october where artists draw something new for each day of the month, following a prompt either given by whoever does inktober officially, or self imposed. I haven't done a comic for every day of the month so far, (it is the 9th at the time of writing this) but I've done several and I think it's pretty fun so I'll likely continue.</p>
		<h3>Don't click this</h3>
		<p>Don't click that link</p>
		<h3>Back to Yikes!</h3>
		<p>This just takes you back to the main site, which is the official band site for the hit musical sensation "Yikes!". Feel free to check out our cool music and have a good day!</p>
		<hr>
		<div class="todo">
		<p>James' Site Todo List: </p>
		<ul>
			<li>make a javascript clock</li>
			<li>make a javascript game</li>
			<li>embed lexical analyzer</li>
			<li>add picture of me to website</li>
			<li>add blog area or webcomic area</li>
			<li>learn to use html canvas</li>
			<li>speech synthesis, encoding(morse code or caesar shift followed by A1Z26), at 8:05 on music portion of site</li>
		</ul>
		</div>
	<canvas id=mainCanvas></canvas>
	</article>

</body>

</html>

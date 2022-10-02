<?php
include "header.php";
?>
<article>
<audio>
<source="">
</audio>
<div id=table>
	<div>
		<code id=infoText>This is where messages will appear</code>
		<div id="tableGap"></div>
		<div id=dealerHand>
			<div class=card>
				<div id=topFace>7</div>
				<div id=midFace>J</div>
				<div id=botFace>7</div>
			</div>
			<div class=cardBack>
			</div>
		</div>
	</div>
	<div id="tableGap"></div>
	<div id=hand>
		<div class=card>
			<div id=topFace>7</div>
			<div id=midFace>J</div>
			<div id=botFace>7</div>
		</div>
		<div class=card>
			<div id=topFace>5</div>
			<div id=midFace>J</div>
			<div id=botFace>5</div>
		</div>
		<div class=cardBack></div>
	</div>
	<div id="tableGap"></div>
	<div id=options>
		<button id=warButt class=pokerButt onclick="war([], [])">WAR</button>
		<!--button class=pokerButt onclick="autoWar()">crash my browser and maybe computer</button-->
	</div>
	<div id=pokerOptions>
		<button class=pokerButt>CALL</button>
		<button class=pokerButt>FOLD</button>
		<button class=pokerButt>RAISE</button>
	</div>
</div>
</article>
<script src=canvas.js></script>
</body>
</html>
<script src="war.js"></script>

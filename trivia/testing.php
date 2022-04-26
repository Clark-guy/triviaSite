<?php
include "header.php";
?>

<button onclick="document.getElementById('modalPop').style.display='block'">Login</button>


<div id="modalPop" class="modal">
	<form class="modal-content" action="welcome.php" method="POST">
		<span onclick="document.getElementById('modalPop').style.display='none'" class="close" title="close Modal">&times;</span>
		<h2 class="centerBlock">Sign in</h2>
		<p>At the time of writing this, there is little to no security on this website. Do NOT enter any sensitive information here. Actually, if you did, it doesn't send the information anywhere, so you'd probably be fine, but just for the sake of safety let's not anyway.</p>
		<br>
		<label for="uname"><b>Username</b></label>
		<input type="text" name="uname" required>
		<label for="pword"><b>Password</b></label>
		<input type="password" name="pword" required>

		<button type="submit">Login</button>
		<label>
			<input type="checkbox" checked="checked" name="remember"> Remember me
		</label>
		
		<div class="container" style="background-color:#FFFFFF">
			<button type="button" class="cancelbtn" onclick="document.getElementById('modalPop').style.display = 'none'">Cancel</button>
		</div>

	</form>
</div>
<article>
<canvas id=canvasGame>This should be a good game</canvas>
<p>if game won't load, try reloading the page!</p>
</article>
<script src=canvas.js></script>
</body>
</html>

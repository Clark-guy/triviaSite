<?php
include "header.php";
?>

<button onclick="document.getElementById('modalPop').style.display='block'">Login</button>


<div id="modalPop" class="modal">
	<form class="modal-content" action="store.php" method="POST">
		<span onclick="document.getElementById('modalPop').style.display='none'" class="close" title="close Modal">&times;</span>
		<label for="uname">Username</label>
		<input type="text" name="uname" required>

		<button type="submit">Login</button>
		<label>
			<input type="checkbox" checked="checked" name="remember"> Remember me
		</label>
		
		<div class="container" style="background-color:#f1f1f1">
			<button type="button" class="cancelbtn" onclick="document.getElementById('modalPop').style.display = 'none'">Cancel</button>
		</div>

	</form>
</div>
</body>

</html>

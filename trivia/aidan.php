<?php
include "header.php";
?>
	<article>
		<audio controls autoplay loop style="position: fixed; z-index: 1;">
			<source src="robotjam.wav" type="audio/wav">
		</audio>
		<h2>AIDAN PAGE</h2>
		<?php 
		$dir = new DirectoryIterator(dirname("images/aidanPics/aidanPics"));
		foreach ($dir as $fileinfo) {
			$x = rand(-10, 100);
			$y = rand(0, 30);
			if (!$fileinfo->isDot()) {
				//var_dump($fileinfo->getFilename());
				echo "<div style=\"top:$y" . "em; right:$x" . "em;\" class=aidiv><img src=images/aidanPics/" . $fileinfo->getFilename() . "></img></div>";
			}
		}
		for ($i=0; $i <= 10; $i++){
			$x = rand(-10, 100);
			$y = rand(0, 30);
			$z = rand(.2, 10);
			echo "<div style=
				\"top:$y" . "em; right:$x" . "em;
				animation-duration: $z" . "s;
				animation-name: aidanwords;	
				animation-iteration-count: infinite;
				\" class=aidivword>

				<p>AIDAN</p></div>";
		}
		?>
	</article>

<script src=clicky.js></script>
</body>

</html>

<?php
	$post = file_get_contents('php://input');
	$post = substr($post, 2, -2);
	echo $post;
	$parsed = explode("},{", $post);
	
	$hiscores = fopen("highScores.csv", "w");
	for($i=0;$i<count($parsed)-1;$i++){
		$parts = explode('"', $parsed[$i]);
		$outstring = $parts[3] . "," . $parts[7] . "\n";
		fwrite($hiscores, $outstring);
	}
	fclose($hiscores);
	#echo $parsed[0];
?>

<?php
include "header.php"
?>

<?php
$most_recent_comic = 3;

if (!isset ($_GET['page']) ) {
	$page = 1;
}
else {
	$page = $_GET['page'];
}
$comic = $page . ".png";

// ugly code that just says u can or cant keep going depending on what page ur on
if ($page > 1){
	$linkNext = "./blog.php?page=" . ($page-1);
}
else{
	$linkNext = "./blog.php?page=" . ($page);
}

if ($page < $most_recent_comic){
	$linkPrev = "./blog.php?page=" . ($page+1);
}
else{
	$linkPrev = "./blog.php?page=" . ($page);
}

?>
	<article>
		<h2>Cool dudes having a good time</h2>
		<img id = comicImg src = "comics/<?php echo $comic;?>">
	<canvas id=mainCanvas></canvas>
	<ul class="blogNav">
		<li> <a href="./blog.php?page=1"> << </a> </li>
		<li> <a href="<?=$linkNext?>">prev</a> </li>
		<li> <a href="<?=$linkPrev?>">next</a> </li>
		<li> <a href="./blog.php?page=<?=$most_recent_comic?>"> >> </a> </li>
	</ul>
	</article>

</body>

</html>

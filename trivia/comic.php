<?php
include "header.php"
?>

<?php

$comicDir = getcwd()."/comics/";
$filecount = 0;
$files2 = glob($comicDir . "*");

if($files2){
	$filecount = count($files2);
}

//this variable is just so i dont have to think as hard
$most_recent_comic = $filecount;

// sets default page, otherwise go to current page
$page = (!isset ($_GET['page']) ) ? $most_recent_comic : $_GET['page'];

// fixes certain pages to allow gifs
$comic = ($page == 9) ? $page . '.gif' : $page . '.png';

// ugly code that just says u can or cant keep going depending on what page ur on
// fix with ternary operators like above so i dont go crazy later ToDo
if ($page > 1){
	$linkNext = "./comic.php?page=" . ($page-1);
}
else{
	$linkNext = "./comic.php?page=" . ($page);
}

if ($page < $most_recent_comic){
	$linkPrev = "./comic.php?page=" . ($page+1);
}
else{
	$linkPrev = "./comic.php?page=" . ($page);
}

?>
	<article>
		<h2>Cool dudes having a good time</h2>
		<img id = comicImg src = "comics/<?php echo $comic;?>">
	<canvas id=mainCanvas></canvas>
	<ul class="blogNav">
		<li> <a href="./comic.php?page=1"> <<</a> </li>
		<li> <a href="<?=$linkNext?>">prev</a> </li>
		<li> <a href="<?=$linkPrev?>">next</a> </li>
		<li> <a href="./comic.php?page=<?=$most_recent_comic?>"> >> </a> </li>
	</ul>
	</article>

</body>

</html>

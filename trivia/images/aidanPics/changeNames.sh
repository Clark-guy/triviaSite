#make sure to only call this script once- it may overwrite values if they are already correct

declare -i fname=0;
for f in *;
do
fending=${f: -4};
	if [ "$fending" = ".png" ];
	then mv "$f" "$fname.png" && fname=$((fname + 1));
	fi 
	if [ "$fending" = ".jpg" ];
	then mv $f "$fname.jpg" && fname=$((fname + 1));
	fi 
	if [ "$fending" = "jpeg" ];
	then mv $f "$fname.jpeg" && fname=$((fname + 1));
	fi 
	#fname=$((fname + 1));
done

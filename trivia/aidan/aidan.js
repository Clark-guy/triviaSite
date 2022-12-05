
function test(){
	return 0;
}

function showBackground(ctx, currentRoom){
	var img = new Image();
	img.src = `images/${currentRoom}.jpg`;
	img.onload = function(){
		ctx.drawImage(img, 0, 0, ctx.canvas.width,ctx.canvas.height);
	}
}

function showBabe(ctx, loc){
	var img = new Image();
	img.src = "images/person1.png";
	img.onload = function(){
		ctx.drawImage(img, loc[0], loc[1], img.width*0.8, img.height*0.8);
	}
}

function showButtons(ctx, color, options){
	//for all options, display on right side of screen
	//ctx.lineWidth = "4";
	//ctx.strokeStyle= "black";
	//ctx.fillStyle = "black";
	//ctx.globalAlpha = 1;
	ctx.font = "24px monospace";
	//ctx.beginPath();
	for(var opt in options){
		if(opt != selected%options.length){
			ctx.globalAlpha = 0.1;
			ctx.fillStyle = "grey";
			ctx.fillRect(110+opt*240,ctx.canvas.height-100, 220, 80);
			ctx.stroke();
			ctx.globalAlpha = 1;
			ctx.fillText(options[opt], 120+opt*240, ctx.canvas.height-60);
		}
		else{
			ctx.globalAlpha = 1;
			ctx.rect(110+opt*240,ctx.canvas.height-100, 220, 80);
			ctx.stroke();
			ctx.fillStyle = "black";
			ctx.fillText(options[opt], 120+opt*240, ctx.canvas.height-60);
		}
		ctx.globalAlpha = 1;
	}
}


function drawText(ctx,color,text,talker){
	var grd = ctx.createLinearGradient(-50, 50,300, -200);
	grd.addColorStop(1, color);
	grd.addColorStop(0, "white");

	//border
	ctx.beginPath();
	ctx.lineWidth = "4";
	ctx.strokeStyle= "black";
	ctx.rect(100,ctx.canvas.height-150, ctx.canvas.width-150, 160);
	if(talker.name && talker.name != ""){
		ctx.rect(240+talker.standing[0],ctx.canvas.height-190, 240, 40);
	}
	ctx.stroke();

	//box
	ctx.globalAlpha = 0.7;
	ctx.fillStyle = grd;
	ctx.fillRect(100,ctx.canvas.height-150, ctx.canvas.width-150, 160);
	if(talker.name && talker.name != ""){
		ctx.fillRect(240+talker.standing[0],ctx.canvas.height-190, 240, 40);
	}
	
	//text
	ctx.fillStyle = "black";
	ctx.font = "24px monospace";
	//split line by spaces
	var textArr = text.split(" ").reverse();
	var lineArr = [""];
	var currLine = 0;
	//add each item to line array
	while (textArr[0]){
		while(lineArr[currLine].length <=40 && textArr[0]){
			lineArr[currLine] += textArr.pop() + " ";
		}
		currLine += 1;
		lineArr.push("");
	}
	//ctx.fillText(text, 120, ctx.canvas.height-110)
	for(var line=0;line<lineArr.length;line++){
		ctx.fillText(lineArr[line], 120, ctx.canvas.height-110+line*25);
	}
	if(talker.name && talker.name != ""){
		ctx.fillText(talker.name, 240+talker.standing[0], ctx.canvas.height-160);
	}
	ctx.globalAlpha = 1;


}

var bgcanvas = document.getElementById("bgCanvas");
var charcanvas = document.getElementById("charCanvas");
var guiCanvas = document.getElementById("guiCanvas");
var windowSize = [1065, 649]
var npcLeft = [-150, windowSize[1]-580]
var npcCenter = [200, windowSize[1]-580]
var npcRight= [550, windowSize[1]-580]

//NPC code
var npcBase = new Image();
npcBase.src = "images/person1.png";
var npcCheer = new Image();
npcCheer.src = "images/person3.png";
var npcMad = new Image();
npcMad.src = "images/person4.png";
var npcStates = [];
npcStates.push(npcBase);
npcStates.push(npcCheer);
npcStates.push(npcMad);

var kemper= new Image();
var kemper1= new Image();
var kemperStates = [];
kemper.src = "images/kemper/person.png";
kemperStates.push(kemper);
kemper1.src = "images/kemper/person1.png";
kemperStates.push(kemper1);

var characters = {};
characters.babe = {
	name: "Anime Babe",
	states: npcStates,
	currentState: 0,
	standing: npcLeft
}
characters.kemper = {
	name: "Kemper",
	states: kemperStates,
	currentState: 0,
	standing: npcRight
}
characters.player = {
	name: "Aidan",
	money: 250,
	currentState: 0,
	standing:npcCenter
}

var presentCharacters = [];
var currentRoom = "bedroom";

//CONVERSATION CODE

//scene makeup:
//["type", [relevant, characters], "text", background(optional)]
//["a", [char1], "you see a babe approach", "bedroom"]
//types: a (arrival) d (departure) c (conversation) sc (scene change)
//
//or change conversation makeup- ["text", expression, relevantCharacter, [arriving, chars], [departing, chars], background
//
//this is not really working, because we will need to change multiple expressions at once.
//	e.g., one character stops talking, while another starts.
//instead, maybe have an array of relevant characters, and a matching array of expressions?
//there must be a more organized way to approach this. maybe an object would be best?
// maybe make a 
// 
//
// new thoughts
// have arrays of different length- check length and act accordingly
// length of 6 is standard as described above
//
// length of 4 omits arriving and departing characters
//
// length of 1 means run a specific function (defined before conversation, to do special
// shit like updating a name or whatever)
//
// length of 2 means a choice [prompt, [options]]
//
var scene = [
	[]
]

var conversation = [
	[`You wake up in Lowell, Massachusetts. your name is ${characters.player.name} and it's time to start getting ready for work! (space to continue)`,
		[0],[""], [], [], "bedroom"],
	["\"I wonder if there are any anime babes around here\"",
		[0],[characters.player], [], [], "bedroom"],
	["As you wonder to yourself, an anime babe approaches you",
		[0],[""], [characters.babe], [], "bedroom"],
	["\"hello, I am an anime babe in aidans room\"",
		[0],[characters.babe], [], [], "bedroom"],
	["\"I want to dance around!\"",
		[1],[characters.babe], [], [], "bedroom"],
	["\"give me all your damn money or so help me god I'll kill us both\"",
		[2],[characters.babe], [], [], "bedroom"],
	["\"okay I'm sorry I said that\"",
		[1],[characters.babe], [], [], "bedroom"],
	["...",
		[0],[characters.babe], [], [], "bedroom"],
	["\"alright seriously give me all your money\"",
		[2],[characters.babe], [], [], "bedroom"],
	["maybe I should just give her the money",
		[0],[characters.player], [],[],"bedroom"],
	["\"okay, okay! here's your money!\"",
		[0], [characters.player], [], [], "bedroom"],
	["You hand her $45 (-45 SchmidtBux)",
		[1],[""], [], [], "bedroom"],
	["\"Thank you very much!\"",
		[0],[characters.babe], [], [], "bedroom"],
	["She walks out the window and flies away",
		[],[""], [], [characters.babe], "bedroom"],
	["\"What a strange encounter.\"",
		[0],[characters.player], [], [], "bedroom"],
	["\"I guess I'll start heading off to work.\"",
		[0],[characters.player], [], [], "bedroom"],
	["You head downstairs towards the living room.",
		[0],[""], [], [], "stairsDown"],
	["You start to wonder if any more anime babes are around. thankfully, it seems there are none down here.",
		[0],[""], [], [], "livingRoom"],
	["Your cool roommate Nick, who is into both playing guitar and Sam Hyde, opens the door to his bedroom and walks out. He must be getting ready to go to work also.",
		[0],[""], [], [], "livingRoom"],
	[`\"Nyaaa! Hiiii ${characters.player.name}!!\"`,
		[1],[characters.babe], [characters.babe], [], "livingRoom"],
	["Anime babe? What are you doing here??",
		[1],[characters.player], [], [], "livingRoom"],
	["\"It's me, your roommate nick!\"",
		[1],[characters.babe], [], [], "livingRoom"],
	["Suddenly, another anime babe walks in",
		[0, 0],[""], [characters.kemper], [], "livingRoom"],
	["\"what's up guys\"",
		[0, 1],[characters.kemper], [], [], "livingRoom"],
	["\"Hi Kemper!!\"",
		[1, 0],[characters.babe, characters.kemper], [], [], "livingRoom"],
	["\"What is going on here?? Where are my cool roommates??\"",
		[1, 0],[characters.player], [], [], "livingRoom"],
	["\"Don't you get it? Everyone in Lowell is an anime babe now.\"",
		[0, 1],[characters.kemper], [], [], "livingRoom"],
	[`\"Yeah! I'm surprised you're NOT an anime babe ${characters.player.name}!!!\"`,
		[1, 0],[characters.babe, characters.kemper], [], [], "livingRoom"],
	["\"You guys are all anime babes now?? Seriously???\"",
		[0, 0],[characters.player, characters.babe], [], [], "livingRoom"],
	["Jeez, I think I'm really in over my head here...",
		[0, 0],[""], [], [], "livingRoom"],
	["\"Guys, I've really got to get going- I'm going to be late for work!\"",
		[0, 0],[characters.player, characters.babe], [], [], "livingRoom"],
	["You zip past them, realizing how late you are for work! You're so screwed!",
		[0, 0],[""], [], [characters.babe, characters.kemper], "kitchen"],
	["You have one choice to make before you go- should you eat breakfast first, or just leave because you are so late??",
		[0, 0],[""], [], [], "kitchen"],
	["what will you do? (arrow keys to select)", ["banana (scarce)", "leave"]],
	["you have made your choice",
		[0, 0],[""], [], [], "kitchen"],
	[""],
	[""]
]


conversationIndex = 0;
var spaceFlag = true;

var currLine = conversation[0];

var spacePressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var dialogue = currLine[0];
var talker = "";
var selected = 0;
var chosen = -1;
var fadeOut = false;
var fadeVal = 0;


function keyDownHandler(e){
	console.log(e.key);
	if(e.key == "Spacebar" || e.key == " "){
		spacePressed=true;
	}
	if(e.key == "ArrowLeft" && selected > 0){
		selected--;
	}
	if(e.key == "ArrowRight"){
		selected++;
	}
}
function keyUpHandler(e){
	if(e.key == "Spacebar" || e.key == " "){
		spacePressed=false;
	}
}

if(charCanvas.getContext && bgCanvas.getContext && guiCanvas.getContext){
	const bctx = bgCanvas.getContext("2d");
	const cctx = charCanvas.getContext("2d");
	const gctx = guiCanvas.getContext("2d");
	bctx.canvas.width = windowSize[0];//		__---_
	bctx.canvas.height= windowSize[1]; //		            .--''''-,
	cctx.canvas.width = windowSize[0];//        /\              '-_ \/ '--,
	cctx.canvas.height= windowSize[1]; //      /  \--\_           '=_\\//,'
	gctx.canvas.width = windowSize[0];//      /    /   \__         ' \ \
	gctx.canvas.height= windowSize[1]; //,---/_   __  __  \---------_/  \
					  // '----------------------'  /
	function draw(){
		cctx.clearRect(0,0,charCanvas.width, charCanvas.height);
		gctx.clearRect(0,0,guiCanvas.width, guiCanvas.height);
		//Handle key presses
		if(spacePressed){
			if(spaceFlag && conversation[conversationIndex+1]){
				if(currLine.length == 1){
					fadeOut = true;
				}
				if(currLine.length == 2){
					chosen = selected;
					console.log(chosen);
				}
				//console.log(presentCharacters);
				//update conversation
				conversationIndex+=1;
				currLine = conversation[conversationIndex];
				//change scene OR show prompt
				if(currLine.length == 6){
					if(currLine[5] && currLine[5] != ""){
						currentRoom = currLine[5];
					}
					//change characters
					if(currLine[3]!=""){
						for(var person in currLine[3]){
							presentCharacters.push(currLine[3][person]);
						}
					}
					if(currLine[4]!=""){
						for(var person in currLine[4]){
							removee = presentCharacters.indexOf(currLine[3][person])
							presentCharacters.splice(removee, 1);
						}
					}
					dialogue = currLine[0];
					talker = currLine[2][0];
				}
				else{
					//display prompt
					dialogue = currLine[0];
				}
			}
			spaceFlag = false;
			//advanceState();
		}
		else{
			spaceFlag = true;
		}
		//clear everything
		//bctx.clearRect(0,0,bgCanvas.width, bgCanvas.height);
		
		//
		//draw background
		showBackground(bctx, currentRoom);
		//draw people
		for(var person in presentCharacters){
			var character = presentCharacters[person]
			var pose = currLine[1][person]
			//cctx.drawImage(npcStates[conversation[conversationIndex][1]], npcLeft[0], npcLeft[1], npcBase.width*0.8, npcBase.height*0.8);
			cctx.drawImage(character.states[pose], character.standing[0], character.standing[1], npcBase.width*0.8, npcBase.height*0.8);
		}
		drawText(gctx,"pink",dialogue, talker);
		if(currLine.length == 2){
			showButtons(gctx, "pink", currLine[1]);
		}

		//move this to a function
		if(fadeOut == true){
			gctx.fillStyle = "black";
			gctx.globalAlpha = fadeVal;
			gctx.fillRect(0,0,guiCanvas.width, guiCanvas.height);
			if(fadeVal <3){
				fadeVal +=0.01;
			}
			else{
				//fadeOut = false
				//fadeVal = 0;
				gctx.fillStyle = "red";
				gctx.font = "24px monospace";
				gctx.fillText("you have died", 120, gctx.canvas.height-110);
			}
		}
	}
}
setInterval(draw,10);

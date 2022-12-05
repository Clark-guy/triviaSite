
class Card {

	cardTemplate = `
			<div class=card>
				<div id=topFace>{num}</div>
				<div id=midFace>{suit}</div>
				<div id=botFace>{num}</div>
			</div>
			<div class=cardBack>{ds}</div>
			`;
	number;
	suit;

	constructor(number, suit){
		this.number = number;
		this.suit = "&#" + suit.toString();
	}

	getRealValue = function(num){
		switch(num){
			case 14:
				return "A"
			case 1:
				return "A"
			case 11:
				return "J"
			case 12:
				return "Q"
			case 13:
				return "K"
			default:
				return num.toString();
		}
	}
}

class Deck {
	cards = []

	buildDeck = function(){
		for(var suit = 9824;suit<9828; suit++){
			for(var num = 1;num<14; num++){
				this.cards.push(new Card(num, suit));
			}
		}
	}

	shuffleDeck = function(){
		return this;
	}

	addCard = function(card){
		this.cards.push(card);
	}

	removeCard = function(card){
		this.cards.splice(this.cards.indexOf(card), 1);
	}

}
/*
var table = document.getElementById("table");
var hand  = document.getElementById("hand");
var dealerHand = document.getElementById("dealerHand");
var infoText = document.getElementById("infoText");
var deck = new Deck();

deck.buildDeck();
*/

//utility functions

genRandom = function(min, max){
	return Math.floor(Math.random() * (max - min + 1) ) +min; 
}

//initialize game

var table = document.getElementById("table");
var myHandHtml  = document.getElementById("hand");
var dealerHandHtml = document.getElementById("dealerHand");
var infoText = document.getElementById("infoText");
var goButton = document.getElementById("warButt");
var rightButton = document.getElementById("bjButt");
var deck = new Deck();
var myHand = new Deck();
var theirHand = new Deck();
deck.buildDeck();



//blackjack
//
//need to layer cards so a bunch of em can be on top of each other
//otherwise we'll run out of room when hitting
//

blackjack = function(){
	goButton.innerText = "hit";
	rightButton.innerText = "stand";
}


//War stuff

//split deck between both players
for (var card in deck.cards){
	if (card%2==0){
		myHand.addCard(deck.cards[card]);
	}
	else{
		theirHand.addCard(deck.cards[card]);
	}
}

war = function(theirRisk, myRisk){
	rightButton.style.display = "none";
	var theirCard = theirHand.cards[genRandom(0,theirHand.cards.length-1)];
	var myCard = myHand.cards[genRandom(0,myHand.cards.length-1)]
	theirHand.removeCard(theirCard);
	myHand.removeCard(myCard);
	theirRisk.push(theirCard);
	myRisk.push(myCard);

	hand.innerHTML =myCard.cardTemplate.replaceAll("{num}", myCard.getRealValue(myCard.number)).replace("{suit}", myCard.suit); 
	hand.innerHTML = hand.innerHTML.replaceAll("{ds}", myHand.cards.length);
	
	dealerHand.innerHTML =theirCard.cardTemplate.replaceAll("{num}", theirCard.getRealValue(theirCard.number)).replace("{suit}", theirCard.suit); 
	dealerHand.innerHTML = dealerHand.innerHTML.replaceAll("{ds}", theirHand.cards.length);
	
	if(myCard.number == 1){
		myCard.number+=13;
	}
	if(theirCard.number == 1){
		theirCard.number+=13;
	}


	if(theirCard.number>myCard.number){
		console.log("they win");
		infoText.innerHTML = ("they win!");
		for(var card in myRisk){
			theirHand.addCard(myRisk[card]);
			theirHand.addCard(theirRisk[card]);
		}
		goButton.onclick = function() {war([], [])}
	}
	else if(myCard.number>theirCard.number){
		console.log("i win");
		infoText.innerHTML = ("you win!");
		for(var card in theirRisk){
			myHand.addCard(theirRisk[card]);
			myHand.addCard(myRisk[card]);
		}
		goButton.onclick = function() {war([], [])}
	}
	else{
		console.log("tie");
		infoText.innerHTML = ("War!");
		for(var i=0;(i<2 && i<theirHand.cards.length);i++){
			theirRisk.push(theirHand.cards[i]);
			theirHand.removeCard(theirHand.cards[i]);
		}
		for(var i=0;i<2 && i<myHand.cards.length;i++){
			myRisk.push(myHand.cards[i]);
			myHand.removeCard(myHand.cards[i]);
		}
		goButton.onclick = function() {war(theirRisk, myRisk)}
		
	}
}


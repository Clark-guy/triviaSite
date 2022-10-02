
class Card {

	cardTemplate = `
			<div class=card>
				<div id=topFace>{num}</div>
				<div id=midFace>{suit}</div>
				<div id=botFace>{num}</div>
			</div>
			<div class=cardBack></div>
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
var deck = new Deck();
var myHand = new Deck();
var theirHand = new Deck();
deck.buildDeck();

//split deck between both players
for (var card in deck.cards){
	if (card%2==0){
		myHand.addCard(deck.cards[card]);
	}
	else{
		theirHand.addCard(deck.cards[card]);
	}
}



war = function(){
	var theirIndex = genRandom(0,theirHand.cards.length-1);
	var theirCard = theirHand.cards[theirIndex];
	var myCard = myHand.cards[genRandom(0,myHand.cards.length-1)]
	//console.log(theirHand);
	//console.log(theirIndex);
	//console.log(theirCard);
	hand.innerHTML =myCard.cardTemplate.replaceAll("{num}", myCard.getRealValue(myCard.number)).replace("{suit}", myCard.suit); 
	
	dealerHand.innerHTML =theirCard.cardTemplate.replaceAll("{num}", theirCard.getRealValue(theirCard.number)).replace("{suit}", theirCard.suit); 
	
	if(myCard.number == 1){
		myCard.number+=13;
	}
	if(theirCard.number == 1){
		theirCard.number+=13;
	}


	if(theirCard.number>myCard.number){
		infoText.innerHTML = ("they win!");
		theirHand.addCard(myCard);
		myHand.removeCard(myCard);
	}
	else if(myCard.number>theirCard.number){
		infoText.innerHTML = ("you win!");
		theirHand.removeCard(theirCard);
		myHand.addCard(theirCard);
	}
	else{
		infoText.innerHTML = ("tie!");
	}
}
//war();

function autoWar(){
	while(myHand.cards.length!=1 && theirHand.cards.length!=1){
		war();
	}
}

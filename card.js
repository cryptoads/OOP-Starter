function Card(point, suit){
    this.point = point;
    this.suit = suit;
};

Card.prototype.getImageUrl = function(card){
    return('cards/'+card.point+card.suit[0]+'.png');
};

function Hand(){
    this.hand = [];
    this.points = 0;
};

Hand.prototype.addCard = function(card) {
    this.hand.push(card);
    this.points += card.point;
};

Hand.prototype.getPoints = function(){
    return this.points;
};

function Deck(){
    this.deck = [];
    var suits = ['diamonds', 'hearts', 'clubs', 'spades'];
    for (var i = 0; i < 52; i++) {
        var newCardsSuit = suits[Math.floor(i / 13)];
        var newCardsPoint = (i % 13) + 1;
        var newCard = new Card(newCardsPoint, newCardsSuit);
        this.deck.push(newCard);
    };
};

Deck.prototype.draw = function(){
    var card = this.deck.pop();
    return card;
};

Deck.prototype.shuffle = function(){
    return this.deck.sort(function(a,b){return .5 - Math.random()});
};

Deck.prototype.numCardsLeft = function(){
    return this.deck.length;
};


var myCard = new Card(5, 'diamonds');
var myHand = new Hand();
console.log(myCard.getImageUrl(myCard));
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
console.log(myHand.hand);
console.log(myHand.getPoints());
var myDeck = new Deck();
myDeck.shuffle();
console.log(myDeck.deck);
console.log(myDeck.numCardsLeft());
console.log(myDeck.draw());
console.log(myDeck.numCardsLeft());
console.log(myCard.getImageUrl(myCard));
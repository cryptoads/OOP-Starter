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

var myCard = new Card(5, 'diamonds');
var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
console.log(myHand.hand);
console.log(myHand.getPoints());
console.log(myCard.getImageUrl(myCard));
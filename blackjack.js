var deck = [
  {Card: '2', Suit: 'Diamond', Value: 2},
  {Card: '2', Suit: 'Clover', Value: 2},
  {Card: '2', Suit: 'Heart', Value: 2},
  {Card: '2', Suit: 'Spade', Value: 2},
  {Card: '3', Suit: 'Diamond', Value: 3},
  {Card: '3', Suit: 'Clover', Value: 3},
  {Card: '3', Suit: 'Heart', Value: 3},
  {Card: '3', Suit: 'Spade', Value: 3},
  {Card: '4', Suit: 'Diamond', Value: 4},
  {Card: '4', Suit: 'Clover', Value: 4},
  {Card: '4', Suit: 'Heart', Value: 4},
  {Card: '4', Suit: 'Spade', Value: 4},
  {Card: '5', Suit: 'Diamond', Value: 5},
  {Card: '5', Suit: 'Clover', Value: 5},
  {Card: '5', Suit: 'Heart', Value: 5},
  {Card: '5', Suit: 'Spade', Value: 5},
  {Card: '6', Suit: 'Diamond', Value: 6},
  {Card: '6', Suit: 'Clover', Value: 6},
  {Card: '6', Suit: 'Heart', Value: 6},
  {Card: '6', Suit: 'Spade', Value: 6},
  {Card: '7', Suit: 'Diamond', Value: 7},
  {Card: '7', Suit: 'Clover', Value: 7},
  {Card: '7', Suit: 'Heart', Value: 7},
  {Card: '7', Suit: 'Spade', Value: 7},
  {Card: '8', Suit: 'Diamond', Value: 8},
  {Card: '8', Suit: 'Clover', Value: 8},
  {Card: '8', Suit: 'Heart', Value: 8},
  {Card: '8', Suit: 'Spade', Value: 8},
  {Card: '9', Suit: 'Diamond', Value: 9},
  {Card: '9', Suit: 'Clover', Value: 9},
  {Card: '9', Suit: 'Heart', Value: 9},
  {Card: '9', Suit: 'Spade', Value: 9},
  {Card: '10', Suit: 'Diamond', Value: 10},
  {Card: '10', Suit: 'Clover', Value: 10},
  {Card: '10', Suit: 'Heart', Value: 10},
  {Card: '10', Suit: 'Spade', Value: 10},
  {Card: 'Jack', Suit: 'Diamond', Value: 10},
  {Card: 'Jack', Suit: 'Clover', Value: 10},
  {Card: 'Jack', Suit: 'Heart', Value: 10},
  {Card: 'Jack', Suit: 'Spade', Value: 10},
  {Card: 'Queen', Suit: 'Diamond', Value: 10},
  {Card: 'Queen', Suit: 'Clover', Value: 10},
  {Card: 'Queen', Suit: 'Heart', Value: 10},
  {Card: 'Queen', Suit: 'Spade', Value: 10},
  {Card: 'King', Suit: 'Diamond', Value: 10},
  {Card: 'King', Suit: 'Clover', Value: 10},
  {Card: 'King', Suit: 'Heart', Value: 10},
  {Card: 'King', Suit: 'Spade', Value: 10},
  {Card: 'Ace', Suit: 'Diamond', Value: undefined},
  {Card: 'Ace', Suit: 'Clover', Value: undefined},
  {Card: 'Ace', Suit: 'Heart', Value: undefined},
  {Card: 'Ace', Suit: 'Spade', Value: undefined}
];

var playerCardValue = undefined;
var dealerCardValue = undefined;

var blackjack = {
  cards: deck,
  inPlay: {
    playerCards: [],
    playerAces: [],
    dealerCards: [],
    dealerAces: []
  },
  usedCards: [],
  dealPlayerCard1: function () {
    var playerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualFirstCard = deck[playerFirstCardDealtRandomizedNumber];
    //return (playerActualFirstCard);
    if (playerActualFirstCard.Card == "Ace") {
      this.inPlay.playerAces.push(playerActualFirstCard)
    } else {
      this.inPlay.playerCards.push(playerActualFirstCard)
    };
    deck.splice(playerFirstCardDealtRandomizedNumber, 1);
  },
  dealPlayerCard2: function () {
    var playerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualSecondCard = deck[playerSecondCardDealtRandomizedNumber];

    if (playerActualSecondCard.Card == "Ace") {
      blackjack.inPlay.playerAces.push(playerActualSecondCard)
    } else {
      blackjack.inPlay.playerCards.push(playerActualSecondCard)
    };
    deck.splice(playerSecondCardDealtRandomizedNumber, 1);
  },
  dealDealerCard1: function () {
  var dealerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
  var dealerActualFirstCard = deck[dealerFirstCardDealtRandomizedNumber];

  if (dealerActualFirstCard.Card == "Ace") {
    blackjack.inPlay.dealerAces.push(dealerActualFirstCard)
  } else {
    blackjack.inPlay.dealerCards.push(dealerActualFirstCard)
  };
    deck.splice(dealerFirstCardDealtRandomizedNumber, 1);
  },
  dealDealerCard2: function () {
    var dealerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualSecondCard = deck[dealerSecondCardDealtRandomizedNumber];

    if (dealerActualSecondCard.Card == "Ace") {
      blackjack.inPlay.dealerAces.push(dealerActualSecondCard)
    } else {
      blackjack.inPlay.dealerCards.push(dealerActualSecondCard)
    };
    deck.splice(dealerSecondCardDealtRandomizedNumber, 1);
  },
  playerCardValueAfterFirst2: function () {
    var playerCardValueAfterFirstHand = 0
    if (this.inPlay.playerCards.length == 2 && this.inPlay.playerAces.length == 0) {
      playerCardValueAfterFirstHand = parseInt(this.inPlay.playerCards[0].Value) + parseInt(this.inPlay.playerCards[1].Value)
    } else if (this.inPlay.playerCards.length == 1 && this.inPlay.playerAces.length == 1) {
      this.inPlay.playerAces[0].Value = 11
      playerCardValueAfterFirstHand = parseInt(this.inPlay.playerCards[0].Value) + parseInt(this.inPlay.playerAces[0].Value)
    } else if (this.inPlay.playerCards.length == 0 && this.inPlay.playerAces.length == 2) {
      this.inPlay.playerAces[0].Value = 11
        this.inPlay.playerAces[1].Value = 1
        playerCardValueAFterFirstHand = parseInt(this.inPlay.playerAces[0].Value) + parseInt(this.inPlay.playerAces[1].Value)
    }
    playerCardValue = playerCardValueAfterFirstHand;
  },
  dealerShowedCardValue: function () {
    var dealerShowedFirstCardValue = 0
    if (this.inPlay.dealerCards.length == 1 && this.inPlay.dealerAces.length == 0) {
      dealerShowedFirstCardValue = parseInt(this.inPlay.dealerCards[0].Value)
    } else if (this.inPlay.dealerCards.length == 0 && this.inPlay.dealerAces.length == 1) {
      this.inPlay.dealerAces[0].Value = 11
        dealerShowedFirstCardValue = parseInt(this.inPlay.playerAces[0].Value)
    }
    dealerCardValue = dealerShowedFirstCardValue;
  },
  updatePlayerCardValue: function () {
    $('.PlayerValue').text(playerCardValue)
  },
  updateDealerCardValue: function () {
    $('.DealerValue').text(dealerCardValue)
  }
}

// blackjack.dealPlayerCard1()
// blackjack.dealDealerCard1()
// blackjack.dealerShowedCardValue()
// blackjack.dealPlayerCard2()
// blackjack.playerCardValueAfterFirst2()
// blackjack.dealDealerCard2()
// console.log (blackjack.inPlay.playerCards);
// console.log (blackjack.inPlay.playerAces);
// console.log (blackjack.inPlay.dealerCards);
// console.log (blackjack.inPlay.dealerAces);
// console.log (deck.length);
// console.log (playerCardValue);
// console.log (dealerCardValue);

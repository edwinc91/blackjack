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

$('#Start').one("click", function (e) {
  $('#Bet').one("click", function (f) {
    this.betAmount = prompt("How much would you like to bet? Minimum $25")
    // console.log(this);
    //come back later and fix this while loop..turns into an infinite loop, probably because the second prompt input doesnt register
    // if (this.betAmount < 25) {
    //   this.betTryTwo = prompt("I'm sorry, that's not enough to begin! Please bet at least $25")
    //   while (this.betTryTwo < 25) {
    //     prompt ("I'm sorry, that's not enough to begin! Please bet at least $25")
    //   }
    //   $('.Bank').text(Number($('.Bank').text()) - this.betTryTwo);
    //   blackjack.dealPlayerCard1();
    // } else {
      $('.Bank').text(Number($('.Bank').text()) - this.betAmount);
      $('.BetAmount').text(this.betAmount);
      blackjack.dealPlayerCard1();
    // }
  })
});

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
    blackjack.playerFirstCardValue();
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
    blackjack.playerCardValueAfterFirst2();
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
    blackjack.dealerShowedCardValue();
    blackjack.dealPlayerCard2();
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
    $('#HitMe').one("click", function (e) {
      blackjack.playerHit();
      // blackjack.playerCardValueAfterHit();
      // blackjack.updatePlayerCardValue();
      // var delayedUpdateTime = blackjack.playerBustMechanic
      // setTimeout(delayedUpdateTime, 500);
    })
    $('#Stay').one("click", function(f) {
      blackjack.playerStay();
    })
  },
  playerFirstCardValue: function () {
    if (this.inPlay.playerCards.length == 0 && this.inPlay.playerAces.length == 1) {
      this.inPlay.playerAces[0].Value = 11
      playerCardValue = parseInt(this.inPlay.playerAces[0].Value)
    } else if (this.inPlay.playerCards.length == 1 && this.inPlay.playerAces.length == 0) {
      playerCardValue = parseInt(this.inPlay.playerCards[0].Value)
    }
    $('.PlayerValue').text(playerCardValue)
    blackjack.dealDealerCard1();
  },
  playerCardValueAfterFirst2: function () {
    var playerCardValueAfterFirstHand = 0
    if (this.inPlay.playerCards.length == 2 && this.inPlay.playerAces.length == 0) {
      playerCardValueAfterFirstHand = parseInt(this.inPlay.playerCards[0].Value) + parseInt(this.inPlay.playerCards[1].Value)
    } else if (this.inPlay.playerCards.length == 1 && this.inPlay.playerAces.length == 1) {
      this.inPlay.playerAces[0].Value = 11
      playerCardValueAfterFirstHand = parseInt(this.inPlay.playerCards[0].Value) + parseInt(this.inPlay.playerAces[0].Value)
    } else if (this.inPlay.playerCards.length == 0 && this.inPlay.playerAces.length == 2) {
      // this.inPlay.playerAces[0].Value = 11
      this.inPlay.playerAces[1].Value = 1
      playerCardValueAFterFirstHand = parseInt(this.inPlay.playerAces[0].Value) + parseInt(this.inPlay.playerAces[1].Value)
    }
    playerCardValue = playerCardValueAfterFirstHand;
    blackjack.updatePlayerCardValue();
    blackjack.dealDealerCard2();
  },
  dealerShowedCardValue: function () {
    var dealerShowedFirstCardValue = 0
    if (this.inPlay.dealerCards.length == 1 && this.inPlay.dealerAces.length == 0) {
      dealerShowedFirstCardValue = parseInt(this.inPlay.dealerCards[0].Value)
    } else if (this.inPlay.dealerCards.length == 0 && this.inPlay.dealerAces.length == 1) {
      this.inPlay.dealerAces[0].Value = 11
        dealerShowedFirstCardValue = parseInt(this.inPlay.dealerAces[0].Value)
    }
    dealerCardValue = dealerShowedFirstCardValue;
    blackjack.updateDealerCardValue();
  },
  updatePlayerCardValue: function () {
    $('.PlayerValue').text(playerCardValue)
  },
  updateDealerCardValue: function () {
    $('.DealerValue').text(dealerCardValue)
  },
  playerHit: function () {
    var playerHitCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualHitCard = deck[playerHitCardDealtRandomizedNumber];
    if (playerActualHitCard.Card == "Ace") {
      this.inPlay.playerAces.push(playerActualHitCard)
    } else {
      this.inPlay.playerCards.push(playerActualHitCard)
    };
    deck.splice(playerHitCardDealtRandomizedNumber, 1);
    blackjack.playerCardValueAfterHit();
  },
  playerCardValueAfterHit: function () {
    playerCardValue = 0
    if (this.inPlay.playerAces.length == 0) {
      for (var i = 0; i < blackjack.inPlay.playerCards.length; i++) {
        playerCardValue += parseInt(blackjack.inPlay.playerCards[i].Value)
      }
    } else if (this.inPlay.playerAces.length == 1) {
      for (var j = 0; j < blackjack.inPlay.playerCards.length; j++) {
        playerCardValue += parseInt(blackjack.inPlay.playerCards[j].Value)
      }
      if (playerCardValue > 10) {
        this.inPlay.playerAces[0].Value = 1
        playerCardValue += parseInt(this.inPlay.playerAces[0].Value)
      } else {
        this.inPlay.playerAces[0].Value = 11
        playerCardValue += parseInt(this.inPlay.playerAces[0].Value)
      }
    } else {
      // This part go back to it later..rare cases where you get 2 aces, look into splitting mechanic
      var firstPlayerAce = this.inPlay.playerAces[0]
      firstPlayerAce.Value = 11
      for (var k = 1; k < blackjack.inPlay.playerAces.length; k++) {
        this.inPlay.playerAces[k].Value = 1
      }
      playerCardValue = parseInt(firstplayerAce.Value) + parseInt(this.inPlay.playerAces[1].Value)
    }
    blackjack.updatePlayerCardValue();
    var delayedUpdateTime = blackjack.playerBustMechanic
    setTimeout(delayedUpdateTime, 500);
  },
  dealerCardValueAfterFirst2: function () {
    dealerCardValue = 0
    if (this.inPlay.dealerCards.length > 1) {
      for (var i = 0; i < this.inPlay.dealerCards.length; i++) {
        dealerCardValue += parseInt(this.inPlay.dealerCards[i].Value)
      }
    } else if (this.inPlay.dealerCards.length == 1 && this.inPlay.dealerAces.length == 1) {
      this.inPlay.dealerAces[0].Value = 11
      dealerCardValue = parseInt(this.inPlay.dealerCards[0].Value) + parseInt(this.inPlay.dealerAces[0].Value)
    }
    blackjack.updateDealerCardValue();
    setTimeout(blackjack.dealerHit, 1500);
  },
  dealerHit: function () {
    if (parseInt(dealerCardValue) < 17) {
      var dealerHitCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
      var dealerActualHitCard = deck[dealerHitCardDealtRandomizedNumber];
      if (dealerActualHitCard.Card == "Ace") {
        this.inPlay.dealerAces.push(dealerActualHitCard)
      } else {
        blackjack.inPlay.dealerCards.push(dealerActualHitCard)
      };
      deck.splice(dealerHitCardDealtRandomizedNumber, 1);
      blackjack.dealerCardValueAfterHit();
    } else {
      blackjack.outcome();
    }
  },
  dealerCardValueAfterHit: function () {
    dealerCardValue = 0
    if (this.inPlay.dealerAces == 0) {
      for (var i = 0; i < this.inPlay.dealerCards.length; i++) {
        dealerCardValue += parseInt(this.inPlay.dealerCards[i].Value)
      }
    } else if (this.inPlay.dealerAces == 1) {
      for (var j = 0; j < this.inPlay.dealerCards.length; j++) {
        dealerCardValue += parseInt(this.inPlay.dealerCards[j].Value)
      }
      if (parseInt(dealerCardValue) > 10) {
        this.inPlay.dealerAces[0].Value = 1
        dealerCardValue += parseInt(this.inPlay.dealerAces[0].Value)
      } else {
        this.inPlay.dealerAces[0].Value = 11
        dealerCardValue += parseInt(this.inPlay.dealerAces[0].Value)
      }
    }
    //make sure to put in another else clause for when the dealer has more than one ace
    blackjack.updateDealerCardValue();
    blackjack.dealerHit();
  },
  playerStay: function () {
    this.dealerCardValueAfterFirst2();
  },
  playerBustMechanic: function () {
    if (playerCardValue == 21) {
      alert("Blackjack!")

    } else if (playerCardValue > 21) {
      alert("Player Busts! You lose!")
      blackjack.outcome();
    } else {
      $('#HitMe').one("click", function (e) {
        blackjack.playerHit();
        blackjack.playerCardValueAfterHit();
        blackjack.updatePlayerCardValue();
        // var delayedUpdateTime = blackjack.playerBustMechanic
        // setTimeout(delayedUpdateTime, 500);
      })
      $('#Stay').one("click", function (f) {
        blackjack.playerStay();
      })
    }
  },
  outcome: function () {
    if (playerCardValue == dealerCardValue && parseInt(playerCardValue) < 22) {
      alert("Push!")
      $('.Bank').text(Number($('.Bank').text()) + Number($('.BetAmount').text()));
      $('.BetAmount').text(0);
    } else if (parseInt(playerCardValue) < 22 && parseInt(dealerCardValue) > 21) {
      alert("Dealer Busts! Player Wins!")
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    } else if (parseInt(playerCardValue) > 22) {
      $('.BetAmount').text(0);
    } else if (parseInt(playerCardValue) > parseInt(dealerCardValue) && parseInt(playerCardValue) < 22) {
      alert("Player Wins!")
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    }
  }
}

// var startGameTest = function () {
// // blackjack.dealPlayerCard1()
// blackjack.dealDealerCard1()
// blackjack.dealerShowedCardValue()
// blackjack.updateDealerCardValue()
// blackjack.dealPlayerCard2()
// blackjack.playerCardValueAfterFirst2()
// blackjack.updatePlayerCardValue()
// blackjack.dealDealerCard2()
// }

// console.log (blackjack.inPlay.playerCards);
// console.log (blackjack.inPlay.playerAces);
// console.log (blackjack.inPlay.dealerCards);
// console.log (blackjack.inPlay.dealerAces);
// console.log (deck.length);
// console.log (playerCardValue);
// console.log (dealerCardValue);

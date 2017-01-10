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
  {Card: 'Ace', Suit: 'Diamond', Value: 1},
  {Card: 'Ace', Suit: 'Clover', Value: 1},
  {Card: 'Ace', Suit: 'Heart', Value: 1},
  {Card: 'Ace', Suit: 'Spade', Value: 1}
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
    // if ($'.Bank').text(Number($('.Bank').text()) < this.betAmount) {
      // prompt("It appears you don't have enough money to make that bet!")
    // } else {
      $('.Bank').text(Number($('.Bank').text()) - this.betAmount);
      $('.BetAmount').text(this.betAmount);
      $('#Start').toggleClass('hidden')
      blackjack.dealPlayerCard1();
    // }
    // }
  })
});

$('#Reset').on("click", function (e) {
  if ($('#Start').attr('class') == "hidden") {
    $('#Start').toggleClass('hidden')
  }
  $('.Bank').text(500);
  $('.BetAmount').text(0);
  $('.rounds').text(0);
  blackjack.resetGame();
})

var playerCardValue = undefined;
var dealerCardValue = undefined;

var blackjack = {
  cards: deck,
  inPlay: {
    cards: [],
    playerCards: [],
    // playerAces: [],
    dealerCards: []
    // dealerAces: []
  },
  usedCards: [],
  playerCardValue: 0,
  dealerCardValue: 0,

  dealCard: function () {
    var cardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var actualCard = deck[cardDealtRandomizedNumber];
    this.inPlay.cards.push(actualCard)
    deck.splice(cardDealtRandomizedNumber, 1);
  },

  playerCard: function () {
    blackjack.dealCard()
    this.inPlay.playerCards.push(this.inPlay.cards[0])
    this.inPlay.cards.splice(0, 1)
  },

  dealerCard: function () {
    blackjack.dealCard()
    this.inPlay.dealerCards.push(this.inPlay.cards[0])
    this.inPlay.cards.splice(0, 1)
  },

  updatePlayerCardValue: function () {
    $('.PlayerValue').text(playerCardValue)
  },

  updateDealerCardValue: function () {
    $('.DealerValue').text(dealerCardValue)
  },

  playerValue: function () {
    for (var i = 0; i < this.inPlay.playerCards.length; i++) {
      blackjack.playerCardValue += parseInt(this.inPlay.playerCards.Value)
    }
  },

  dealerValue: function () {
    for (var i = 0; i < this.inPlay.dealerCards.length; i++) {
      blackjack.dealerCardValue += parseInt(this.inPlay.dealerCards.Value)
    }
  },

  // playerFirstCardValue: function () {
  //   if (this.inPlay.playerCards.length == 0 && this.inPlay.playerAces.length == 1) {
  //     this.inPlay.playerAces[0].Value = 11
  //     playerCardValue = parseInt(this.inPlay.playerAces[0].Value)
  //   } else if (this.inPlay.playerCards.length == 1 && this.inPlay.playerAces.length == 0) {
  //     playerCardValue = parseInt(this.inPlay.playerCards[0].Value)
  //   }
  //   $('.PlayerValue').text(playerCardValue)
  //   blackjack.dealDealerCard1();
  // },
  // playerCardValueAfterFirst2: function () {
  //   var playerCardValueAfterFirstHand = 0
  //   if (this.inPlay.playerCards.length == 2 && this.inPlay.playerAces.length == 0) {
  //     playerCardValueAfterFirstHand = parseInt(this.inPlay.playerCards[0].Value) + parseInt(this.inPlay.playerCards[1].Value)
  //   } else if (this.inPlay.playerCards.length == 1 && this.inPlay.playerAces.length == 1) {
  //     this.inPlay.playerAces[0].Value = 11
  //     playerCardValueAfterFirstHand = parseInt(this.inPlay.playerCards[0].Value) + parseInt(this.inPlay.playerAces[0].Value)
  //   } else if (this.inPlay.playerCards.length == 0 && this.inPlay.playerAces.length == 2) {
  //     // this.inPlay.playerAces[0].Value = 11
  //     this.inPlay.playerAces[1].Value = 1
  //     playerCardValueAfterFirstHand = parseInt(this.inPlay.playerAces[0].Value) + parseInt(this.inPlay.playerAces[1].Value)
  //   }
  //   playerCardValue = playerCardValueAfterFirstHand;
  //   blackjack.updatePlayerCardValue();
  //   blackjack.dealDealerCard2();
  // },
  // dealerShowedCardValue: function () {
  //   var dealerShowedFirstCardValue = 0
  //   if (this.inPlay.dealerCards.length == 1 && this.inPlay.dealerAces.length == 0) {
  //     dealerShowedFirstCardValue = parseInt(this.inPlay.dealerCards[0].Value)
  //   } else if (this.inPlay.dealerCards.length == 0 && this.inPlay.dealerAces.length == 1) {
  //     this.inPlay.dealerAces[0].Value = 11
  //       dealerShowedFirstCardValue = parseInt(this.inPlay.dealerAces[0].Value)
  //   }
  //   dealerCardValue = dealerShowedFirstCardValue;
  //   blackjack.updateDealerCardValue();
  // },

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
    if (parseInt(playerCardValue) == 21 && parseInt(dealerCardValue) !== 21) {
      alert("Blackjack!")
      blackjack.outcome();
    } else {
      // setTimeout(blackjack.dealerHit, 1500);
      blackjack.dealerHit();
    }
  },
  dealerHit: function () {
    if (parseInt(dealerCardValue) < 17) {
      var dealerHitCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
      var dealerActualHitCard = deck[dealerHitCardDealtRandomizedNumber];
      if (dealerActualHitCard.Card == "Ace") {
        blackjack.inPlay.dealerAces.push(dealerActualHitCard)
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
    if (playerCardValue > 21) {
      alert("Player Busts! You lose!")
      blackjack.outcome();
    } else {
      $('#HitMe').one("click", function (e) {
        blackjack.playerHit();
        blackjack.playerCardValueAfterHit();
        blackjack.updatePlayerCardValue();
      })
      $('#Stay').one("click", function (f) {
        blackjack.playerStay();
      })
    }
  },
  outcome: function () {
    if (playerCardValue == dealerCardValue && parseInt(playerCardValue) < 22) {
      alert("Push! Make a bet for the next round")
      $('.Bank').text(Number($('.Bank').text()) + Number($('.BetAmount').text()));
      $('.BetAmount').text(0);
    } else if (parseInt(playerCardValue) < 22 && parseInt(dealerCardValue) > 21) {
      alert("Dealer Busts! Player Wins! Make a bet for the next round")
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    } else if (parseInt(playerCardValue) > 21) {
      $('.BetAmount').text(0);
    } else if (parseInt(playerCardValue) > parseInt(dealerCardValue) && parseInt(playerCardValue) < 22) {
      alert("Player Wins! Make a bet for the next round")
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    } else if (parseInt(playerCardValue) < parseInt(dealerCardValue) && parseInt(dealerCardValue) < 22) {
      alert("Dealer Wins! Make a bet for the next round")
      $('.BetAmount').text(0);
    }
    $('.rounds').text(Number($('.rounds').text()) + 1)
    $('#Bet').one("click", function (f) {
      blackjack.newRound();
      this.betAmount = prompt("How much would you like to bet? Minimum $25")
      $('.Bank').text(Number($('.Bank').text()) - this.betAmount);
      $('.BetAmount').text(this.betAmount);
      blackjack.shuffleDeck();
      blackjack.dealPlayerCard1();
    })
  },
  newRound: function () {
    for (var i = 0; i < this.inPlay.playerCards.length; i++) {
        this.usedCards.push(this.inPlay.playerCards[i])
    }
    for (var j = 0; j < this.inPlay.playerAces.length; j++) {
      this.usedCards.push(this.inPlay.playerAces[j])
    }
    for (var k = 0; k < this.inPlay.dealerCards.length; k++) {
      this.usedCards.push(this.inPlay.dealerCards[k])
    }
    for (var l = 0; l < this.inPlay.dealerAces.length; l++) {
      this.usedCards.push(this.inPlay.dealerAces[l])
    }
    this.inPlay.playerCards = []
    this.inPlay.playerAces = []
    this.inPlay.dealerCards = []
    this.inPlay.dealerAces = []
    playerCardValue = 0
    blackjack.updatePlayerCardValue()
    dealerCardValue = 0
    blackjack.updateDealerCardValue()
  },
  shuffleDeck: function () {
    if (deck.length < 20) {
      alert("Looks like the deck's running a little short! Time to shuffle!")
      for (var i = 0; i < this.usedCards.length; i++) {
        deck.push(this.usedCards[i])
      }
      this.usedCards = []
    }
  },
  resetGame: function () {
    this.newRound();
    for (var i = 0; i < this.usedCards.length; i++) {
      deck.push(this.usedCards[i])
    }
    this.usedCards = []
    $('#Start').one("click", function (e) {
      // $('#Bet').one("click", function (f) {
      //   this.betAmount = prompt("How much would you like to bet? Minimum $25")
      //   $('.Bank').text(Number($('.Bank').text()) - this.betAmount);
      //   $('.BetAmount').text(this.betAmount);
      //   $('#Start').toggleClass('hidden')
      //   blackjack.dealPlayerCard1();
      // })
    });
  }
}

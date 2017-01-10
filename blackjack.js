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
  {Card: 'Ace', Suit: 'Diamond', Value: 11},
  {Card: 'Ace', Suit: 'Clover', Value: 11},
  {Card: 'Ace', Suit: 'Heart', Value: 11},
  {Card: 'Ace', Suit: 'Spade', Value: 11}
];

var startGame = $('#Start').one("click", function (e) {
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
      $('#Start').toggleClass('hidden');
      blackjack.gameMechanic();
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
  startGame();
});

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

  gameMechanic: function () {
    blackjack.playerCard();
    blackjack.dealerCard();
    blackjack.dealerValue();
    blackjack.updateDealerCardValue();
    blackjack.playerCard();
    blackjack.playerValue();
    blackjack.updatePlayerCardValue();
    blackjack.dealerCard();
    blackjack.dealerValue();
    $('#HitMe').on('click', function (g) {
      blackjack.playerHit();
    })
    $('#Stay').on('click', function (h) {
      blackjack.dealerHitMechanic();
    });
  },

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
    $('.PlayerValue').text(this.playerCardValue)
  },

  updateDealerCardValue: function () {
    $('.DealerValue').text(this.dealerCardValue)
  },

  playerValue: function () {
    blackjack.playerCardValue = 0;
    for (var i = 0; i < blackjack.inPlay.playerCards.length; i++) {
      blackjack.playerCardValue += parseInt(blackjack.inPlay.playerCards[i].Value)
    }
  },

  dealerValue: function () {
    blackjack.dealerCardValue = 0;
    for (var i = 0; i < blackjack.inPlay.dealerCards.length; i++) {
      blackjack.dealerCardValue += parseInt(blackjack.inPlay.dealerCards[i].Value)
    }
  },

  playerAceValueChecker: function () {
    for (var i = 0; i < this.inPlay.playerCards.length; i++) {
      if (blackjack.inPlay.playerCards[i].Card == "Ace") {
        if (blackjack.playerCardValue > 10) {
          blackjack.inPlay.playerCards[i].Value = 1
        }
      }
    }
  },

  dealerAceValueChecker: function () {
    for (var i = 0; i < this.inPlay.dealerCards.length; i++) {
      if (blackjack.inPlay.dealerCards[i].Card == "Ace") {
        if (blackjack.dealerCardValue > 10) {
          blackjack.inPlay.dealerCards[i].Value = 1
        }
      }
    }
  },

  playerHit: function () {
    this.playerCard();
    this.playerValue();
    this.playerAceValueChecker();
    this.playerValue();
    this.didPlayerBust();
  },

  didPlayerBust: function () {
    if (this.playerCardValue > 21) {
      blackjack.updatePlayerCardValue();
      blackjack.outcome();
    } else {
      blackjack.updatePlayerCardValue();
    }
  },

  dealerHit: function () {
    this.dealerCard();
    this.dealerValue();
    this.dealerAceValueChecker();
    this.dealerValue();
  },

  dealerHitMechanic: function () {
    if (this.dealerCardValue < 17) {
      blackjack.dealerHit();
      blackjack.updateDealerCardValue();
      blackjack.dealerHitMechanic();
    } else {
      blackjack.updateDealerCardValue();
      blackjack.outcome();
    }
  },

  outcome: function () {
    if (this.playerCardValue == this.dealerCardValue && this.playerCardValue < 22) {
      alert("Push! Make a bet for the next round")
      $('.Bank').text(Number($('.Bank').text()) + Number($('.BetAmount').text()));
      $('.BetAmount').text(0);
    } else if (this.playerCardValue < 22 && this.dealerCardValue > 21) {
      alert("Dealer Busts! Player Wins! Make a bet for the next round")
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    } else if (this.playerCardValue > 21) {
      alert("Player Busts! Dealer Wins!")
      $('.BetAmount').text(0);
    } else if (this.playerCardValue > this.dealerCardValue && this.playerCardValue < 22) {
      alert("Player Wins! Make a bet for the next round")
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    } else if (this.playerCardValue < this.dealerCardValue && this.dealerCardValue < 22) {
      alert("Dealer Wins! Make a bet for the next round")
      $('.BetAmount').text(0);
    }
    $('.rounds').text(Number($('.rounds').text()) + 1)
    if ($('#NewRound').attr('class') == "hidden") {
      $('#NewRound').toggleClass('hidden')
      $('#NewRound').one('click', function (e) {
        $('.PlayerValue').text(0);
        $('.DealerValue').text(0);
        $('#Bet').one("click", function (f) {
          this.betAmount = prompt("How much would you like to bet? Minimum $25")
          $('.Bank').text(Number($('.Bank').text()) - this.betAmount);
          $('.BetAmount').text(this.betAmount);
          $('#NewRound').toggleClass('hidden');
          blackjack.newRound();
          blackjack.shuffleDeck();
          blackjack.gameMechanic();
        })
      });
    }
  },

  newRound: function () {
    for (var i = 0; i < this.inPlay.playerCards.length; i++) {
      this.usedCards.push(this.inPlay.playerCards[i])
    }
    for (var j = 0; j < this.inPlay.dealerCards.length; j++) {
      this.usedCards.push(this.inPlay.dealerCards[j])
    }
    this.inPlay.playerCards = [];
    this.inPlay.dealerCards = [];
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
    this.usedCards = [];
  }
};

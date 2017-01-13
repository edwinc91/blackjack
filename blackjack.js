var deck = [
  {Card: '2', Suit: 'D', Value: 2},
  {Card: '2', Suit: 'C', Value: 2},
  {Card: '2', Suit: 'H', Value: 2},
  {Card: '2', Suit: 'S', Value: 2},
  {Card: '3', Suit: 'D', Value: 3},
  {Card: '3', Suit: 'C', Value: 3},
  {Card: '3', Suit: 'H', Value: 3},
  {Card: '3', Suit: 'S', Value: 3},
  {Card: '4', Suit: 'D', Value: 4},
  {Card: '4', Suit: 'C', Value: 4},
  {Card: '4', Suit: 'H', Value: 4},
  {Card: '4', Suit: 'S', Value: 4},
  {Card: '5', Suit: 'D', Value: 5},
  {Card: '5', Suit: 'C', Value: 5},
  {Card: '5', Suit: 'H', Value: 5},
  {Card: '5', Suit: 'S', Value: 5},
  {Card: '6', Suit: 'D', Value: 6},
  {Card: '6', Suit: 'C', Value: 6},
  {Card: '6', Suit: 'H', Value: 6},
  {Card: '6', Suit: 'S', Value: 6},
  {Card: '7', Suit: 'D', Value: 7},
  {Card: '7', Suit: 'C', Value: 7},
  {Card: '7', Suit: 'H', Value: 7},
  {Card: '7', Suit: 'S', Value: 7},
  {Card: '8', Suit: 'D', Value: 8},
  {Card: '8', Suit: 'C', Value: 8},
  {Card: '8', Suit: 'H', Value: 8},
  {Card: '8', Suit: 'S', Value: 8},
  {Card: '9', Suit: 'D', Value: 9},
  {Card: '9', Suit: 'C', Value: 9},
  {Card: '9', Suit: 'H', Value: 9},
  {Card: '9', Suit: 'S', Value: 9},
  {Card: '10', Suit: 'D', Value: 10},
  {Card: '10', Suit: 'C', Value: 10},
  {Card: '10', Suit: 'H', Value: 10},
  {Card: '10', Suit: 'S', Value: 10},
  {Card: 'J', Suit: 'D', Value: 10},
  {Card: 'J', Suit: 'C', Value: 10},
  {Card: 'J', Suit: 'H', Value: 10},
  {Card: 'J', Suit: 'S', Value: 10},
  {Card: 'Q', Suit: 'D', Value: 10},
  {Card: 'Q', Suit: 'C', Value: 10},
  {Card: 'Q', Suit: 'H', Value: 10},
  {Card: 'Q', Suit: 'S', Value: 10},
  {Card: 'K', Suit: 'D', Value: 10},
  {Card: 'K', Suit: 'C', Value: 10},
  {Card: 'K', Suit: 'H', Value: 10},
  {Card: 'K', Suit: 'S', Value: 10},
  {Card: 'A', Suit: 'D', Value: 1},
  {Card: 'A', Suit: 'C', Value: 1},
  {Card: 'A', Suit: 'H', Value: 1},
  {Card: 'A', Suit: 'S', Value: 1}
];

var clickTest = document.querySelector('#HitMe')
clickTest.addEventListener("click", function (eventObject) {
  console.log(eventObject)
  console.log(this)
});

var startGame = $('#Start').on("click", function (e) {
  // $('div#playerCardArea').after('<div id="playerCards" class="cardstack" style="font-size: 12px;">')
  // $('div#dealerCardArea').after('<div id="dealerCards" class="cardstack" style="font-size: 12px;">')
  $('#Bet').one("click", function (f) {
    this.betAmount = prompt("How much would you like to bet? Minimum $25")
    // console.log(this);
    //come back later and fix this while loop..turns into an infinite loop, probably because the second prompt input doesnt register
    // if (this.betAmount < 25 || this.betAmount == NaN) {
    //   console.log(this.betAmount)
    //   this.betTryTwo = prompt("I'm sorry, that's not enough to begin! Please bet at least $25")
    //   if (this.betTryTwo < 25 || this.betTryTwo == NaN) {
    //     console.log(this)
    //     prompt ("I'm sorry, that's not enough to begin! Please bet at least $25")
    //   } else {
    //   $('.Bank').text(Number($('.Bank').text()) - this.betTryTwo);
    //   // blackQ.dealPlayerCard1();
    //   }
    // } else if ($('.Bank').text(Number($('.Bank').text()) < this.betAmount)) {
    //   prompt("It appears you don't have enough money to make that bet!")
    // } else {
      $('.Bank').text(Number($('.Bank').text()) - this.betAmount);
      $('.BetAmount').text(this.betAmount);
      $('#Start').toggleClass('hidden');
      blackjack.gameMechanic();
    // }
  })
});

$('#Reset').off().on("click", function (e) {
  if ($('#Start').attr('class') == "hidden") {
    $('#Start').toggleClass('hidden')
  }
  if ($('#NewRound').attr('class') !== "hidden") {
    $('#NewRound').toggleClass('hidden')
  }
  $('.Bank').text(500);
  $('.BetAmount').text(0);
  $('.rounds').text(0);
  $('.PlayerValue').text(0);
  $('.DealerValue').text(0);
  blackjack.resetGame();
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
    this.playerCard();
    this.playerAceValueChecker();
    this.playerValue();
    this.dealerCard();
    this.renderDealerCards();
    this.dealerAceValueChecker();
    this.dealerValue();
    this.updateDealerCardValue();
    this.playerCard();
    this.playerValue();
    this.playerAceValueChecker();
    this.playerValue();
    this.updatePlayerCardValue();
    this.dealerCard();
    this.renderDealerCardHidden();
    // this.dealerFirstCardValueOnly();
    // this.updateDealerCardValue();
    this.blackjackNotifier();
    console.log(this.inPlay.dealerCards)
  },

  blackjackNotifier: function () {
    this.dealerAceValueChecker();
    this.dealerValue();
    if (this.inPlay.playerCards.length == 2 && this.playerCardValue == 21 && this.playerCardValue == this.dealerCardValue) {
      setTimeout(function () {
        alert("Blackjack all around!")
      }, 500)
      this.renderDealerCards();
      this.updateDealerCardValue();
      this.outcome();
    } else if (this.inPlay.playerCards.length == 2 && this.playerCardValue == 21) {
      setTimeout(function () {
        alert("Player Blackjack!")
      }, 500)
      this.renderDealerCards();
      this.updateDealerCardValue();
      this.outcome();
    } else if (this.inPlay.dealerCards.length == 2 && this.dealerCardValue == 21) {
      setTimeout(function () {
        alert("Dealer Blackjack!")
      })
      this.renderDealerCards();
      this.updateDealerCardValue();
      this.outcome();
    } else {
      $('#HitMe').off().one('click', function (g) {
        console.log(g)
        console.log("clicked Hit Me")
        blackjack.playerHit();
      });
      $('#Stay').off().one('click', function (h) {
        // blackjack.dealerAceValueChecker();
        blackjack.dealerHitMechanic();
      });
    }
  },

  dealCard: function () {
    var cardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var actualCard = deck[cardDealtRandomizedNumber];
    this.inPlay.cards.push(actualCard)
    deck.splice(cardDealtRandomizedNumber, 1);
  },

  playerCard: function () {
    this.dealCard()
    this.inPlay.playerCards.push(this.inPlay.cards[0])
    var cardRank = this.inPlay.cards[0].Card
    var cardSuit = this.inPlay.cards[0].Suit
    if (cardSuit == 'D') {
      $('div#playerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &diams; </div>')
    } else if (cardSuit == 'C') {
      $('div#playerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &hearts; </div>')
    } else if (cardSuit == 'H') {
      $('div#playerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &clubs; </div>')
    } else if (cardSuit == 'S') {
      $('div#playerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &spades; </div>')
    }
    this.inPlay.cards.splice(0, 1)
  },

  dealerCard: function () {
    this.dealCard()
    this.inPlay.dealerCards.push(this.inPlay.cards[0])
    this.inPlay.cards.splice(0, 1)
  },

  renderDealerCards: function () {
    // $('div#dealerCards').detach()
    // $('div#dealerCardArea').after('<div id="dealerCards" class="cardstack" style="font-size: 12px;">')
    // if (this.inPlay.dealerCards.length = 1) {
    //   cardRank = this.inPlay.dealerCards[0].Card
    //   cardSuit = this.inPlay.dealerCards[0].Suit
    //   if (cardSuit == 'D') {
    //     $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &diams; </div>')
    //   } else if (cardSuit == 'C') {
    //     $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &hearts; </div>')
    //   } else if (cardSuit == 'H') {
    //     $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &clubs; </div>')
    //   } else if (cardSuit == 'S') {
    //     $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &spades; </div>')
    //   }
    // } else if (this.inPlay.dealerCards.length = 2) {
    //   $('div#dealerCards').append('<div class="card rank"> + Hidden! + <br/></div>')
    // } else {
      $('div#dealerCards').remove()
      $('div#dealerCardArea').after('<div id="dealerCards" class="cardstack" style="font-size: 12px;">')
      for (var i = 0; i < this.inPlay.dealerCards.length; i++) {
        cardRank = this.inPlay.dealerCards[i].Card
        cardSuit = this.inPlay.dealerCards[i].Suit
        if (cardSuit == 'D') {
          $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &diams; </div>')
        } else if (cardSuit == 'C') {
          $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &hearts; </div>')
        } else if (cardSuit == 'H') {
          $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &clubs; </div>')
        } else if (cardSuit == 'S') {
          $('div#dealerCards').append('<div class="card rank'+ cardRank + cardSuit + '">' + cardRank + '<br/> &spades; </div>')
        }
      }
    // }
  },

  renderDealerCardHidden: function () {
    $('div#dealerCards').append('<div class="card rank"> + Hidden! + <br/></div>')
  },

  updatePlayerCardValue: function () {
    $('.PlayerValue').text(this.playerCardValue)
  },

  updateDealerCardValue: function () {
    $('.DealerValue').text(this.dealerCardValue)
  },

  playerValue: function () {
    this.playerCardValue = 0;
    for (var i = 0; i < this.inPlay.playerCards.length; i++) {
      this.playerCardValue += parseInt(this.inPlay.playerCards[i].Value)
    }
  },

  dealerValue: function () {
    this.dealerCardValue = 0;
    for (var i = 0; i < this.inPlay.dealerCards.length; i++) {
      this.dealerCardValue += parseInt(this.inPlay.dealerCards[i].Value)
    }
  },

  // dealerFirstCardValueOnly: function () {
  //   // console.log(this)
  //   this.dealerCardValue = this.inPlay.dealerCards[0].Value
  // },

  playerAceValueChecker: function () {
    for (var i = 0; i < this.inPlay.playerCards.length; i++) {
      console.log(this.playerCardValue);
      if (this.inPlay.playerCards[i].Card == "A" && (this.playerCardValue + 10) < 22) {
        this.inPlay.playerCards[i].Value = 11
      } else if (this.inPlay.playerCards[i].Card == "A" && (this.playerCardValue + 10) > 22) {
        this.inPlay.playerCards[i].Value = 1
      }
    }
  },

  dealerAceValueChecker: function () {
    if (this.inPlay.dealerCards.length == 1 && this.inPlay.dealerCards[0].Card == "A") {
      this.inPlay.dealerCards[0].Value = 11
    } else {
      for (var i = 0; i < this.inPlay.dealerCards.length; i++) {
        if (this.inPlay.dealerCards[i].Card == "A" && (this.dealerCardValue + 10) < 22) {
          this.inPlay.dealerCards[i].Value = 11
        } else if (this.inPlay.dealerCards[i].Card == "A" && (this.dealerCardValue + 10) > 22) {
          this.inPlay.dealerCards[i].Value = 1
        }
      }
    }
  },

  playerHit: function () {
    // this.playerAceValueChecker();
    // this.playerValue();
    this.playerCard();
    // this.playerValue();
    this.playerAceValueChecker();
    this.playerValue();
    this.didPlayerBust();
  },

  didPlayerBust: function () {
    if (this.playerCardValue > 21) {
      this.updatePlayerCardValue();
      this.renderDealerCards();
      this.dealerValue();
      this.updateDealerCardValue();
      this.outcome();
    } else {
      this.updatePlayerCardValue();
      $('#HitMe').off().one('click', function (g) {
        console.log(g)
        console.log("clicked Hit Me")
        blackjack.playerHit();
      })
      // $('#Stay').one('click', function (h) {
      //   blackjack.dealerHitMechanic();
      // })
    }
  },

  dealerHit: function () {
    console.log("DEALER HAS HIT")
    this.dealerValue();
    this.dealerCard();
    this.renderDealerCards();
    this.dealerValue();
    this.dealerAceValueChecker();
    this.dealerValue();
  },

  dealerHitMechanic: function () {
    console.log("DEALER HIT MECHANIC IS RUNNING")
    this.renderDealerCards();
    this.dealerAceValueChecker();
    this.dealerValue();
    this.updateDealerCardValue();
    if (this.dealerCardValue < 17) {
      setTimeout(function () {
        console.log("DEALER HAS HIT")
        blackjack.dealerHit();
        setTimeout(function () {
          blackjack.dealerHitMechanic();
        }, 500)
      }, 1000)
      // blackjack.dealerHit();
      // this.updateDealerCardValue();
      // this.dealerHitMechanic();
    } else {
      setTimeout(function () {
        blackjack.outcome();
      }, 1000)
    }
  },

  outcome: function () {
    if (this.playerCardValue > 21) {
      setTimeout(function () {
        alert("Player Busts! Dealer Wins!")
      }, 500)
      $('.BetAmount').text(0);
    } else if (this.dealerCardValue > 21) {
      setTimeout(function () {
        alert("Dealer Busts! Player Wins!")
      }, 500)
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    } else if (this.playerCardValue > this.dealerCardValue) {
      setTimeout(function () {
        alert("Player Wins!")
      }, 500)
      $('.Bank').text(Number($('.Bank').text()) + (Number($('.BetAmount').text() * 1.5)));
      $('.BetAmount').text(0);
    } else if (this.playerCardValue < this.dealerCardValue) {
      setTimeout(function () {
        alert("Dealer Wins!")
      }, 500)
      $('.BetAmount').text(0);
    } else {
      setTimeout(function () {
        alert("Push!")
      }, 500)
      $('.Bank').text(Number($('.Bank').text()) + Number($('.BetAmount').text()));
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
    $('div#playerCards').remove();
    $('div#dealerCards').remove();
    $('div#playerCardArea').after('<div id="playerCards" class="cardstack" style="font-size: 12px;">')
    $('div#dealerCardArea').after('<div id="dealerCards" class="cardstack" style="font-size: 12px;">')
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

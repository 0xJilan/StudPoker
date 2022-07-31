const generateDeck = (suits, values) => {
  let deck = [];
  suits.map((suit) => {
    values.map((value) => deck.push(suit + value));
  });
  return deck;
};

const getTenCardsFromADeck = (deck) => {
  let arrayShuffled = deck.sort(() => {
    return 0.5 - Math.random();
  });
  return arrayShuffled.slice(0, 10);
};

const isEven = (value) => (value % 2 == 0 ? true : false);

const dispatchCardsBetweenPlayers = (cards) => {
  let playerDeck = [];
  let bankDeck = [];
  cards.map((card, index) => {
    isEven(index) ? playerDeck.push(card) : bankDeck.push(card);
  });

  return { playerDeck, bankDeck };
};

const hideBankDeck = (bankDeck) => {
  return ["*", "*", "*", "*", bankDeck[4]];
};

export {
  generateDeck,
  getTenCardsFromADeck,
  isEven,
  dispatchCardsBetweenPlayers,
  hideBankDeck,
};

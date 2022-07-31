const generateDeck = (suits, values) => {
  let deck = [];
  suits.map((suit) => {
    values.map((value) => deck.push(suit + value));
  });
  return deck;
};

const getNineCardsFromADeck = (deck) => {
  let arrayShuffled = deck.sort(() => {
    return 0.5 - Math.random();
  });
  return arrayShuffled.slice(0, 9);
};

const dispatchCardsBetweenPlayersAndTable = (cards) => {
  let playerDeck = [];
  let bankDeck = [];
  let commonDeck = [];

  cards.map((card, index) => {
    index === 0 || index === 2
      ? playerDeck.push(card)
      : index === 1 || index === 3
      ? bankDeck.push(card)
      : commonDeck.push(card);
  });

  return { playerDeck, bankDeck, commonDeck };
};

export {
  generateDeck,
  getNineCardsFromADeck,
  dispatchCardsBetweenPlayersAndTable,
};

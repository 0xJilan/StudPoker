const generateDeck = (suits, values) => {
  let suitsInArray = Object.keys(suits);
  let valuesInArray = Object.keys(values);
  let deck = [];

  suitsInArray.map((suit) => {
    valuesInArray.map((value) => deck.push(value + suit));
  });
  return deck;
};

const shuffleDeck = (deck) => deck.sort(() => 0.5 - Math.random());

const getTenCardsFromADeck = (deck) => deck.slice(0, 10);

const improveCardsReadability = (deck, values, suits) => {
  return deck.map((card) => values[card[0]] + suits[card[1]]);
};

const hideBankDeck = (bankDeck) => ["*", "*", "*", "*", bankDeck[4]];

const sortDeckByValuesAndSuits = (deck) => ({
  sortedValues: deck.map((a) => a[0]).sort(),
  sortedSuits: deck.map((a) => a[1]).sort(),
});

export {
  generateDeck,
  shuffleDeck,
  getTenCardsFromADeck,
  improveCardsReadability,
  hideBankDeck,
  sortDeckByValuesAndSuits,
};

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

export { generateDeck, getNineCardsFromADeck };

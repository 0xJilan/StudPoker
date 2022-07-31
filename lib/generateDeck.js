const generateDeck = (suits, values) => {
  let deck = [];
  suits.map((suit) => {
    values.map((value) => deck.push(suit + value));
  });
  return deck;
};

const isSameSuits = (suitA, suitB) => {
  return suitA === suitB;
};

export { generateDeck, isSameSuits };

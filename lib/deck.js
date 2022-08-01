const generateDeck = (suits, values) => {
  let deck = [];
  suits.map((suit) => {
    values.map((value) => deck.push([value, suit]));
  });
  return deck;
};

const getTenCardsFromADeck = (deck) => {
  let arrayShuffled = deck.sort(() => {
    return 0.5 - Math.random();
  });
  return arrayShuffled.slice(0, 10);
};

const hideBankDeck = (bankDeck) => {
  return ["*", "*", "*", "*", bankDeck[4]];
};
const sortDeckBy = (deck, type) =>
  type === "value"
    ? deck.sort((a, b) => a[0] - b[0])
    : deck.sort((a, b) => (a[1] > b[1] ? 1 : -1));

export { generateDeck, getTenCardsFromADeck, hideBankDeck, sortDeckBy };

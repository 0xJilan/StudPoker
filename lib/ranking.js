const isFlush = (deckSortedBySuits) => {
  return deckSortedBySuits[0] === deckSortedBySuits[4];
};

const isStraight = (deckSortedByValues) => {
  const first = deckSortedByValues[0].charCodeAt(0);
  return deckSortedByValues.every(
    (f, index) => f.charCodeAt(0) - first === index
  );
};

const getDuplicateValues = (deckSortedByValues) => {
  const count = (card, nextCard) => {
    card[nextCard] = (card[nextCard] || 0) + 1;
    return card;
  };
  return deckSortedByValues.reduce(count, {});
};

export { isFlush, isStraight, getDuplicateValues };

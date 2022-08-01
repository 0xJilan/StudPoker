const isFlush = (deckSortedBySuits) => {
  return deckSortedBySuits[0] === deckSortedBySuits[4];
};

const isStraight = (deckSortedByValues) => {
  const first = deckSortedByValues[0].charCodeAt(0);
  return deckSortedByValues.every(
    (f, index) => f.charCodeAt(0) - first === index
  );
};

export { isFlush, isStraight };

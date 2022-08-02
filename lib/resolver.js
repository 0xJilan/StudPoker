const isFlush = (deckSortedBySuits) => {
  return deckSortedBySuits[0] === deckSortedBySuits[4];
};

const isStraight = (deckSortedByValues) => {
  const isLowStraight = deckSortedByValues.join("") === "AJKLM";
  const first = deckSortedByValues[0].charCodeAt(0);
  return (
    deckSortedByValues.every((f, index) => f.charCodeAt(0) - first === index) ||
    isLowStraight
  );
};

const isDuplicatesValues = (deckSortedByValues) => {
  const count = (card, nextCard) => {
    card[nextCard] = (card[nextCard] || 0) + 1;
    return card;
  };
  const objectOfDuplicatesValues = deckSortedByValues.reduce(count, {});
  return Object.values(objectOfDuplicatesValues).reduce(count, {});
};

export { isFlush, isStraight, isDuplicatesValues };

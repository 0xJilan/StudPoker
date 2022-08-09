import {
  isKingAndAce,
  isFlush,
  isRoyalFlush,
  isStraight,
  countDuplicatesValues,
  getPoints,
} from "./resolver.js";

const getRankingOfDeck = (deckSorted) => {
  const { sortedValues, sortedSuits } = deckSorted;
  const checkDuplicatesValues = countDuplicatesValues(sortedValues);

  let rank = 0;
  let points = 0;
  let hand = "";

  (isRoyalFlush(sortedValues, sortedSuits) &&
    ((rank = 1000), (hand = "Royal Flush"))) ||
    (isFlush(sortedSuits) &&
      isStraight(sortedValues) &&
      ((rank = 900),
      (points = getPoints(sortedValues)),
      (hand = "Straight Flush"))) ||
    (checkDuplicatesValues[4] &&
      ((rank = 800),
      (points = getPoints(checkDuplicatesValues[4], "duplicates", 4)),
      (hand = "Four of a Kind"))) ||
    (checkDuplicatesValues[3] &&
      checkDuplicatesValues[2] &&
      ((rank = 700),
      (points = getPoints(checkDuplicatesValues[3], "duplicates", 3)),
      (hand = "Full"))) ||
    (isFlush(sortedSuits) &&
      ((rank = 600), (points = getPoints(sortedValues)), (hand = "Flush"))) ||
    (isStraight(sortedValues) &&
      ((rank = 500),
      (points = getPoints(sortedValues)),
      (hand = "Straight"))) ||
    (checkDuplicatesValues[3] &&
      ((rank = 400),
      (points = getPoints(checkDuplicatesValues[3], "duplicates", 3)),
      (hand = "Three of a kind"))) ||
    (checkDuplicatesValues[2] &&
      checkDuplicatesValues[2].length > 1 &&
      ((rank = 300),
      (points = getPoints(checkDuplicatesValues[2], "duplicates", 2)),
      (hand = "Two pairs"))) ||
    (checkDuplicatesValues[2] &&
      ((rank = 200),
      (points = getPoints(checkDuplicatesValues[2], "duplicates", 2)),
      (hand = "One pair"))) ||
    (isKingAndAce(sortedValues) && ((rank = 100), (hand = "AK"))) ||
    0;

  return {
    score: rank + points,
    hand,
  };
};

export { getRankingOfDeck };

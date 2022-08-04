import {
  isKingAndAce,
  isFlush,
  isStraight,
  isDuplicatesValues,
} from "./resolver.js";

const getRankingOfDeck = (deckSorted) => {
  const { sortedValues, sortedSuits } = deckSorted;
  const checkDuplicatesValues = isDuplicatesValues(sortedValues);
  let rank = 0;
  let hand = "";

  (isFlush(sortedSuits) &&
    isStraight(sortedValues) &&
    ((rank = +900), (hand = "Straight Flush"))) ||
    (checkDuplicatesValues[4] && ((rank = +800), (hand = "Four of a Kind"))) ||
    (checkDuplicatesValues[3] &&
      checkDuplicatesValues[2] &&
      ((rank = +700), (hand = "Full"))) ||
    (isFlush(sortedSuits) && ((rank = +600), (hand = "Flush"))) ||
    (isStraight(sortedValues) && ((rank = +500), (hand = "Straight"))) ||
    (checkDuplicatesValues[3] && ((rank = +400), (hand = "Three of a kind"))) ||
    (checkDuplicatesValues[2] > 1 && ((rank = +300), (hand = "Two pairs"))) ||
    (checkDuplicatesValues[2] && ((rank = +200), (hand = "One pair"))) ||
    (isKingAndAce(sortedValues) && ((rank = +100), (hand = "AK"))) ||
    0;

  return {
    rank,
    hand,
  };
};

export { getRankingOfDeck };

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
  let hand = "Nothing";
  let payout = 0;

  (isRoyalFlush(sortedValues, sortedSuits) &&
    ((rank = 1000), (hand = "Royal Flush"), (payout = 100))) ||
    (isFlush(sortedSuits) &&
      isStraight(sortedValues) &&
      ((rank = 900),
      (points = getPoints(sortedValues)),
      (hand = "Straight Flush"),
      (payout = 50))) ||
    (checkDuplicatesValues[4] &&
      ((rank = 800),
      (points = getPoints(checkDuplicatesValues[4], "duplicates", 4)),
      (hand = "Four of a Kind"),
      (payout = 20))) ||
    (checkDuplicatesValues[3] &&
      checkDuplicatesValues[2] &&
      ((rank = 700),
      (points = getPoints(checkDuplicatesValues[3], "duplicates", 3)),
      (hand = "Full"),
      (payout = 7))) ||
    (isFlush(sortedSuits) &&
      ((rank = 600),
      (points = getPoints(sortedValues)),
      (hand = "Flush"),
      (payout = 5))) ||
    (isStraight(sortedValues) &&
      ((rank = 500),
      (points = getPoints(sortedValues)),
      (hand = "Straight"),
      (payout = 4))) ||
    (checkDuplicatesValues[3] &&
      ((rank = 400),
      (points = getPoints(checkDuplicatesValues[3], "duplicates", 3)),
      (hand = "Three of a kind"),
      (payout = 3))) ||
    (checkDuplicatesValues[2] &&
      checkDuplicatesValues[2].length > 1 &&
      ((rank = 300),
      (points = getPoints(checkDuplicatesValues[2], "duplicates", 2)),
      (hand = "Two pairs"),
      (payout = 2))) ||
    (checkDuplicatesValues[2] &&
      ((rank = 200),
      (points = getPoints(checkDuplicatesValues[2], "duplicates", 2)),
      (hand = "One pair"),
      (payout = 1))) ||
    (isKingAndAce(sortedValues) && ((rank = 100), (hand = "AK"))) ||
    0;

  return {
    score: rank + points,
    hand,
    payout,
  };
};

const getWinner = (bank, player) =>
  bank.score >= player.score ? "bank" : "player";

const isBankQualified = (bank) => (bank.score >= 100 ? true : false);

const getPayout = (winner, qualified, player, betAmount) => {
  return {
    winner: winner,
    bankQualified: qualified,
    bankPayout: !qualified
      ? -betAmount
      : winner === "bank"
      ? betAmount * 3
      : -(betAmount + betAmount * 2 * player.payout),
    playerPayout: !qualified
      ? betAmount
      : winner === "bank"
      ? -(betAmount * 3)
      : betAmount + betAmount * 2 * player.payout,
  };
};

export { getRankingOfDeck, getWinner, isBankQualified, getPayout };

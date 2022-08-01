//import inquirer from "inquirer";
import { suits, values, distributeCards } from "./lib/cards.js";
import {
  generateDeck,
  shuffleDeck,
  getTenCardsFromADeck,
  improveCardsReadability,
  hideBankDeck,
  sortDeckByValuesAndSuits,
} from "./lib/deck.js";
import { isFlush, isStraight } from "./lib/ranking.js";

const newDeck = generateDeck(suits, values);
const deckShuffled = shuffleDeck(newDeck);
const tenCards = getTenCardsFromADeck(deckShuffled);
const distributedCards = distributeCards(tenCards);
const { playerDeck, bankDeck } = distributedCards;
const bankDeckReadable = improveCardsReadability(bankDeck, values, suits);
const playerDeckReadable = improveCardsReadability(playerDeck, values, suits);
const hiddenBankDeck = hideBankDeck(bankDeckReadable);
console.log("Bank deck :", hiddenBankDeck);
console.log("Player deck :", playerDeckReadable);
console.log("Bank deck :", bankDeckReadable);
const { sortedValues, sortedSuits } = sortDeckByValuesAndSuits(playerDeck);
console.log("player deck sorted by values :", sortedValues);
console.log("player deck sorted by suits :", sortedSuits);
console.log("is Flush ? : ", isFlush(sortedSuits));
console.log("is Straight ? : ", isStraight(sortedValues));

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

let amountBet = 1;
console.log("Welcome aboard fren !");
console.log(`You choose to bet ${amountBet}ETH`);
console.log("Now I'm going to shuffle the cards and deal them !");
console.log("May the force be with you...");
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
console.log(`You choose to bet moar to see the bank cards...`);
console.log("Bank deck :", bankDeckReadable);
console.log(`Analyse of PlayerDeck...`);
const { sortedValues, sortedSuits } = sortDeckByValuesAndSuits(playerDeck);
console.log("player deck sorted by values :", sortedValues);
console.log("player deck sorted by suits :", sortedSuits);

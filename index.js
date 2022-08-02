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
import { getRankingOfDeck } from "./lib/ranking.js";

console.log("Hey Fren, Take seat and bet 1ETH");
const newDeck = generateDeck(suits, values);
const deckShuffled = shuffleDeck(newDeck);
const tenCards = getTenCardsFromADeck(deckShuffled);
const distributedCards = distributeCards(tenCards);
const { playerDeck, bankDeck } = distributedCards;
// const playerDeck = ["DC", "EC", "FH", "GH", "HD"] =====> exemple of a given player deck
// const bankDeck = ["LS", "JC", "AD", "KH", "MS"] =====> exemple of a given bank deck

const bankDeckReadable = improveCardsReadability(bankDeck, values, suits);
const playerDeckReadable = improveCardsReadability(playerDeck, values, suits);
const hiddenBankDeck = hideBankDeck(bankDeckReadable);
console.log("Bank deck :", hiddenBankDeck);
console.log("Player deck :", playerDeckReadable);
console.log("Bank deck :", bankDeckReadable);
const playerDeckSorted = sortDeckByValuesAndSuits(playerDeck);
const bankDeckSorted = sortDeckByValuesAndSuits(bankDeck);

console.log("ranking of player deck:", getRankingOfDeck(playerDeckSorted));
console.log("ranking of bank deck:", getRankingOfDeck(bankDeckSorted));

//handle case of Royal Flush
//handle case of AK
// Handle case of 'Who win' between same result; (better ranking)

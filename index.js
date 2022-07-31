import { suits, values } from "./lib/cards.js";
import {
  generateDeck,
  getNineCardsFromADeck,
  dispatchCardsBetweenPlayersAndTable,
} from "./lib/deck.js";

console.log("Welcome aboard fren !");
console.log("let's shuffle the cards..");

const newDeck = generateDeck(suits, values);
const nineRandomCards = getNineCardsFromADeck(newDeck);

console.log("...aaaaaaaannd let's see !");
console.log(nineRandomCards);

const displatchedCards = dispatchCardsBetweenPlayersAndTable(nineRandomCards);
console.log("Your cards : ", displatchedCards.playerDeck);
console.log("Bank cards : ", displatchedCards.bankDeck);
console.log("Table cards : ", displatchedCards.commonDeck);

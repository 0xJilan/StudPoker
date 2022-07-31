import { suits, values } from "./lib/cards.js";
import {
  generateDeck,
  getTenCardsFromADeck,
  dispatchCardsBetweenPlayers,
} from "./lib/deck.js";

console.log("Welcome aboard fren !");

const newDeck = generateDeck(suits, values);
console.log("As you can see, the deck of card is new and clean ! ");
console.log(newDeck);

console.log("Now, let's shuffle and distribute the cards..");
const TenRandomCards = getTenCardsFromADeck(newDeck);
console.log("the 10 random cards are : ", TenRandomCards);
const displatchedCards = dispatchCardsBetweenPlayers(TenRandomCards);
console.log("...aaaaaaaannd let's see !");
console.log("Your cards : ", displatchedCards.playerDeck);
console.log("Bank cards : ", displatchedCards.bankDeck);

// add a console script who wait after user action/decision
// Add a way to bet moar (relance) or giveup.
// hide the 4th first cards of the bank

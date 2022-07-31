import { generateDeck, getNineCardsFromADeck } from "./lib/generateDeck.js";
import { suits, values, isSameSuits } from "./lib/cards.js";

console.log("Welcome aboard fren !");
console.log("let's shuffle the cards..");

const newDeck = generateDeck(suits, values);
const nineRandomCards = getNineCardsFromADeck(newDeck);

console.log("...aaaaaaaannd let's see !");
console.log(nineRandomCards);

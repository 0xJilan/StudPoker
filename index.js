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
import {
  getRankingOfDeck,
  getWinner,
  isBankQualified,
  getPayout,
} from "./lib/ranking.js";

let amountBet = 0.1;
let BankReserve = 100;
let PlayerReserve = 100;
let partyToDo = 7000;
let partyDone = 0;

const simulatePlay = () => {
  console.log(`Hey Fren, Take seat and bet ${amountBet}ETH`);
  const newDeck = generateDeck(suits, values);
  const deckShuffled = shuffleDeck(newDeck);
  const tenCards = getTenCardsFromADeck(deckShuffled);
  const distributedCards = distributeCards(tenCards);
  const { playerDeck, bankDeck } = distributedCards;
  const bankDeckReadable = improveCardsReadability(bankDeck, values, suits);
  const playerDeckReadable = improveCardsReadability(playerDeck, values, suits);
  const hiddenBankDeck = hideBankDeck(bankDeckReadable);
  //console.log("Bank deck :", hiddenBankDeck);
  const playerDeckSorted = sortDeckByValuesAndSuits(playerDeck);
  const bankDeckSorted = sortDeckByValuesAndSuits(bankDeck);
  const playerResult = getRankingOfDeck(playerDeckSorted);
  console.log("Player deck :", playerDeckReadable);
  const bankResult = getRankingOfDeck(bankDeckSorted);
  console.log("Bank deck :", bankDeckReadable);
  const winner = getWinner(bankResult, playerResult);
  const qualified = isBankQualified(bankResult);
  const payout = getPayout(winner, qualified, playerResult, amountBet);
  console.log(payout);
  BankReserve += payout.bankPayout;
  PlayerReserve += payout.playerPayout;
};
while (partyDone < partyToDo && PlayerReserve >= 0 && BankReserve >= 0) {
  simulatePlay();
  partyDone++;
}
console.log("################## FINAL RESULT !!!!!!! #############");
console.log({
  partyDone: partyDone,
  BankReserve: BankReserve,
  PlayerReserve: PlayerReserve,
});

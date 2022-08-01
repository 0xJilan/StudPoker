import inquirer from "inquirer";
import { suits, values, dispatchCardsBetweenPlayers } from "./lib/cards.js";
import {
  generateDeck,
  getTenCardsFromADeck,
  hideBankDeck,
  sortDeckBy,
} from "./lib/deck.js";

console.log("Welcome aboard fren !");
inquirer
  .prompt([
    {
      type: "list",
      name: "betAmount",
      message: "How much ETH you want Bet?",
      choices: [
        { name: "0.01", value: 0.01 },
        { name: "0.1", value: 0.1 },
        { name: "1", value: 1 },
      ],
    },
  ])
  .then((answers) => {
    console.info("You choose to bet:", answers.betAmount, "ETH");
    console.log("Now I'm going to shuffle the cards and deal them !");
    console.log("May the force be with you...");
    const newDeck = generateDeck(suits, values);
    const TenRandomCards = getTenCardsFromADeck(newDeck);
    const displatchedCards = dispatchCardsBetweenPlayers(TenRandomCards);
    console.log("Your cards : ", displatchedCards.playerDeck);
    console.log("Bank cards : ", hideBankDeck(displatchedCards.bankDeck));
    console.log("Do you want to continue or give up ?");
    inquirer
      .prompt([
        {
          type: "list",
          name: "choiceAfterGetCards",
          message: "If you want to continue you must double your initial bet",
          choices: [
            {
              name: `continue and bet ${2 * answers.betAmount}ETH in more`,
              value: 2 * answers.betAmount,
            },
            { name: "Give up !", value: 0 },
          ],
        },
      ])
      .then((answers) => {
        let amountBet = answers.choiceAfterGetCards;
        let initialBet = amountBet / 2;
        if (amountBet > 0) {
          console.log(
            `You choose to continue and add ${amountBet} ETH, to your initial bet of ${initialBet} ETH`
          );
          console.log("the dealer turns over the bank's cards...");
          console.log(displatchedCards.bankDeck);
          console.log(
            "bank deck sorted by value : ",
            sortDeckBy(displatchedCards.bankDeck, "value")
          );
          console.log(
            "bank deck sorted by suits : ",
            sortDeckBy(displatchedCards.bankDeck, "suits")
          );

          // Determiner Si banque est qualifié (As + K ou plus..)

          // Determiner quel est la meilleur combinaison dans un deck de 5 carte
          // Sort cards

          // Determiner qui gagne entre user et banque
        }
      });
  });

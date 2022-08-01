const suits = ["Club", "Diamond", "Heart", "Spade"];

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const isEven = (value) => (value % 2 == 0 ? true : false);

const dispatchCardsBetweenPlayers = (cards) => {
  let playerDeck = [];
  let bankDeck = [];
  cards.map((card, index) => {
    isEven(index) ? playerDeck.push(card) : bankDeck.push(card);
  });

  return { playerDeck, bankDeck };
};

export { suits, values, dispatchCardsBetweenPlayers };

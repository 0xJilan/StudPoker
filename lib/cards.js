const suits = { C: "♣", D: "♦", H: "♥", S: "♠" };
const values = {
  A: "A",
  B: "K",
  C: "Q",
  D: "J",
  E: 10,
  F: 9,
  G: 8,
  H: 7,
  I: 6,
  J: 5,
  K: 4,
  L: 3,
  M: 2,
};

const isEven = (value) => (value % 2 == 0 ? true : false);

const distributeCards = (cards) => {
  let playerDeck = [];
  let bankDeck = [];
  cards.map((card, index) => {
    isEven(index) ? playerDeck.push(card) : bankDeck.push(card);
  });

  return { playerDeck, bankDeck };
};

export { suits, values, distributeCards };

function solve(input) {
  let obj = {};

  for (const line of input) {
    let [player, cards] = line.split(": ");

    if (!obj[player]) {
      obj[player] = new Set(cards.split(", "));
    } else {
      cards.split(", ").forEach((card) => {
        obj[player].add(card);
      });
    }
  }

  let cardMapper = {
    p: { J: 11, Q: 12, K: 13, A: 14 },
    t: {
      S: 4,
      H: 3,
      D: 2,
      C: 1,
    },
  };

  function totalDeckPower(cardsSet) {
    let totalPower = 0;

    cardsSet.forEach((card) => {
      let tokens = card.split("");
      let value = tokens.slice(0, tokens.length - 1).join("");
      let suit = tokens.slice(-1).join("");
      let p = 0;

      if (!cardMapper.p[value]) {
        //between 2 and 10
        p = Number(value);
      } else {
        p = cardMapper.p[value];
      }

      totalPower += p * cardMapper.t[suit];
    });
    return totalPower;
  }

  Object.keys(obj).forEach((player) => {
    console.log(`${player}: ${totalDeckPower(obj[player])}`);
  });
}

console.log(
  solve([
    "Peter: 2C, 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
  ])
);

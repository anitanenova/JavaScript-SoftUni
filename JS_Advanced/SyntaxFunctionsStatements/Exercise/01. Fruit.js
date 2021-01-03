function solve(fruit, weight, price) {
  weight = Number(weight) / 1000;
  let money = Number(price) * weight;
  console.log(
    `I need $${money.toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

console.log(solve("orange", 1563, 2.35));

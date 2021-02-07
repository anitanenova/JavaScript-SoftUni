function totalPrice(product, count) {
  let calc = (a, b) => (a * b).toFixed(2);
  switch (product) {
    case "coffee":
      return calc(count, 1.5);
    case "water":
      return calc(count, 1.0);
    case "coke":
      return calc(count, 1.4);
    case "snacks":
      return calc(count, 2.0);
  }
}

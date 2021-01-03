function order(product, count) {
  let totalPrice = 0.0;
  switch (product) {
    case "water":
      totalPrice = calculate(1.0);
      break;
    case "coffee":
      totalPrice = calculate(1.5);
      break;
    case "coke":
      totalPrice = calculate(1.4);
      break;
    case "snaks":
      totalPrice = calculate(2.0);
      break;
    default:
      totalPrice = calculate(2.0);
      break;
  }

  function calculate(price) {
    return count * price;
  }

  return totalPrice.toFixed(2);
}

console.log(order("water", 0));

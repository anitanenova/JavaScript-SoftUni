function solve(budget, students, priceFlour, priceEgg, priceApron) {
  let freePackages = Math.floor(students / 5);

  let sum =
    (students - freePackages) * priceFlour +
    10 * priceEgg * students +
    Math.ceil(students + students * 0.2) * priceApron;

  if (sum <= budget) {
    return `Items purchased for ${sum.toFixed(2)}$.`;
  } else {
    return `${(sum - budget).toFixed(2)}$ more needed.`;
  }
}

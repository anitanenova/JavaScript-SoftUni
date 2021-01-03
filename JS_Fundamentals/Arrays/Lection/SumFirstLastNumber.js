const { number } = require("prop-types");

function solve(numbers) {
  let fistNumber = Number(numbers[0]);
  let lastNumber = Number(numbers[numbers.length - 1]);
  console.log(fistNumber + lastNumber);
}

solve(["20", "30", "40"]);

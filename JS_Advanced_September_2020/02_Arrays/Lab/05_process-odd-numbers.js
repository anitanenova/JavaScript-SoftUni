function solve(input) {
  let numbers = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 != 0) {
      numbers.push(input[i]);
    }
  }

  let result = numbers.map((x) => x * 2).reverse();

  console.log(result);
}

solve([3, 0, 10, 4, 7, 3]);

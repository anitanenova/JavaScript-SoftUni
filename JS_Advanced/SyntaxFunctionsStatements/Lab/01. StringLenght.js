function solve(first, second, third) {
  let firstLenght = first.length;
  let secondLenght = second.length;
  let thirdLenght = third.length;

  let sum = firstLenght + secondLenght + thirdLenght;
  let average = parseInt(sum / 3); //Math.floor()
  console.log(sum);
  console.log(average);
}

console.log(solve("chocolate", "ice cream", "cake"));

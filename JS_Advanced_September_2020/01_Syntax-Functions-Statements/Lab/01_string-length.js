function solve(firstStr, secondStr, thirdStr) {
  let sum = firstStr.length + secondStr.length + thirdStr.length;
  let average = Math.floor(sum / 3);

  console.log(sum);
  console.log(average);
}

solve("chocolate", "ice cream", "cake");

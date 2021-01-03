function solve(length, numbers) {
  let shortArr = [];
  for (let i = 0; i < length; i++) {
    shortArr += numbers[length - 1 - i] + " ";
  }
  console.log(shortArr);
}

solve(3, ["10", "20", "30", "40", "50", "60"]);

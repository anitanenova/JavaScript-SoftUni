function solve(numbers) {
  let sortArr = numbers.sort((a, b) => a - b);
  let length = numbers.length;
  let output = [];

  for (let i = 0; i < length; i++) {
    if (i % 2 == 0) {
      output.push(sortArr.pop());
    } else {
      output.push(sortArr.shift());
    }
  }

  console.log(output.join(" "));
}

console.log(solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));

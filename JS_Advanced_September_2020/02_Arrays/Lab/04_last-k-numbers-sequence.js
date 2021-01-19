function solve(n, k) {
  let numbers = [1];

  for (let i = 1; i < n; i++) {
    let startIndex = Math.max(0, i - k);
    let currentElement = numbers
      .slice(startIndex, startIndex + k)
      .reduce((a, b) => a + b, 0);
    numbers.push(currentElement);
  }

  console.log(numbers.join(" "));
}

solve(6, 3);

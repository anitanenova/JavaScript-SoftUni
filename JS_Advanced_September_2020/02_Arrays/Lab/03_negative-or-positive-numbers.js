function solve(input) {
  let processedElements = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      processedElements.unshift(input[i]);
    } else {
      processedElements.push(input[i]);
    }
  }

  processedElements.forEach((element) => {
    console.log(element);
  });
}

solve([7, -2, 8, 9]);

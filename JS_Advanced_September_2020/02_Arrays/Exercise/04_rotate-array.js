function solve(input) {
  const amountRotations = input.pop();

  for (let i = 0; i < amountRotations; i++) {
    let lastElement = input.pop();
    input.unshift(lastElement);
  }

  console.log(input.join(" "));
}

solve(["Banana", "Orange", "Coconut", "Apple", "15"]);

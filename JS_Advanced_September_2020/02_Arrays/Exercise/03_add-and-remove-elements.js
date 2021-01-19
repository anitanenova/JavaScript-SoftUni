function solve(input) {
  let numbers = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "add") {
      numbers.push(i + 1);
    } else if (input[i] == "remove") {
      numbers.pop(numbers[i]);
    }
  }

  if (numbers.length == 0) {
    console.log("Empty");
  } else {
    numbers.map((el) => console.log(el));
  }
}

solve(["remove", "remove", "remove"]);

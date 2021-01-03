function solve(numbers, magicNum) {
  for (let i = 0; i < numbers.length; i++) {
    let firstEL = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let secondEl = numbers[j];
      if (Number(firstEL) + Number(secondEl) == magicNum) {
        console.log(firstEL + " " + secondEl);
        break;
      }
    }
  }
}

solve(["1", "7", "6", "2", "19", "27"], 8);

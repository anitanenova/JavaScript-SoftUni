function solve(numbers) {
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    let isBigger = true;
    for (let j = i + 1; j < numbers.length; j++) {
      let nextElement = numbers[j];
      if (element <= nextElement) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      result += element + " ";
    }
  }
  console.log(result);
}

solve(["1", "4", "3", "2"]);

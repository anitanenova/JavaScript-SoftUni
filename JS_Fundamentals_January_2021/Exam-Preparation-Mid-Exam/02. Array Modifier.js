function solve(arr) {
  let initialArr = arr.shift().split(" ");

  initialArr.map(Number);

  for (let i = 0; i < arr.length; i++) {
    let [command, indexOne, indexTwo] = arr[i].split(" ");

    if (command === "swap") {
      let firstNumForSwap = Number(initialArr[indexOne]);

      let secondNumForSwap = Number(initialArr[indexTwo]);

      initialArr[indexOne] = secondNumForSwap;

      initialArr[indexTwo] = firstNumForSwap;
    } else if (command === "multiply") {
      let numForMultiply = Number(initialArr[indexOne]);
      let multiplyNum = Number(initialArr[indexTwo]);

      initialArr[indexOne] = numForMultiply * multiplyNum;
    } else if (command === "decrease") {
      for (let i = 0; i < initialArr.length; i++) {
        initialArr[i] -= 1;
      }
    } else if (command === "end") {
      break;
    }
  }

  return initialArr.join(", ");
}

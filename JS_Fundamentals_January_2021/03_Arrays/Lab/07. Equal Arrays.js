function solve(firstArray, secondArray) {
  let sum = 0;
  let isIdentical = true;
  for (let i = 0; i < firstArray.length; i++) {
    let firstArrayEl = Number(firstArray[i]);
    let secondArrayEl = Number(secondArray[i]);

    if (firstArrayEl != secondArrayEl) {
      isIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    } else {
      sum += firstArrayEl;
    }
  }

  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

solve(["10", "20", "30"], ["10", "20", "30"]);

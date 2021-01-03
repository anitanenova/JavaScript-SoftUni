function solve(firstArr, secondArr) {
  let sum = 0;
  let isIdentical = true;
  for (let i = 0; i < firstArr.length; i++) {
    sum += Number(firstArr[i]);
    if (firstArr[i] != secondArr[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIdentical = false;
      break;
    }
  }
  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

solve(["10", "2", "30"], ["10", "20", "30"]);

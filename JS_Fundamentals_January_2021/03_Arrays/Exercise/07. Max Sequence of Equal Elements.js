function solve(arr) {
  let countSequence = 0;
  let indexStart = 0;
  let maxCountSequence = 0;
  let maxSequenceArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      countSequence++;

      if (countSequence > maxCountSequence) {
        maxCountSequence = countSequence;

        indexStart = i - countSequence + 1;
      }
    } else {
      countSequence = 0;
    }
  }

  for (let i = indexStart; i < indexStart + maxCountSequence + 1; i++) {
    maxSequenceArr.push(arr[i]);
  }

  console.log(maxSequenceArr.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

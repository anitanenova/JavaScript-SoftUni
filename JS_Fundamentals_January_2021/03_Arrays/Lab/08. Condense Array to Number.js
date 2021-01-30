function solve(arr) {
  let numbersArr = arr;

  while (numbersArr.length > 1) {
    let condensedArrdArr = [];
    for (let i = 0; i < numbersArr.length - 1; i++) {
      condensedArrdArr[i] = Number(numbersArr[i] + numbersArr[i + 1]);
    }

    numbersArr = condensedArrdArr;
    condensedArrdArr = 0;
  }

  console.log(Number(numbersArr));
}

solve([2, 10, 3]);

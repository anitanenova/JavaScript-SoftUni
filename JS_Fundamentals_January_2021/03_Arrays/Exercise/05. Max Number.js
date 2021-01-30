function solve(arr) {
  let topIntegersArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    let isTopInteger = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (currentNumber < arr[j]) {
        isTopInteger = false;
        break;
      }
    }

    if (isTopInteger && !topIntegersArr.includes(currentNumber)) {
      topIntegersArr.push(currentNumber);
    }
  }

  console.log(topIntegersArr.join(" "));
}

solve([27, 19, 42, 2, 13, 45, 48]);

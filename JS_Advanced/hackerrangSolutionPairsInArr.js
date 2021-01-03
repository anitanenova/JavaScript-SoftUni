// Complete the pairs function below.
function pairs(k, arr) {
  let firstNum = k[0];
  let secondNum = k[1];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (arr.includes(current - firstNum)) {
      counter = counter + 1;
    } else if (arr.includes(current - secondNum)) {
      counter = counter + 1;
    }
  }

  console.log(counter);
}

pairs(
  [10, 1],
  [
    363374326,
    363374325,
    61825163,
    1073065718,
    1281246024,
    1399469912,
    428047635,
    491595254,
    879792181,
    1069262793,
  ]
);

function solve(input) {
  let arr = input
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  let sumOfArr = arr.reduce((acc, x) => {
    return (acc += Number(x));
  });

  let averageValue = sumOfArr / arr.length;

  let topNumber = [];
  let countTopNumbers = 5;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > averageValue) {
      topNumber.push(arr[i]);
      countTopNumbers--;
    }

    if (countTopNumbers == 0) {
      break;
    }
  }

  let result;

  if (topNumber.length < 1) {
    result = "No";
  } else {
    result = topNumber.join(" ");
  }

  return result;
}

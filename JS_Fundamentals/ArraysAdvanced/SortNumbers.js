let numbers = [10, 5, 6, 2, -100, -50, 80, 20, 30];

let compareFunction = function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }

  //or  return a - b;
};

console.log(numbers);

numbers.sort(compareFunction);

console.log(numbers);

function solve(arr) {
  let field = new Array(arr.shift()).fill(0);
  const indexes = arr
    .shift()
    .split(" ")
    .map((x) => Number(x));

  indexes.forEach((x) => {
    if (field[x] !== undefined) field[x] = 1;
  });

  function moveLeft(arr, index) {
    for (let i = index; i >= 0; i -= index) {
      if (arr[i] === 0) {
        arr[i] = 1;
        break;
      }
    }
    return arr;
  }
  function moveRight(arr, index) {
    for (let i = index; i < arr.length; i += index) {
      if (arr[i] === 0) {
        arr[i] = 1;
        break;
      }
    }
    return arr;
  }

  arr.forEach((x) => {
    let [index, direction, flyLength] = x.split(" ");
    index = Number(index);
    flyLength = Number(flyLength);
    if (field[index] !== 0 && field[index] !== undefined) {
      field[index] = 0;
      direction === "left"
        ? (field = moveLeft(field, index - flyLength))
        : (field = moveRight(field, index + flyLength));
    }
  });

  return field.join(" ");
}
solve([5, "3", "3 left 2", "1 left -2"]);

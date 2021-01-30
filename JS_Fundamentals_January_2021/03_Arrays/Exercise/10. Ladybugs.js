function solve(arr) {
  let field = arr.shift();
  let indexes = arr.shift().split(" ");

  let newArr = [];

  for (let i = 0; i < field; i++) {
    if (indexes.length > 0) {
      newArr.push(1);
      indexes.length--;
    } else {
      newArr.push(0);
    }
  }

  for (let j = 0; j < arr.length; j++) {
    let [index, direction, flyLength] = arr[i];

    if (direction == "right") {
      if (index == 0) {
      }
    }
  }

  console.log(newArr);
}
solve([3, "0 1", "0 right 1", "2 right 1"]);

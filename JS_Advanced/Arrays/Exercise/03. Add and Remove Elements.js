function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      result[i] = i + 1;
    } else if (arr[i] === "remove") {
      result.pop(arr[i]);
    }
  }
  if (result.length <= 0) {
    console.log("Empty");
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined || result[i] == "") {
    } else {
      console.log(result[i]);
    }
  }
}

console.log(solve(["add", "add", "remove", "add", "add"]));

function solve(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let secondEl = arr[j];

      if (currentEl + secondEl == number) {
        console.log(currentEl + " " + secondEl);
      }
    }
  }
}

solve([14, 20, 60, 13, 7, 19, 8], 27);

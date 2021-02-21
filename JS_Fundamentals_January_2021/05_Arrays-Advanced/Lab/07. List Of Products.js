function solve(arr) {
  const sortArr = arr.sort();

  sortArr.map((x, index) => {
    console.log(`${index + 1}.${x}`);
  });
}

solve(["Pot", "Tom", "Oninon", "App"]);

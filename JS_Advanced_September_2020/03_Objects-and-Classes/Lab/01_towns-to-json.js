function solve(input) {
  let data = input.map((row) =>
    row
      .split("|")
      .filter((x) => x != "")
      .map((x) => x.trim())
  );

  let columnName = data.shift();

  let townsArr = [];

  data.forEach((row) => {
    let tableRow = {
      Town: row[0],
      Latitude: Number(Number(row[1]).toFixed(2)),
      Longitude: Number(Number(row[2]).toFixed(2)),
    };

    townsArr.push(tableRow);
  });

  let result = JSON.stringify(townsArr);
  console.log(result);

  console.log(dataRow);
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

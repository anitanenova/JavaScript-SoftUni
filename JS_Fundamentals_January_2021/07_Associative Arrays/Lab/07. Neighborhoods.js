function solve(input) {
  const neighborhoodsArr = input.shift().split(", ");
  let neighborhoodsObj = {};
  let result = "";

  neighborhoodsArr.map((el) => {
    neighborhoodsObj[el] = [];
  });

  input.map((str) => {
    let [street, person] = str.split(" - ");
    if (neighborhoodsObj.hasOwnProperty(street)) {
      neighborhoodsObj[street].push(person);
    }
  });

  Object.keys(neighborhoodsObj)
    .sort((a, b) => {
      return neighborhoodsObj[b].length - neighborhoodsObj[a].length;
    })
    .forEach((key) => {
      result += `${key}: ${neighborhoodsObj[key].length}\n`;

      neighborhoodsObj[key].map((el) => {
        result += `--${el}\n`;
      });
    });

  return result;
}

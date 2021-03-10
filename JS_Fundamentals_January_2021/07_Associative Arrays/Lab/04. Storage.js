function solve(input) {
  let items = {};

  let result = "";

  input.map((str) => {
    let [name, quantity] = str.split(" ");
    quantity = Number(quantity);

    if (items.hasOwnProperty(name)) {
      items[name] += quantity;
    } else {
      items[name] = quantity;
    }
  });

  Object.keys(items).forEach((key) => {
    result += `${key} -> ${items[key]}\n`;
  });

  return result;
}

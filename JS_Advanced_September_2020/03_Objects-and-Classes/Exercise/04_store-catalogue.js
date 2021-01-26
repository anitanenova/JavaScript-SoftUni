function solve(input) {
  let result = {};

  for (const line of input) {
    let [name, price] = line.split(" : ");

    price = Number(price);
    let letter = name[0];

    if (!result[letter]) {
      result[letter] = [];
    }

    let product = { name, price };
    result[letter].push(product);
  }

  let sortedByLetter = Object.entries(result).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let i = 0; i < sortedByLetter.length; i++) {
    console.log(sortedByLetter[i][0]);

    let sortByName = sortedByLetter[i][1].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortByName.forEach((product) => {
      console.log(`  ${product.name}: ${product.price}`);
    });
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T - Shirt : 10 ",
]);

function solve(products) {
  products.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}.${products[i]}`);
  }
}

console.log(solve(["Potatoes", "Apples", "Kiwi"]));

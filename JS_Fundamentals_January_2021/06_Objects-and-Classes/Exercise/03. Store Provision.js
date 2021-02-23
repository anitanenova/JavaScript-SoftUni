function solve(currentStocks, orderedProducts) {
  let products = {};

  for (let i = 0; i < currentStocks.length; i++) {
    if (i % 2 == 0) {
      const currentStock = currentStocks[i];

      const currentStockQuantity = Number(currentStocks[i + 1]);

      products[currentStock] = currentStockQuantity;
    }
  }

  for (let i = 0; i < orderedProducts.length; i++) {
    if (i % 2 == 0) {
      const currentProduct = orderedProducts[i];

      const currentProductQuantity = Number(orderedProducts[i + 1]);
      if (products.hasOwnProperty(currentProduct)) {
        products[currentProduct] += currentProductQuantity;
      } else {
        products[currentProduct] = currentProductQuantity;
      }
    }
  }

  let result = "";

  Object.keys(products).map((key) => {
    result += `${key} -> ${products[key]}\n`;
  });
  return result;
}

console.log(
  solve(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    [
      "Flour",
      "44",
      "Oil",
      "12",
      "Pasta",
      "7",
      "Tomatoes",
      "70",
      "Bananas",
      "30",
    ]
  )
);

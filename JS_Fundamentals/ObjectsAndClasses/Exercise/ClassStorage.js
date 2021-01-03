function solve() {
  class Storage {
    constructor(capacity) {
      this.capacity = Number(capacity);
      this.storage = [];
    }
    totalCost = 0;
    addProduct(product) {
      this.capacity -= product.quantity;
      this.totalCost += product.price * product.quantity;
      this.storage.push(product);
    }

    getProducts() {
      let result = [];
      for (let i = 0; i < this.storage.length; i++) {
        result.push(JSON.stringify(this.storage[i]));
      }
      return result.join("\n");
    }

    totalCost(totalCost) {
      return totalCost;
    }
  }

  let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
  let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
  let productThree = { name: "Bread", price: 1.1, quantity: 8 };
  let storage = new Storage(50);
  storage.addProduct(productOne);
  storage.addProduct(productTwo);
  storage.addProduct(productThree);
  storage.getProducts();
  console.log(storage.capacity);
  console.log(storage.totalCost);
}

console.log(solve());

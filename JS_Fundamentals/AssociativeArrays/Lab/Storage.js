function solve(input) {
  /* 
  //decision with Map  
  
  let map = new Map();

  for (const el of input) {
    let [item, quantity] = el.split(" ");
    quantity = Number(quantity);

    if (map.has(item)) {
      let oldQuantity = map.get(item);
      map.set(item, Number(oldQuantity + quantity));
    } else {
      map.set(item, quantity);
    }
  }

  for (const kvp of map.entries()) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }*/

  //decision with Objects

  let obj = {};

  for (const el of input) {
    let [item, quantity] = el.split(" ");
    quantity = Number(quantity);

    if (obj.hasOwnProperty(item)) {
      let oldQuantity = obj[item];
      obj[item] = oldQuantity + quantity;
    } else {
      obj[item] = quantity;
    }
  }
  console.log(obj);
  for (const kvp of Object.entries(obj)) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

console.log(solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]));

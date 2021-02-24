function solve(arr) {
  let initialList = arr.shift().split("!");

  for (let i = 0; i < arr.length; i++) {
    let [command, product, newItem] = arr[i].split(" ");

    let indexProduct = initialList.indexOf(product);

    if (command === "Go" && product === "Shopping!") {
      break;
    } else {
      if (initialList.includes(product)) {
        if (command === "Unnecessary") {
          initialList.splice(indexProduct, 1);
        } else if (command === "Correct") {
          initialList[indexProduct] = newItem;
        } else if (command === "Rearrange") {
          initialList.splice(indexProduct, 1);
          initialList.push(product);
        }
      } else {
        if (command === "Urgent") {
          initialList.unshift(product);
        }
      }
    }
  }

  return initialList.join(", ");
}

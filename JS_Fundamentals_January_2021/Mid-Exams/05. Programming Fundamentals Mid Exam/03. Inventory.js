function solve(input) {
  let journal = input.shift().split(", ");
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let [command, item] = input[i].split(" - ");

    if (command === "Collect") {
      if (!journal.includes(item)) {
        journal.push(item);
      }
    } else if (command === "Drop") {
      if (journal.includes(item)) {
        journal.splice(journal.indexOf(item), 1);
      }
    } else if (command === "Combine Items") {
      let [oldItem, newItem] = item.split(":");
      let indexOldItem = journal.indexOf(oldItem);
      if (journal.includes(oldItem)) {
        journal.splice(indexOldItem + 1, 0, newItem);
      }
    } else if (command === "Renew") {
      if (journal.includes(item)) {
        let theItem = journal.splice(journal.indexOf(item), 1);
        journal.push(theItem);
      }
    } else if (command === "Craft!") {
      result += journal.join(", ");
    }
  }

  return result;
}

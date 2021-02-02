function addItem() {
  const textInputElement = document.getElementById("newItemText");

  const listItemsElement = document.getElementById("items");

  let newListItem = document.createElement("li");
  newListItem.innerHTML = textInputElement.value;

  listItemsElement.appendChild(newListItem);

  textInputElement.value = "";
}

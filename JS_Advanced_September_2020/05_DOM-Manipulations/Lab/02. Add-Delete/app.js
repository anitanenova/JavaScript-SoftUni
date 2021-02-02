function addItem() {
  const listItemsElement = document.getElementById("items");
  const textInputElement = document.getElementById("newText");

  let newListItemElement = document.createElement("li");
  newListItemElement.innerHTML = textInputElement.value;

  const deleteButtonElement = document.createElement("a");
  deleteButtonElement.href = "#";
  deleteButtonElement.innerText = "[Delete]";

  newListItemElement.appendChild(deleteButtonElement);

  listItemsElement.appendChild(newListItemElement);

  textInputElement.value = "";

  deleteButtonElement.addEventListener("click", function (e) {
    let parentElement = e.target.parentElement;

    parentElement.remove();
  });
}

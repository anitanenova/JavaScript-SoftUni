function addItem() {
  let newItemTextElement = document.getElementById("newItemText");
  newItemTextContent = newItemTextElement.value;

  let newItemValueElement = document.getElementById("newItemValue");
  newItemValueContent = newItemValueElement.value;

  let menuElement = document.getElementById("menu");

  let optionElement = document.createElement("option");

  menuElement.appendChild(optionElement).innerHTML =
    newItemTextContent + " " + newItemValueContent;

  newItemTextElement.value = "";
  newItemValueElement.value = "";
}

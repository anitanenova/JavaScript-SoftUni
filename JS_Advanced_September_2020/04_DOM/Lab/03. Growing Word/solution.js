function growingWord() {
  let changedTitleElement = document.getElementsByTagName("p")[2];

  if (!changedTitleElement.style.font) {
    changedTitleElement.style.font = "2px";
  } else {
    let currentFont = parseInt(changedTitleElement.style.font);
    changedTitleElement.style.font = `${currentFont * 2}px`;
  }

  if (!changedTitleElement.style.color) {
    changedTitleElement.style.color = "blue";
  } else if (changedTitleElement.style.color == "blue") {
    changedTitleElement.style.color = "green";
  } else if (changedTitleElement.style.color == "green") {
    changedTitleElement.style.color = "red";
  } else if (changedTitleElement.style.color == "red") {
    changedTitleElement.style.color = "blue";
  }
}

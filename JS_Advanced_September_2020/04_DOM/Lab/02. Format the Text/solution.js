function solve() {
  let inputElement = document.getElementById("input");

  let inputValueElement = inputElement.innerHTML.toString();

  let arrParagraphs = inputValueElement.split(".");

  let paragraphElement;

  let outputElement = document.getElementById("output");

  for (let i = 0; i < arrParagraphs.length; i += 3) {
    let textParagraph = arrParagraphs.slice(i, i + 3);

    paragraphElement = document.createElement("p");

    if (i + 3 <= arrParagraphs.length) {
      textParagraph[textParagraph.length - 1] += ".";
    }

    paragraphElement.innerHTML = textParagraph.join(". ");
    outputElement.appendChild(paragraphElement);
  }
}

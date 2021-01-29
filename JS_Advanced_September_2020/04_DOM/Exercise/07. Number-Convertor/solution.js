function solve() {
  let numberInputElement = document.getElementById("input");
  let convertItBtnElement = document.getElementsByTagName("button")[0];
  let resultInputElement = document.getElementById("result");

  let selectMenuToElement = document.getElementById("selectMenuTo");

  let binaryOptionElement = document.createElement("option");
  binaryOptionElement.innerHTML = "Binary";
  binaryOptionElement.value = "binary";

  let hexadecimalOptionElement = document.createElement("option");
  hexadecimalOptionElement.innerHTML = "Hexadecimal";
  hexadecimalOptionElement.value = "hexadecimal";

  selectMenuToElement.appendChild(binaryOptionElement);
  selectMenuToElement.appendChild(hexadecimalOptionElement);

  convertItBtnElement.addEventListener("click", function () {
    let result = 0;
    if (selectMenuToElement.value === "binary") {
      result = Number(numberInputElement.value).toString(2);
    } else if (selectMenuToElement.value === "hexadecimal") {
      result = Number(numberInputElement.value).toString(16).toUpperCase();
    }

    resultInputElement.value = result;
  });
}

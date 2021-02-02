function deleteByEmail() {
  const textInputElement = document.getElementsByTagName("input")[0];

  let data = Array.from(document.querySelectorAll("#customers tbody tr td"));

  const resultElement = document.getElementById("result");

  let isInclude = false;

  for (let i = 0; i < data.length; i++) {
    let currentElement = data[i];
    let currentElementValue = data[i].innerHTML;
    if (currentElementValue == textInputElement.value) {
      let parentElement = currentElement.parentElement;

      parentElement.remove();
      resultElement.innerHTML = "Deleted.";
      isInclude = true;
    }
  }

  if (isInclude == false) {
    resultElement.innerHTML = "Not found.";
  }
}

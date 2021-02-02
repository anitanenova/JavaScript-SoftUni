function focus() {
  const inputElements = document.getElementsByTagName("input");

  for (const element of inputElements) {
    element.addEventListener("focus", function (e) {
      let parentElement = e.target.parentElement;
      parentElement.classList = "focused";
    });

    element.addEventListener("blur", function (e) {
      let parentElement = e.target.parentElement;
      parentElement.classList = "";
    });
  }
}

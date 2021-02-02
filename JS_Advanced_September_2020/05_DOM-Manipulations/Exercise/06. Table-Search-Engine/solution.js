function solve() {
  const inputElement = document.getElementById("searchField");
  const searchButtonElement = document.getElementById("searchBtn");

  let data = Array.from(document.querySelectorAll(".container tbody tr"));

  searchButtonElement.addEventListener("click", function () {
    for (const element of data) {
      element.classList.remove("select");
      if (element.innerHTML.includes(inputElement.value)) {
        element.classList = "select";
      }
    }

    inputElement.value = "";
  });
}

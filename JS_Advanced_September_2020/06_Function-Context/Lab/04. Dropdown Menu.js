function solve() {
  const dropdownButtonElement = document.getElementById("dropdown");
  const dropdownElement = document.getElementById("dropdown-ul");
  const boxElement = document.getElementById("box");

  dropdownButtonElement.addEventListener("click", function () {
    if (dropdownElement.style.display == "block") {
      dropdownElement.style.display = "none";

      changeBackgroundColor("black", "white");
    } else {
      dropdownElement.style.display = "block";
    }
  });

  dropdownElement.addEventListener("click", function (e) {
    changeBackgroundColor(e.target.innerHTML, "black");
  });

  function changeBackgroundColor(backgroundColor, color) {
    boxElement.style.backgroundColor = backgroundColor;
    boxElement.style.color = color;
  }
}

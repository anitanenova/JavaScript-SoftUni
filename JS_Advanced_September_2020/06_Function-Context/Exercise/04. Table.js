function solve() {
  const tr = document.getElementsByTagName("tr");
  let lastClicked;

  [...tr].slice(1).forEach((row) => {
    row.addEventListener("click", function (e) {
      let element = e.target.parentNode.style;

      if (
        element.backgroundColor == "" ||
        element.backgroundColor == undefined
      ) {
        element.backgroundColor = "rgb(65,63,94)";

        if (lastClicked) {
          lastClicked.backgroundColor = "";
        }
      } else {
        element.backgroundColor = "";
      }

      lastClicked = element;
    });
  });
}

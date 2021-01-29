function toggle() {
  let btnElement = document.getElementsByClassName("button")[0];

  let textElement = document.getElementById("extra");

  if (btnElement.innerHTML === "More") {
    btnElement.innerHTML = "Less";
    textElement.style.display = "block";
  } else if (btnElement.innerHTML === "Less") {
    btnElement.innerHTML = "More";
    textElement.style.display = "none";
  }
}

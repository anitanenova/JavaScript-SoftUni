function lockedProfile() {
  const buttonElements = [...document.getElementsByTagName("button")];
  buttonElements.forEach((btn) => btn.addEventListener("click", showHide));

  function showHide(e) {
    let triggeredElement = e.target;

    let optionBtnElement = triggeredElement.parentElement.querySelector(
      'input[type="radio"]:checked'
    ).value;

    if (optionBtnElement === "unlock") {
      if (triggeredElement.textContent === "Show more") {
        triggeredElement.parentElement.querySelector("div").style.display =
          "block";
        triggeredElement.textContent = "Hide it";
      } else if (triggeredElement.textContent === "Hide it") {
        triggeredElement.parentElement.querySelector("div").style.display =
          "none";
        triggeredElement.textContent = "Show more";
      }
    }
  }
}

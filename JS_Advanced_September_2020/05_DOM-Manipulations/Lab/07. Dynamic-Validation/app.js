function validate() {
  let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
  const inputEmailTextElement = document.getElementById("email");

  inputEmailTextElement.addEventListener("change", function (e) {
    if (reg.test(e.target.value)) {
      e.target.removeAttribute("class");
    } else {
      e.target.classList = "error";
    }
  });
}

function attachGradientEvents() {
  const gradientElement = document.getElementById("gradient");
  const resultElement = document.getElementById("result");
  gradientElement.addEventListener("mousemove", gradientMove);
  gradientElement.addEventListener("mouseout", gradientOut);

  function gradientMove(event) {
    let power = event.offsetX / (event.target.clientWidth - 1);
    power = Math.trunc(power * 100);
    resultElement.textContent = power + "%";
  }

  function gradientOut() {
    resultElement.textContent = "";
  }
}

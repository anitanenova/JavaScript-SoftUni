function solve() {
  const buttons = Array.from(document.querySelectorAll(".keys button"));
  const expressionOutput = document.getElementById("expressionOutput");
  const resultOutput = document.getElementById("resultOutput");
  const clearBtn = document.getElementsByClassName("clear")[0];

  buttons.map((btn) => {
    btn.addEventListener("click", function () {
      let mathResult = 0;
      let resultCheckedBtns = [];
      if (btn.value !== "=") {
        if (isNaN(btn.value) && btn.value !== ".") {
          expressionOutput.innerHTML += " " + btn.value + " ";
        } else {
          expressionOutput.innerHTML += btn.value;
        }
      } else {
        resultCheckedBtns = expressionOutput.innerHTML.split(" ");
        resultCheckedBtns = resultCheckedBtns.filter((x) => x != "");

        if (resultCheckedBtns.length === 3) {
          let firstOperand = Number(resultCheckedBtns[0]);
          let secondOperand = Number(resultCheckedBtns[2]);

          switch (resultCheckedBtns[1]) {
            case "+":
              mathResult = firstOperand + secondOperand;
              break;
            case "-":
              mathResult = firstOperand - secondOperand;
              break;
            case "/":
              mathResult = firstOperand / secondOperand;
              break;
            case "*":
              mathResult = firstOperand * secondOperand;
              break;
          }
          resultOutput.innerHTML = mathResult;
        } else {
          resultOutput.innerHTML = NaN;
        }
      }
    });
  });

  clearBtn.addEventListener("click", function () {
    expressionOutput.innerHTML = "";
    resultOutput.innerHTML = "";
  });
}

function solve() {
  const addButtons = Array.from(document.getElementsByClassName("add-product"));
  const textareaElement = document.querySelector("body > div > textarea");
  const checkoutBtnElement = document.querySelector("body > div > .checkout");

  let totalPrice = 0;
  let buyedProducts = [];

  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function () {
      let name = document.querySelector(
        `body > div.shopping-cart > div:nth-child(${
          i + 2
        }) > div.product-details > div`
      ).textContent;

      let price = Number(
        document.querySelector(
          `body > div.shopping-cart > div:nth-child(${
            i + 2
          }) > div.product-line-price`
        ).textContent
      );

      let currentProduct = `Added ${name} for ${price.toFixed(
        2
      )} to the cart.\n`;

      textareaElement.innerHTML += currentProduct;

      totalPrice += price;

      if (!buyedProducts.includes(name)) {
        buyedProducts.push(name);
      }
    });
  }

  checkoutBtnElement.addEventListener("click", function () {
    let result = `You bought ${buyedProducts.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;

    textareaElement.innerHTML += result;

    disabledButtons();
  });

  function disabledButtons() {
    const buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach((btn) => (btn.disabled = true));
  }
}

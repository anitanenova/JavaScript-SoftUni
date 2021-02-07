function solve() {
  const [generateButtonElement, buyButtonElement] = [
    ...document.querySelectorAll("button"),
  ];
  const listAreaElement = document.getElementsByTagName("textarea")[0];
  const buyedAreaElement = document.getElementsByTagName("textarea")[1];

  generateButtonElement.addEventListener("click", function (e) {
    let products = JSON.parse(listAreaElement.value);

    products.forEach((product) => {
      let { name, img, price, decFactor } = product;
      let htmlString = `<tr>
      <td><img src="${img}"></td>
      <td><p>${name}</p></td>
      <td><p>${price}</p></td>
      <td><p>${decFactor}</p></td>
      <td><input type="checkbox" /></td></tr>`;

      document
        .querySelectorAll("tbody")[0]
        .insertAdjacentHTML("beforeend", htmlString);
    });
  });

  buyButtonElement.addEventListener("click", function () {
    let [products, prices, factors] = [[], [], []];
    [...document.querySelectorAll("tbody tr")].forEach((tr) => {
      if (tr.querySelectorAll("input")[0].checked) {
        let data = tr.querySelectorAll("p");
        products.push(data[0].textContent);
        prices.push(Number(data[1].textContent));
        factors.push(Number(data[2].textContent));
      }
    });

    let totalPrice = prices.reduce((sum, num) => (sum += num));
    let avgFactor = factors.reduce((sum, num) => (sum += num)) / factors.length;

    buyedAreaElement.textContent = `Bought furniture: ${products.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${avgFactor}`;
  });
}

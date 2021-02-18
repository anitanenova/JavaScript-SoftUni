function getInfo() {
  const inputElement = document.getElementById("stopId");
  const stopId = inputElement.value;
  const stopNameElement = document.getElementById("stopName");
  const listElement = document.getElementById("buses");

  const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      listElement.innerHTML = "";
      stopNameElement.innerHTML = data.name;

      for (const key in data.buses) {
        const newListItemElement = document.createElement("li");
        newListItemElement.textContent = `Bus ${key} arrives in ${data.buses[key]}`;
        listElement.append(newListItemElement);
      }
    })
    .catch(() => {
      listElement.innerHTML = "";
      stopNameElement.innerHTML = "Error";
    });
}

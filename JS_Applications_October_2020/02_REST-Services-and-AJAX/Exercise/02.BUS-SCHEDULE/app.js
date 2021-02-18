function solve() {
  const url = `https://judgetests.firebaseio.com/schedule/`;
  let currentStop = {
    name: "depot",
    next: "depot",
  };

  const departButtonElement = document.getElementById("depart");
  const arriveButtonElement = document.getElementById("arrive");
  const stopInfoElement = document.getElementsByClassName("info")[0];

  function depart() {
    let currentUrl = url + currentStop.next + ".json";

    fetch(currentUrl)
      .then((request) => request.json())
      .then((data) => {
        currentStop.name = data.name;
        currentStop.next = data.next;

        stopInfoElement.textContent = `Next stop ${currentStop.name}`;
        arriveButtonElement.disabled = false;
        departButtonElement.disabled = true;
      });
  }

  function arrive() {
    stopInfoElement.textContent = `Arriving at ${currentStop.name}`;
    arriveButtonElement.disabled = true;
    departButtonElement.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();

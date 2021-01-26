function solve(input, sortingCriterion) {
  let tickets = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (const line of input) {
    let [destination, price, status] = line.split("|");
    tickets.push(new Ticket(destination, price, status));
  }

  let sortedTickets;

  if (sortingCriterion === "destination") {
    sortedTickets = tickets.sort((curr, next) =>
      curr.destination.localeCompare(next.destination)
    );
  } else if (sortingCriterion === "status") {
    sortedTickets = tickets.sort((curr, next) =>
      curr.status.localeCompare(next.status)
    );
  } else if (sortingCriterion == "price") {
    sortedTickets = tickets.sort((curr, next) => curr.price > next.price);
  }

  return sortedTickets;
}

solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);

function solve() {
  const links = document.getElementsByClassName("link-1");
  const visits = document.querySelectorAll("p");

  for (let i = 0; i < links.length; i++) {
    updateVisitors(links[i], visits[i]);
  }

  function updateVisitors(link, visit) {
    link.addEventListener("click", function () {
      let count = parseInt(visit.innerHTML.split(" ")[1]);
      count++;
      visit.innerHTML = `visited ${count} times`;
    });
  }
}

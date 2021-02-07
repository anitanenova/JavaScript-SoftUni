function solve() {
  const cardsElement = [...document.getElementsByTagName("img")];
  const resultFirstPlayer = document.querySelectorAll("#result span")[0];
  const resultSecondPlayer = document.querySelectorAll("#result span")[2];
  const historyElement = document.getElementById("history");

  let topSideCard;
  let bottomSideCard;
  let topSideCardNode;
  let bottomSideCardNode;

  let selectedCards = 0;

  cardsElement.forEach((card) => {
    card.addEventListener("click", function (e) {
      let currentCard = e.target;
      currentCard.src = "images/whiteCard.jpg";

      if (e.target.parentElement.id == "player1Div") {
        resultFirstPlayer.innerHTML = currentCard.name;
        topSideCard = Number(currentCard.name);
        topSideCardNode = this;
      } else if (e.target.parentElement.id == "player2Div") {
        resultSecondPlayer.innerHTML = currentCard.name;
        bottomSideCard = Number(currentCard.name);
        bottomSideCardNode = this;
      }

      selectedCards++;

      if (selectedCards % 2 == 0) {
        if (topSideCard > bottomSideCard) {
          topSideCardNode.style.border = "2px solid green";
          bottomSideCardNode.style.border = "2px solid red";
        } else if (topSideCard < bottomSideCard) {
          bottomSideCardNode.style.border = "2px solid green";
          topSideCardNode.style.border = "2px solid red";
        }

        historyElement.textContent += `[${topSideCard} vs ${bottomSideCard}] `;

        resultFirstPlayer.innerHTML = "";
        resultSecondPlayer.innerHTML = "";
        topSideCard = 0;
        bottomSideCard = 0;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  alert("connected");

  const cardDeck = [
    "fas fa-arrows-alt",
    "fas fa-border-none",
    "fas fa-asterisk",
    "fas fa-check-double",
    "fas fa-indent",
    "fas fa-compress-arrows-alt",
    "fas fa-crop-alt",
    "fas fa-qrcode",
    "fas fa-arrows-alt",
    "fas fa-border-none",
    "fas fa-asterisk",
    "fas fa-check-double",
    "fas fa-indent",
    "fas fa-compress-arrows-alt",
    "fas fa-crop-alt",
    "fas fa-qrcode",
  ];

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const resetButton = document.querySelector("#reset");
  const counter = document.querySelector("#moves");
  var moves = 0;
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // create your board
  function createBoard() {
    cardDeck.sort(() => Math.random() - 0.5);
    for (let i = 0; i < cardDeck.length; i++) {
      var card = document.createElement("span");
      card.setAttribute("class", "box");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("span");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("class", "hidden-box");
      cards[optionTwoId].setAttribute("class", "hidden-box");
      cardsWon.push(optionOneId, optionTwoId);
      alert("You found, a match!");
    } else {
      cards[optionOneId].setAttribute("class", "empty-box");
      cards[optionTwoId].setAttribute("class", "empty-box");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length / 2;
    if (cardsWon.length === cardDeck.length) {
      resultDisplay.textContent = "Congratulations! You've won!";
    }
  }

  //flip your card
  function flipCard() {
    var flip = this.getAttribute("class");
    if (flip !== "hidden-box") {
      var cardId = this.getAttribute("data-id");
      cardsChosenId.push(cardId);
      if (cardsChosenId[0] !== cardsChosenId[1]) {
        cardsChosen.push(cardDeck[cardId]);
        this.setAttribute("class", cardDeck[cardId]);
        console.log(cardsChosen[0]);
        moveCounter();
        if (cardsChosen.length === 2) {
          console.log(cardsChosen[1]);
          setTimeout(checkForMatch, 500);
        }
      } else {
        setTimeout(cardsChosenId.pop(), 500);
      }
    }
  }

  //reset button
  resetButton.addEventListener("click", function () {
    grid.innerHTML = "";
    createBoard();
    cardsWon = [];
    cardsChosenId = [];
    cardsChosen = [];
    moves = 0;
    resultDisplay.textContent = 0;
    counter.textContent = moves;
  });

  //move counter
  function moveCounter() {
    moves = moves + 1;
    counter.textContent = moves;
  }

  createBoard();
});

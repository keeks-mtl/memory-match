document.addEventListener("DOMContentLoaded", () => {
  alert("connected");

  const cardDeck = [
    "fas fa-arrows-alt",
    "fas fa-braille",
    "fas fa-bacon",
    "fas fa-check-double",
    "fas fa-indent",
    "fas fa-compress-arrows-alt",
    "fas fa-crop-alt",
    "fas fa-qrcode",
    "fas fa-arrows-alt",
    "fas fa-braille",
    "fas fa-bacon",
    "fas fa-check-double",
    "fas fa-indent",
    "fas fa-compress-arrows-alt",
    "fas fa-crop-alt",
    "fas fa-qrcode",
  ];

  cardDeck.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const resetButton = document.querySelector("#reset");
  const counter = document.querySelector("#moves");
  var moves = 0;
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  notPlayable = [];

  // create your board
  function createBoard() {
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
    console.log(cardsChosenId[0]);
    console.log(cardsChosenId[1]);
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("class", "hidden-box");
      cards[optionTwoId].setAttribute("class", "hidden-box");
      cardsWon.push(optionOneId);
      cardsWon.push(optionTwoId);
    } else {
      cards[optionOneId].setAttribute("class", "empty-box");
      cards[optionTwoId].setAttribute("class", "empty-box");
      alert("Sorry, Try Again");
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
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardDeck[cardId]);
    cardsChosenId.push(cardId);
    this.setAttribute("class", cardDeck[cardId]);
    console.log(cardsChosen[0]);
    if (cardsChosen.length === 2) {
      console.log(cardsChosen[1]);
      setTimeout(checkForMatch, 500);
    }
  }
  //reset button
  resetButton.addEventListener("click", function () {
    grid.innerHTML = "";
    createBoard();
    cardsWon = [];
    cardsChosenId = [];
    cardsChosen = [];
    resultDisplay.textContent = 0;
  });

  //move counter

  createBoard();
});

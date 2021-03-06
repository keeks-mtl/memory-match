// waiting for the content to be loaded
document.addEventListener("DOMContentLoaded", () => {

  const cardArray = [
    "col-2 fas fa-arrows-alt",
    "col-2 fas fa-arrows-alt",
    "col-2 fas fa-border-none",
    "col-2 fas fa-border-none",
    "col-2 fas fa-asterisk",
    "col-2 fas fa-asterisk",
    "col-2 fas fa-check-double",
    "col-2 fas fa-check-double",
    "col-2 fas fa-indent",
    "col-2 fas fa-indent",
    "col-2 fas fa-compress-arrows-alt",
    "col-2 fas fa-compress-arrows-alt",
    "col-2 fas fa-crop-alt",
    "col-2 fas fa-crop-alt",
    "col-2 fas fa-qrcode",
    "col-2 fas fa-qrcode",
  ];

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const counter = document.querySelector("#moves");
  const totalFlips = document.querySelector("#final-moves");
  const timer = document.querySelector(".timer");
  const resetBtn = document.querySelectorAll(".play-again");
  const modal = document.getElementById("winpopup");
  const closeIcon = document.querySelector(".close");
  const modeButtons = document.querySelectorAll(".difficulty");
  let moves = 0;
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let setting = 16;
  let cardDeck = [];

  // difficulty setting
  /* difficulty setting 
    add click listenteners to easy and hard button
    remove selected from button and add to button clicked
    if easy button clicked then change amount of cards to 8 
    else change amount of cards to 16
    set all counters to zero
  */  
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (setting = 8) : (setting = 16);
      shuffleCards();
      cardsWon = [];
      cardsChosenId = [];
      cardsChosen = [];
      moves = 0;
      resultDisplay.textContent = 0;
      counter.textContent = moves;
    });
  }

  // shuffle cards
  function shuffleCards() {
    cardDeck = [];
    cardDeck.push(...cardArray);
    cardDeck.length = setting;
    cardDeck.sort(() => Math.random() - 0.5);
    grid.innerHTML = "";
    createBoard();
  }

  /* create the board 
    shuffle array with cards, add cards to board grid in html, 
    add event listener to each card, and set timer to 0
  */
  function createBoard() {
    cardDeck.sort(() => Math.random() - 0.5);
    for (let i = 0; i < cardDeck.length; i++) {
      var card = document.createElement("span");
      card.setAttribute("class", "box col-2");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
    second = 0;
    minute = 0;
    hour = 0;
    timer.innerHTML = minute + "mins " + second + "secs";
    clearInterval(interval);
  }

  /* check for matches 
    if cards match, changes card to blank space, pushes the card to cardsWon array,
    removes click listener from matched cards.
    calls congratulations function if found all matches. 
  */
  function checkForMatch() {
    var cards = document.querySelectorAll("span");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("class", "hidden-box col-2");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].setAttribute("class", "hidden-box col-2");
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(optionOneId);
      cardsWon.push(optionTwoId);
    } else {
      cards[optionOneId].setAttribute("class", "empty-box col-2");
      cards[optionTwoId].setAttribute("class", "empty-box col-2");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length / 2;
    if (cardsWon.length === cardDeck.length) {
      congratulations();
    }
  }

  /* card flipping function
    gets cards data-id and adds it to cardsChosenId array
    makes sure second card chosen isn't the first card
    adds card to cardsChosen array
    start moveCounter()
    if two cards chosen then starts checkForMatch()
  */

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosenId.push(cardId);
    if (cardsChosenId[0] !== cardsChosenId[1]) {
      cardsChosen.push(cardDeck[cardId]);
      this.setAttribute("class", cardDeck[cardId]);
      moveCounter();
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    } else {
      setTimeout(cardsChosenId.pop(), 500);
    }
  }

  /* congratulations popup 
    shows modal and adds the moves & time to popup
  */
  function congratulations() {
    modal.classList.add("show");
    totalFlips.textContent = moves;
    clearInterval(interval);
    let finalTime = timer.innerHTML;
    document.getElementById("totalTime").innerHTML = finalTime;
    closeModal();
  }

  /* reset game
  adds click listener to both reset buttons
  clear board, create board, empty all arrays, & change all displays to 0
*/
  for (var i = 0; i < resetBtn.length; i++) {
    resetBtn[i].addEventListener("click", resetGame);
  }

  function resetGame() {
    modal.classList.remove("show");
    grid.innerHTML = "";
    createBoard();
    cardsWon = [];
    cardsChosenId = [];
    cardsChosen = [];
    moves = 0;
    resultDisplay.textContent = 0;
    counter.textContent = moves;
  }

  /* Move counter function
    counts amount of cards flipped & starts timer when first card is flipped 
*/
  function moveCounter() {
    moves = moves + 1;
    counter.textContent = moves;
    if (moves == 1) {
      startTimer();
    }
  }

  /* startTimer function
  adds time to html & increases by 60 for secs & mins 
*/
  let second = 0;
  let minute = 0;
  let hour = 0;
  let interval;
  function startTimer() {
    interval = setInterval(function () {
      timer.innerHTML = minute + "mins " + second + "secs";
      second++;
      if (second == 60) {
        minute++;
        second = 0;
      }
      if (minute == 60) {
        hour++;
        minute = 0;
      }
    }, 1000);
  }

  // closes modal
  function closeModal() {
    closeIcon.addEventListener("click", function (e) {
      modal.classList.remove("show");
    });
  }

  shuffleCards();
});

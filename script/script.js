// function play() {
//   const home = document.getElementById("home");
//   home.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentText = document.getElementById("current-text");
  currentText.innerText = alphabet;
  addBg(alphabet);
}

function play() {
  hidden("home");
  hidden("final-score");
  show("play-ground");
  setElementById("current-life", 5);
  setElementById("score", 0);
  continueGame();
}

function keyUpEvent(event) {
  const playerPress = event.key;
  const needPress = document
    .getElementById("current-text")
    .innerText.toLowerCase();
  if (playerPress === needPress) {
    // const score = document.getElementById("score");
    // const scoreText = parseInt(score.innerText);
    const currentScore = getElementById("score");
    const newScore = currentScore + 1;
    score.innerText = newScore;
    removeBg(needPress);
    continueGame();
  } else {
    const currentLifeElement = document.getElementById("current-life");
    const currentLife = parseInt(currentLifeElement.innerText);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
    if (newLife === 0) {
      gameOver();
    }
  }
  k;
}

document.addEventListener("keyup", keyUpEvent);

function gameOver() {
  hidden("play-ground");
  show("final-score");
  const lastScore = getElementById("score");
  setElementById("last-score", lastScore);
}

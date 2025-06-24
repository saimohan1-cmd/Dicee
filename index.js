let score1 = 0;
let score2 = 0;

function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  let result = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    result.innerHTML = "🚩 Player 1 Wins!";
    score1++;
    launchConfetti();
  } else if (randomNumber2 > randomNumber1) {
    result.innerHTML = "Player 2 Wins! 🚩";
    score2++;
    launchConfetti();
  } else {
    result.innerHTML = "Draw!";
  }

  updateScores();
}

function updateScores() {
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  updateScores();
  document.querySelector("h1").innerHTML = "Let's Play!";
}

function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

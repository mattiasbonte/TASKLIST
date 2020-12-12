// Starting values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min & max
minNum.textContent = min;
maxNum.textContent = max;

// Play again listener
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', validateGuess);

function validateGuess() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - Win
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - Lost
      gameOver(
        false,
        `Game over, you lost, the correct number was ${winningNum}`
      );
    } else {
      // Game continues, wrong answer
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left`,
        'yellow'
      );
    }
  }
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  guessInput.style.borderColor = color;
  message.style.color = color;
  message.textContent = msg;
}

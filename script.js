'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;

let score = 10;

let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  // guess is empty
  if (!guess) {
    displayMessage('⛔ No Number');
  }

  // guess is correct
  else if (guess == secretNumber) {
    displayMessage('🎉 Correct');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  }

  //guess is not correct
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 To High' : '📉 To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 10;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '10';
});

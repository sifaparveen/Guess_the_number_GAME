'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;

let score = 10;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  // guess is empty
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }

  // guess is correct
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  }

  //guess is to high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 To High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //guess is to low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😔 You Lost The Game';
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '10';
});

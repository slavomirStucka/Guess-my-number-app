'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.highscore').textContent = highscore;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!😖');

    //WINNNNNN
  } else if (guess === secret) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#20be0b';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    ////TOO HIGH
  } else if (guess !== secret) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secret ? 'Too high!' : 'Too Low!');
    } else {
      document.querySelector('.message').textContent = 'YOU LOST😭!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

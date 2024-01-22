const game = () => {
  let pScore = 0;
  let cScore = 0;

  const winner = document.querySelector('.winner');

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };
  //PLay Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });

    //Computer Options

    const computerOptions = ['rock', 'paper', 'scissors'];

    const resetImage = function () {
      playerHand.src = './assets/rock.png';
      computerHand.src = `./assets/rock.png`;
    };

    const playMatch = function () {
      //Computer Choice
      const computerNumber = Math.trunc(Math.random() * 3);
      const computerChoice = computerOptions[computerNumber];
      winner.textContent = 'Shaking';

      setTimeout(() => {
        //Here is where we call compare hands
        compareHands(this.textContent, computerChoice);

        //Update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      }, 2000);

      // Reset player's hand image
      resetImage();

      //Animaiton
      playerHand.style.animation = 'shakePlayer 2s ease';
      computerHand.style.animation = 'shakeComputer 2s ease';
    };

    options.forEach(options => {
      options.addEventListener('click', playMatch);
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text

    //Checking for a tie.
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie.';
      updateScore();
      return;
    }
    //Check for Rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'You won!';
        pScore++;
        updateScore();
        return;
      }
    } else {
      winner.textContent = 'Computer won!';
      cScore++;
      updateScore();
      return;
    }
    //Check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        winner.textContent = 'You won!';
        pScore++;
        updateScore();
        return;
      }
    } else {
      winner.textContent = 'Computer won!';
      cScore;
      updateScore();
      return;
    }
    //Check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'paper') {
        winner.textContent = 'You won!';
        pScore++;
        updateScore();
        return;
      }
    } else {
      winner.textContent = 'Computer won!';
      cScore++;
      updateScore();
      return;
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
  //updateScore();
};

//Start the game function
game();

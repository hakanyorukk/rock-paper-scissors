const game = () => {
  let pScore = 0;
  let sScore = 0;

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
    const playerHande = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    //Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(options => {
      options.addEventListener('click', function () {
        //Computer Choice
        const computerNumber = Math.trunc(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);
      });
    });
  };

  //Is call all the inner function
  startGame();
  playMatch();
  //updateScore();
};

//Start the game function
game();

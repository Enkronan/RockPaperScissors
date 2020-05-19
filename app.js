const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                //generate computer option
                const randomNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[randomNumber];
                //compare hands

            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        //check for tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player wins";
                return;
            }else{
                winner.textContent = "Computer wins";
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "Player wins";
                return;
            }else{
                winner.textContent = "Computer wins";
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = "Player wins";
                return;
            }else{
                winner.textContent = "Computer wins";
                return;
            }
        }

    }


    //call inner functions
    startGame();
    playMatch();
};

game();
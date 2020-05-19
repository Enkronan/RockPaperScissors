const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        console.log(introScreen);

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
    }


    //call inner functions
    startGame();
};

game();
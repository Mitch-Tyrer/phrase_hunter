let game;
const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector('#qwerty')

startButton.addEventListener('click', () => {
    game = new Game ();
    game.startGame();
});

keyboard.addEventListener('click', (e) => {
    game.handleInteraction(e.target);
});



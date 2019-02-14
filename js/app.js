let game;
const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector('#qwerty')
const keys = document.querySelectorAll('#qwerty .keyrow button')
const overlay = document.querySelector('#overlay');

const start = () => {
    game = new Game ();
    game.startGame();
}

startButton.addEventListener('click', () => {
    $('#overlay').fadeToggle('slow', () => start());
});


keyboard.addEventListener('click', (e) => {
    game.handleInteraction(e.target);
});

document.addEventListener('keydown', (e) => {
    if(e.which === 13 && overlay.style.display !== 'none'){
        $('#overlay').fadeToggle('slow', () => start());
    }
    for(let i = 0; i < keys.length; i++){
        if(e.key === keys[i].textContent){
            game.handleInteraction(keys[i]);
        }
    }
});




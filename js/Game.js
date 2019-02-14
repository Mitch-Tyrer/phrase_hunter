/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates an array of phrases for the game
     * @return {array} An array of phrases to be used in the game
     */
    createPhrases() {
        let phrases = [];
        phrases.push(new Phrase('May the Force be with you'));
        phrases.push(new Phrase('Winter is Coming'));
        phrases.push(new Phrase('Veritas Aequitas'));
        phrases.push(new Phrase('Love'));
        phrases.push(new Phrase('As you wish'));

        return phrases;
    }

    /**
     * selects a random phrase from the array
     * @return {Object} phrase object to be used
     */
    getRandomPhrase() {
        const ranNum = Math.floor(Math.random() * 5);
        return this.phrases[ranNum];
    }

    /**
     * starts the game
     */
    startGame(){
        document.querySelector('#overlay').style.opacity = '0';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Handels user interaction
     */
    handleInteraction () {
        // capture the chosen letter
        // match letter against the phrase
            //if a match display letter in phrase
            //!== match remove a life
        //check for a win
            //win if the phrase is all revealed
            //loss if no more lives
        //displays a win a lose message
    }
    /**
     * Check for a game win
     * @return {boolean} true for win, false for loss
     */
    checkForWin(){
        //check if all the letters are revealed
        let hidden = document.querySelectorAll('.hide');
        if(hidden.length === 0){
            return true;
        } else {
            return false;
        }
    }
    /**
     * Removes a life from the life counter
     */
    removeLife(){
        // increment this.missed by one
        this.missed += 1;
        // changes heart image
        let lives = document.querySelectorAll('.tries img');
        if(this.missed < 5){
            lives[(this.missed - 1)].src = 'images/lostHeart.png'
        } else {
            this.gameOver();
        }
        
        
        
    }
    /**
     * Ends the game
     * @returns {boolean} gameWon - whether or not a user has won or lost
     */
    gameOver(){
        let phrase = document.querySelectorAll('.hide');
        let overlay = document.querySelector('#overlay');
        let msg = document.querySelector("#game-over-message");
        
        //displays original overlay
        overlay.style.opacity = '1';
            //depending on win or lose display apporpriate message in the h1
            //changes the overlays start class to either win or lose class
            if(phrase.length === 0){
                msg.textContent = "YOU WIN!"
                overlay.className = "win"
            } else {
                msg.textContent = "Better Luck Next Time!"
                overlay.className = "lose"
            }
        
    }
}

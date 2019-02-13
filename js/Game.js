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

}

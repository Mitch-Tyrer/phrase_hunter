/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * displays the phrase on the board
     */
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase ul');
        let splitPhrase = this.phrase.split('');
        splitPhrase.forEach(letter => {
            let phraseLI = document.createElement('li');
            if(letter === ' '){
                phraseLI.innerHTML = `<li class="space"> </li>`;
            } else {
                phraseLI.innerHTML = `<li class="hide letter ${letter}">${letter}</li>`  
            }
            phraseDiv.appendChild(phraseLI);
        });
    }
    /**
     * checks a users chosen letter against the phrase
     * @param {string} letter - letter to be checked
     */
    checkLetter(letter){
        let exist = false
        let phrase = this.phrase.split('');
        phrase.filter(letters => {
            if(letters === letter){
                this.showMatchedLetter(letter);
                exist = true;
            }
        });
        return exist;
        
    }
    /**
     * shows chosen letter if it is in the phrase
     * @param {string}  letter - letter to be displayed
     */
    showMatchedLetter(letter){
        //select all select all of the letter DOM elements that have a 
        //CSS class name that matches the selected letter and
        //replace each selected element's `hide` CSS class with the `show` CSS class.
        const list = document.querySelectorAll('.hide');
        list.forEach(el => {
            if(el.textContent === letter){
                el.className = "show";
            }
        });

    }
}
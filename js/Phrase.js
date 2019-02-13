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
}
# phrase_hunter

#A game similar to hangman
    - this is part of the unit 4 of the treehouse js tech degree

Using Classes to create a game state and phrase state that are updated based on user interaction

the Phrase class will generate a random phrase that is then split into into letters and placed on the game board

the game class will log what letters the user has guessed and disable them accordingly so they cannot be guessed again. and if they are in the phrase update the state so show it.

if the phrase is guessed correctly they win.  IF they run out of lives/guesses they lose the game and can retry with a different phrase

##### STYLE CHANGES #####
- jQuery used to add a fade out to the start screen on game start
- Added a CSS fade in on phrases
    -Fades in the whole phrase on game start
    -individually fades in each correct letter
- Added CSS color flashing on win and lose screens between appropriate colors
- Changes header fonts to a more fun style.
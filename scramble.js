/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**
 * help()
 * Displays the game instructions.
 * @Return: String
 */

function help () {
  return `Welcome to Scramble. 
The game where you unscramble letters to make words.

Once you start the game, you will be given a scrambled word.
If you correctly guess the word, you will receive a point.
If you guess incorrectly you will receive a strike.
You can also pass on a word. 

To start a new game use start().
To make guess use guess('word').
To skip a word use pass().
To show these instructions again use help().`
}

// Displays the instructions when the page loads.
console.log(help())

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

/*******/
// Create a Array of words, must contain at least 10 words
// words = []

// Create a game object to hold game status
// game{}
//     1. The game active status
// active: Boolean

//     2. The random list of words
// words: array (shuffled)

//     3. The current word
// activeWord: string

//     4. The current scrambled word
// activeScramble word: string (shuffled)

//     5. The number of strikes
// strikes: number

//     6. The number of points
// points: number

//     7. The maximum number of allowed strikes
// maxStrikes: number

//     8. The number of passes used
// passes: number

//     9. The maximum number of passes
// maxPasses: number

// start()
// 1. Reset all the game status properties
// Check if game.active is false
// Set game.active status to true
// Set game.points to 0
// Set game.strikes to 0
// Set game.passes to start number
// Set game list of words to words array using the shuffled function
// Use shift() or splice() to get the first word off of the game list of words
// Use shuffle() to get scramble word and save to game
// response: scrambled word
// else - Response: a game has already started

// guess()
// Create a variable attempt for the player guesses
// if attempt == game.activeWord  - Case should not matter.
// Response: increase de game.point by 1
// Use splice() to remove the word off of the game list of words.
// Use shuffle() to get a new scramble word and to the game
// else attempt !== game.activeWord
// Response: increase game.strikes number by 1
// Show the game.activeWord again
// if game.strikes === 3
// Response: Game over.
// Display start() again.

// pass() will be used by the player to skip a word and will do the following:
// Check if game.active is false
// Response: Start a new game start()
// if passes <= game.maxPasses
// Use splice() to remove the word off of the game list of words.
// Show the game.activeWord ++
// Response: Display game.passes--
// else if passes >3
// Response:  You don't have more passes
// Show the game.activeWord again
//

// 10. The game will end if there are no more words in the list OR the player has received the maximum number of strikes
// // if [i] > words.length
// // Response: Congratulations! Game over
// // Display game.points
// // Display start()
// 11. When the game ends the player total points should be displayed.
// 12. After the game ends the player should be able to start a new game using the`start()` function.

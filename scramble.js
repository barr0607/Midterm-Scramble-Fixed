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
let words = ['blue', 'yellow', 'red', 'green', 'black', 'purple', 'brown', 'orange', 'white', 'pink']

// Create a game object to hold game status
let game = {
  active: false,
  words: [],
  activeWord: ' ',
  activeScramble: ' ',
  strikes: 0,
  maxStrikes: 3,
  passes: 0,
  maxPasses: 3,
  points: 0
}

function start () {
  if (game.active === false) {
    game.active = true
    game.strikes = 0
    game.maxStrikes = 3
    game.passes = 0
    game.maxPasses = 3
    game.points = 0
    game.words = (words)
    game.words = shuffle(game.words)
    game.activeWord = game.words.shift()
    game.activeScramble = shuffle(game.activeWord)
    console.warn('Good Luck! Your first word is:')
    return game.activeScramble
  } else {
    console.warn('You already have a game started')
  }
}

function guess (word) {
  let attempt = game.strikes

  if (game.active === false) {
    console.warn('There is no current game')
    return ('Use the start() to start a new game')
  } else if (word.toLowerCase() === game.activeWord) {
    console.warn(`Correct! Current score is: ${game.points += 1}`)
    game.words.shift()
    game.words = (words)
    game.activeWord = game.words[0]
    console.warn('Your next word is:')
    return (`${shuffle(game.activeWord)}`)
  } else if (game.words.length === 0) {
    console.warn('Congratulations! You are great')
    game.active = false
    return ('Start() a new game.')
  } else if (word.toLowerCase !== game.activeWord && game.maxStrikes > 1) {
    console.warn(`Wrong! You have more: ${game.maxStrikes -= 1} strikes left`)
    return game.activeScramble
  } else if (game.maxStrikes <= 1) {
    console.warn(`You are out of strikes. Game Over! Your Score is ${game.points} `)
    game.active = false
    return ('Start() a new game.')
  }
}

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

function pass () {
  if (game.active === false) {
    console.warn('There is no current game')
    console.warn('Use the start() to start a new game')
  } else if (game.maxPasses > 1) {
    console.warn(`You used a pass! You have ${game.maxPasses -= 1} more passes left`)
    game.words.splice(0, 1)
    game.words = (words)
    game.activeWord = game.words[0]
    console.warn('Your next word is:')
    return (shuffle(game.activeWord))
  } else {
    console.warn('You do not have more passes')
    return game.activeScramble
  }
}

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
// // if [i] > game.words.length
// // Response: Congratulations! Game over
// // Display game.points
// // Display start()
// 11. When the game ends the player total points should be displayed.
// 12. After the game ends the player should be able to start a new game using the`start()` function.

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


// This is my Scramble Fixed


// Create a Array of words, must contain at least 10 words
let words = ['blue', 'yellow', 'red', 'orange', 'black', 'green', 'purple', 'white', 'pink', 'congratulations']

let game = {
  active: false,
  words: [],
  activeWord: ' ',
  activeScramble: ' ',
  strikes: 0,
  maxStrikes: 3,
  passes: 0,
  maxPasses: 2,
  points: 0
}

function start () {
  if (game.active === false) {
    game.active = true
    game.strikes = 0
    game.maxStrikes = 3
    game.passes = 0
    game.maxPasses = 2
    game.points = 0
    game.words = (words)
    game.activeWord = game.words.shift()
    game.activeScramble = shuffle(game.activeWord)
    console.warn('Good Luck! Your first word is:')
    return game.activeScramble.toUpperCase()
  } else {
    console.warn('You already have a game started')
  }
}

function guess (word) {
  if (game.active === false) {
    console.warn('There is no current game')
    return ('Use the start() to start a new game')
  } else if (word.toUpperCase() === game.activeWord.toUpperCase() && game.words.length > 0) {
    console.warn(`Correct! Current score is: ${game.points += 1}`)
    game.words = (words)
    game.activeWord = game.words[0]
    game.activeWord = game.words.shift()
    game.activeScramble = shuffle(game.activeWord)
    console.warn('Your next word is:')
    return game.activeScramble.toUpperCase()
  } else if (game.words.length === 0) {
    console.warn(`Congratulations! You are great!  Your Score is ${game.points}`)
    game.active = false
    return ('Start() a new game.')
  } else if (word.toLowerCase !== game.activeWord && game.maxStrikes > 1) {
    game.strikes += 1
    console.warn(`Wrong! You have more: ${game.maxStrikes -= 1} strikes left`)
    return game.activeScramble.toUpperCase()
  } else if (game.maxStrikes <= 1) {
    console.warn(`You are out of strikes. Game Over! Your Score is ${game.points} `)
    game.active = false
    return ('Start() a new game.')
  }
}

function pass () {
  if (game.active === false) {
    console.warn('There is no current game')
    return ('Use the start() to start a new game')
  } else if (game.maxPasses > 1) {
    console.warn(`You used a pass! You have ${game.maxPasses -= 1} more passes left`)
    game.words.splice(0, 1)
    game.words = (words)
    game.activeWord = game.words[0]
    game.activeWord = game.words.shift()
    game.activeScramble = shuffle(game.activeWord)
    console.warn('Your next word is:')
    return game.activeScramble.toUpperCase()
  } else {
    console.warn('You do not have more passes')
    return game.activeScramble.toUpperCase()
  }
}

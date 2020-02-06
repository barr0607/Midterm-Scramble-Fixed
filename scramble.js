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

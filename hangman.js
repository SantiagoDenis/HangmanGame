
class Hangman {

    constructor (word, remainingGuesses) {

        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
        this.word = word.toLowerCase().split('')

    }

    calculateStatus() {
        let finished = true

        const spaces = this.word.filter( (letter) => letter === ' ')
        spaces.forEach( (space) => {
            this.guessedLetters.push(space)
        })

        this.word.forEach( (letter) => {
            if (this.guessedLetters.includes(letter)) {

            } else {
                finished = false
            }
        })
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage() {

        if (this.status === 'playing') {
            return `Guesses  left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else if (this.status === 'finished') {
            return 'Congrats! You guessed the word'
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach( (letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    makeGuess(guess) {
        const isUniqueGuess = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }
        if (isUniqueGuess && !isBadGuess) {
            this.guessedLetters.push(guess)
        } 

        if (isUniqueGuess && isBadGuess) {
            if (this.remainingGuesses >= 1) {
                this.remainingGuesses--
            }
        }

        this.calculateStatus()
    }
}

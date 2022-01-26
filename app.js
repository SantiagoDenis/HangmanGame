const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let word1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    word1.makeGuess(guess)

    render()
})

const render =  () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = word1.statusMessage

    //Exercise: For each character in the string add a span into #puzzle. The spans text should just be the letter itself
    

    const characters = word1.puzzle.split('')

    
    characters.forEach ( (letter) => {
        const span = document.createElement('span')
        span.textContent = `${letter}`
        puzzleEl.appendChild(span)
    })

}


const startGame = async () => {
    const puzzle = await getPuzzle('2')
    word1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

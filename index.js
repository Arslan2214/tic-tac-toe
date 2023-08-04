// <==|Variables |==>
const player1 = 'Player-1'
const player2 = 'Player-2'

let currentPlayerName = player1
let currentPlayer = 'X'

//  --------------------
// <==|Side Functions |==>
//  --------------------

// Function to get Element by id
const id = id => document.getElementById(id)

// Function to Change Player's Info 
const changeInfo = () => {
    id('playerTurn').innerText = currentPlayer
    id('playerName').innerText = currentPlayerName
}

//  --------------------
// <==|Main Functions |==>
//  --------------------

// Changing Player's Turn
const changePlayer = () => {
    if (currentPlayer === 'X' && currentPlayerName === player1) {
        currentPlayer = 'O'
        currentPlayerName = player2
        changeInfo()

    } else {
        currentPlayer = 'X'
        currentPlayerName = player1
        changeInfo()
    }
}

// Checking if there is a winner

const checkWinner = () => {

    const boxes = document.querySelectorAll('.box')
    const values = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    values.forEach((value) => {
        const [a, b, c] = value
        if (boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML && boxes[a].innerText !== '') {
            boxes[a].classList.add('bg-teal-500/70')
            boxes[b].classList.add('bg-teal-500/70')
            boxes[c].classList.add('bg-teal-500/70')

            winAnc(currentPlayerName)
            boxes.forEach(box => box.disabled = true)
            return
        }
    })
}



// Managing Box's Click
const boxClicked = e => {

    if (e.target.disabled !== true && e.target.innerText === '') {

        e.target.innerText = currentPlayer
        changePlayer()
        e.target.disabled = true
    }
}

// Game Ending Function 
const end = () => {
    if (id('winner').innerText !== '') {
        id('end').classList.remove('hidden')
        id('tieGame').classList.add('hidden')
    } else {
        id('end').classList.add('hidden')
        id('tieGame').classList.remove('hidden')
    }

    document.querySelectorAll('.box').forEach(box => box.disabled = true)

}


// Reset Game
const resetGame = () => {
    currentPlayerName = player1
    currentPlayer = 'X'

    document.querySelectorAll('.box').forEach(box => {
        if (box.disabled === true) {
            box.disabled = false
        }
        if (box.classList.contains('bg-teal-600')) {
            box.classList.remove('bg-teal-600')
        }

        box.innerHTML = ''
    })
}


// Winner Announcement
const name = 'User'
const winAnc = () => {

    changePlayer()
    id('winner').innerText = currentPlayerName;
    id('winnerPlayer').innerText = currentPlayer;
    id('winAnnounce').classList.remove('hidden')
}
// winAnc(name)

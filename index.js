// <==|Variables |==>
let player1 = 'Player-1'
let player2 = 'Player-2'

player1 ||= prompt('Player1: ')
player2 ||= prompt('Player2: ')

let currentPlayerName = player1
let currentPlayer = 'X'

//  --------------------
// <==|Side Functions |==>
//  --------------------

// Function to get Element by id
const get = id => document.getElementById(id)

// Function to Change Player's Info 
const changeInfo = () => {
    get('playerTurn').innerText = currentPlayer
    get('playerName').innerText = currentPlayerName
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
    const boxArray = Array.from(boxes);

    // Checking for Winner

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

            if(!boxArray.every(box => box.disabled === true))
            {
                winAnc(currentPlayerName, currentPlayer)
            }
            boxes.forEach(box => box.disabled = true)
            return
        }
    })

    // console.log(boxArray.every(box => box.innerText !== '')) 

    if (boxArray.every(box => box.innerText !== '')) {
        end()
        return
    }
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
    if (get('winner').innerText === '') {
        get('end')?.classList.add('hidden')
        get('tieGame').classList.remove('hidden')
        document.querySelectorAll('.box').forEach(box => box.disabled = true)
    }
}


// Reset Game
const resetGame = () => {
    currentPlayerName = player1
    currentPlayer = 'X'

    document.querySelectorAll('.box').forEach(box => {
        if (box.disabled === true) {
            box.disabled = false
        }
        if (box.classList.contains('bg-teal-500/70')) {
            box.classList.remove('bg-teal-500/70')
        }
        
        box.innerHTML = ''
    })
        if (!get('winAnnounce').classList.contains('hidden')) {
            get('winAnnounce').classList.add('hidden')
        }
        if (!get('tieGame').classList.contains('hidden')) {
            get('tieGame').classList.add('hidden')
        }
}


// Winner Announcement
const winAnc = () => {
    changePlayer()
    get('winner').innerText = currentPlayerName;
    get('winnerPlayer').innerText = currentPlayer;
    get('winAnnounce').classList.remove('hidden')
}

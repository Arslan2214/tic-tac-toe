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



// Managing Box's Click
const boxClicked = e => {
    if (e.target.innerText === '') {
        e.target.innerText = currentPlayer
        changePlayer()
        e.target.disabled = true
    }
}


// Winner Announcement
const name = 'User'
const winAnc = name => {
    id('winner').innerText = name;
    id('winAnnounce').classList.remove('hidden')
}
// winAnc(name)

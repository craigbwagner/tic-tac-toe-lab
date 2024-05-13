/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const boardEl = document.querySelector('.board');

/*-------------------------------- Functions --------------------------------*/
function init() {
	board = ['', '', '', '', '', '', '', '', ''];
	turn = 'X';
	winner = false;
	tie = false;
	render();
}

function render() {
	updateBoard();
	updateMessage();
}

function updateBoard() {
	board.forEach((element, index) => {
		squareEls[index].textContent = element;
	});
	console.log(squareEls);
}

function updateMessage() {
	if (winner === false && tie === false) {
		messageEl.textContent = `It is ${turn}'s turn`;
	} else if (winner === false && tie === true) {
		messageEl.textContent = "It's a tie!";
	} else {
		messageEl.textContent = `Player ${turn} has won!`;
	}
}

function handleClick(event) {
	if (
		event.target.className === 'sqr' &&
		board[Number(event.target.id)] === ''
	) {
		board[Number(event.target.id)] = turn;
		checkForWinner();
		checkForTie();
		switchPlayerTurn();
		render();
	}
}

function checkForWinner() {
	winningCombos.forEach((combo) => {
		let spot1 = combo[0];
		let spot2 = combo[1];
		let spot3 = combo[2];
		if (
			board[spot1] === board[spot2] &&
			board[spot1] === board[spot3] &&
			board[spot1] !== ''
		) {
			winner = true;
			boardEl.removeEventListener('click', handleClick);
		}
	});
}

function checkForTie() {
	if (winner === true) {
		return;
	} else if (board.includes('')) {
		return;
	} else {
		tie = true;
		boardEl.removeEventListener('click', handleClick);
	}
}

function switchPlayerTurn() {
	if (winner === true) {
		return;
	}
	switch (turn) {
		case 'X':
			turn = 'O';
			break;
		case 'O':
			turn = 'X';
			break;
	}
}
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick);

init();

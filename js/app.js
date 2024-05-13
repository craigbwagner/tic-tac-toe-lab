/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');

/*-------------------------------- Functions --------------------------------*/
function init() {
	board = ['', '', '', '', '', '', '', '', ''];
	turn = 'X';
	winner = false;
	tie = false;
	render();
}

function render() {}
/*----------------------------- Event Listeners -----------------------------*/

init();

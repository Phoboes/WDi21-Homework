//Function to clear the board
var clearBoard = function() {
    for (var i = 1; i <= 9; i++) {
        gameReset(i);
    }
};


//Function called at the beggining which initialises the first turn to X
function startGame() {
    document.turn = "X";
    document.winner = null;
    setMessage("First move is from " + document.turn);
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

// To check for the next move
function nextMove() {
    if (document.winner !== null) {
        setMessage(document.turn + " is the winner");
    }  else if (this.innerText === "") {
        this.innerText = document.turn;
        switchTurn();
    }


     else {
        setMessage("Pick another square or Replay");
    }
}

function switchTurn() {
    if (checkForWinner(document.turn)) {
        (setMessage("Congrats " + document.turn + " won!"));
        document.winner = document.turn;

    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn");
    }
     else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn");
    }
}
//Setting the winning combinations
function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function gameReset(number) {
    document.getElementById("s" + number).innerHTML = "";
    //setMessage( "First move is from X");
    startGame();
}

$(".square").on("click", nextMove);
$(".reset").on("click", clearBoard);

$(document).ready(function() {
    startGame();
});

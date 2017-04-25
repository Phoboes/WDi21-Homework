
// UTILIZE BOUNCE JS IF YOU CAN
// GREENSOCK JS IF YOU CAN
// SWEETALERT JS TO WIN THE GAME

/////////////
///           VARIABLES
/////////////
var player1 = $(".justinBG");
var player2 = $(".mileyBG");
var gameBoard = $(".gameBoard");
var cell = $(".cell");
// displayNextPlayer(turn, player);
                  // jQuery functions instead of javascript

/////////////
///           CURRENT PLAYER RESPOND TO CLICK ADD IMAGE
/////////////
var currentPlayer = "justinBG";
$('.cell').click(function() {
  $(this).addClass( currentPlayer );
});

// $('.cell').click(function() {
//   $(this).addClass("mileyBG");
// });

/////////////
///           SWITCH PLAYERS BETWEEN MILEY & JUSTIN
/////////////
$('.cell').click(function() {
  // console.log("Mileys turn");
  $(this).addClass( currentPlayer );
  if ( currentPlayer === "justinBG" ) {
    currentPlayer = "mileyBG";
  } else {
    currentPlayer = "justinBG";
  }
  // CHECK IF PLAYERS WON
  checkIfPlayer1Won();
  checkIfPlayer2Won();
  // reset();
});


/////////////
///           WINNING COMBINATION
/////////////

// this.wins = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [6,4,2],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8]
// ];

/////////////
///           CONFIRMING WINNER
/////////////

  // JUSTIN BIEBERS WIN
function checkIfPlayer1Won() {
  var won = 0;
         if ( $(".cell-c1").hasClass("justinBG") && $(".cell-c2").hasClass("justinBG") &&  $(".cell-c3").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  } else if ( $(".cell-c4").hasClass("justinBG") && $(".cell-c5").hasClass("justinBG") &&  $(".cell-c6").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  } else if ( $(".cell-c7").hasClass("justinBG") && $(".cell-c8").hasClass("justinBG") &&  $(".cell-c9").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  } else if ( $(".cell-c7").hasClass("justinBG") && $(".cell-c5").hasClass("justinBG") &&  $(".cell-c3").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  } else if ( $(".cell-c1").hasClass("justinBG") && $(".cell-c4").hasClass("justinBG") &&  $(".cell-c7").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  } else if ( $(".cell-c2").hasClass("justinBG") && $(".cell-c5").hasClass("justinBG") &&  $(".cell-c8").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  } else if ( $(".cell-c3").hasClass("justinBG") && $(".cell-c6").hasClass("justinBG") &&  $(".cell-c9").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  } else if ( $(".cell-c1").hasClass("justinBG") && $(".cell-c5").hasClass("justinBG") &&  $(".cell-c9").hasClass("justinBG") ) {
    swal("JUSTIN WON");
  }
}

  // MILEY WINS
function checkIfPlayer2Won() {
  var won = 0;
         if ( $(".cell-c1").hasClass("mileyBG") && $(".cell-c2").hasClass("mileyBG") &&  $(".cell-c3").hasClass("mileyBG") ) {
    swal("MILEY WON");
  } else if ( $(".cell-c4").hasClass("mileyBG") && $(".cell-c5").hasClass("mileyBG") &&  $(".cell-c6").hasClass("mileyBG") ) {
    swal("MILEY WON");
  } else if ( $(".cell-c7").hasClass("mileyBG") && $(".cell-c8").hasClass("mileyBG") &&  $(".cell-c9").hasClass("mileyBG") ) {
    swal("MILEY WON");
  } else if ( $(".cell-c7").hasClass("mileyBG") && $(".cell-c5").hasClass("mileyBG") &&  $(".cell-c3").hasClass("mileyBG") ) {
    swal("MILEY WON");
  } else if ( $(".cell-c1").hasClass("mileyBG") && $(".cell-c4").hasClass("mileyBG") &&  $(".cell-c7").hasClass("mileyBG") ) {
    swal("MILEY WON");
  } else if ( $(".cell-c2").hasClass("mileyBG") && $(".cell-c5").hasClass("mileyBG") &&  $(".cell-c8").hasClass("mileyBG") ) {
    swal("MILEY WON");
  } else if ( $(".cell-c3").hasClass("mileyBG") && $(".cell-c6").hasClass("mileyBG") &&  $(".cell-c9").hasClass("mileyBG") ) {
    swal("MILEY WON");
  } else if ( $(".cell-c1").hasClass("mileyBG") && $(".cell-c5").hasClass("mileyBG") &&  $(".cell-c9").hasClass("mileyBG") ) {
    swal("MILEY WON");
  }
}

/////////////
///           RESETTING GAME BOARD
/////////////

function reset() {
  $('.cell').css( {
    backgroundImage: "none"
  });
}
////
//      CONNECT RESET FUNCTION TO FUNCTION OF FINISHED
/////

//////
///      CREATE A LOSE & DRAW
/////

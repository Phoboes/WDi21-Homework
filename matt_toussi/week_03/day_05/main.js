var turn = "X";
// Check for a winner
var checkForWinner = function () {
  // Get the text of all of these elements.If it is equal to 3X we know that X won.
  // If the text of #1, #2, and #3 are all equal to the string X

  if ( $("#1, #2, #3").text() === "XXX" ||
       $("#4, #5, #6").text() === "XXX" ||
       $("#7, #8, #9").text() === "XXX" ||
       $("#1, #4, #7").text() === "XXX" ||
       $("#2, #5, #8").text() === "XXX" ||
       $("#3, #6, #9").text() === "XXX" ||
       $("#1, #5, #9").text() === "XXX" ||
       $("#3, #5, #7").text() === "XXX" ){
        //  var twoClicked = function () {
        alert("PLAYER X WON");

  } else if (  $("#1, #2, #3").text() === "OOO" ||
               $("#4, #5, #6").text() === "OOO" ||
               $("#7, #8, #9").text() === "OOO" ||
               $("#1, #4, #7").text() === "OOO" ||
               $("#2, #5, #8").text() === "OOO" ||
               $("#3, #6, #9").text() === "OOO" ||
               $("#1, #5, #9").text() === "OOO" ||
               $("#3, #5, #7").text() === "OOO" ) {
          // Print out X won
        alert("PLAYER O WON");

  } else  if ( $(".box").text().length === 9 ){
    // If the text of all of the elements has 9 characters when
  //  placed together Do something
         alert("Try Again!");
  }


};
var switchPlayer = function () {
  // if the turn variable contains the string x
  if ( turn === "X" ) {
      //   change it to O
    turn = "O";
      // Otherwise
  } else {
       //   change it to X
     turn = "X";
  }
};

var playerTurn = function (event) {
  // The this keyword always refers to the element that was interacted with

  $(event.currentTarget).html( turn );
  if ( turn === "X" ) {
    $(event.currentTarget).css({
      color: "#212F3D",
      background: "#3498DB"
    });

  } else {
    $(event.currentTarget).css({
      color: "#EC7063",
      background: "#3498DB"
    });
  }
  $(this).off("click",playerTurn);
  switchPlayer();
  // CHECK FOR A WINNER SOMEWHERE IN THIS FUNCTION
  checkForWinner();

};

// When any .box is clicked
  // Change the text to an X or an O
$(".box").on("click", playerTurn);




  // Reload the page for new game button
  $('#newGame').click(function() {
      location.reload();
  });

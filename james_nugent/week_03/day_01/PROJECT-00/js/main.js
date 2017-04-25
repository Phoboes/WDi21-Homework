$(document).ready(function() {
    // Variable to store individual moves as the game is played
    var resultChecker = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];
    // variable to track the number of turns that have been played
    var countClicks = 0;
    // creates new p element to display whether "X" or "O" has the next move
    var $newTurn = $("<p></p>");
    // allows jquery to be called on all squares of the board
    var $allSquares = $(".gameBoard");

    // Sets the intial score for player 1 to 0
    var playerOneScore = 0;
    var $oneScore = $(".oneScore");

    // Sets the initial score for player 2 to 0
    var playerTwoScore = 0;
    var $twoScore = $(".twoScore");

    // Message to be displayed if player 1 wins a round, updates their score and resets the board
    var messageOne = function() {
        swal({
                title: "PLAYER ONE WINS!",
                text: "Would you like to play again?",
                type: "success",
                showCancelButton: true,
                cancelButtonText: "No thanks",
                closeOnCancel: false,
                confirmButtonText: "Hell yeaaah!",
                closeOnConfirm: false
            },
            //Resets the squares, the click, updates relevant player score
            function(isConfirm) {
                if (isConfirm) {
                    jQuery('#masterBoard div').html('');
                    jQuery('.playerIndicator').html('');
                    countClicks = 0;
                    $allSquares.removeAttr('style');
                    $allSquares.removeClass("animated bounce");
                    $oneScore.children('span').text(playerOneScore += 1);
                    $allSquares.unbind('click');
                    $allSquares.one("click", playTurn);
                    swal.close();
                } else {
                    // If no thanks is selected, redirect to the below gif
                    location.href = "http://www.reactiongifs.us/wp-content/uploads/2014/05/youre_welcome_obama.gif";
                }
            });
    };

    // Message to be displayed if player 2 wins a round, updates their score and resets the board
    var messageTwo = function() {
        swal({
                title: "PLAYER TWO WINS!",
                text: "Would you like to play again?",
                type: "success",
                showCancelButton: true,
                cancelButtonText: "No thanks",
                closeOnCancel: false,
                confirmButtonText: "Hell yeaaah!",
                closeOnConfirm: false
            },
            function(isConfirm) {
                if (isConfirm) {
                    jQuery('#masterBoard div').html('');
                    jQuery('.playerIndicator').html('');
                    countClicks = 0;
                    $allSquares.removeAttr('style');
                    $allSquares.removeClass("animated bounce");
                    $twoScore.children('span').text(playerTwoScore += 1);
                    $allSquares.unbind('click');
                    $allSquares.one("click", playTurn);
                    swal.close();
                } else {
                    location.href = "http://www.reactiongifs.us/wp-content/uploads/2014/05/youre_welcome_obama.gif";
                }
            });
    };

    // Message to be displayed if there is a draw, no score allocated, resets the board.
      // cat's game
    var messageThree = function() {
        swal({
                title: "IT'S A DRAW!",
                text: "Would you like to play again?",
                imageUrl: "https://img.clipartfest.com/6dab1409ef4073d8d4c0f15670f72389_kitty-cat-clipart-cat-head-clipart-png_3333-3081.png",
                showCancelButton: true,
                cancelButtonText: "No thanks",
                closeOnCancel: false,
                confirmButtonText: "Hell yeaaah!",
                closeOnConfirm: false
            },
            function(isConfirm) {
                if (isConfirm) {
                    jQuery('#masterBoard div').html('');
                    jQuery('.playerIndicator').html('');
                    countClicks = 0;
                    $allSquares.removeAttr('style');
                    $allSquares.removeClass("animated bounce");
                    $allSquares.unbind('click');
                    $allSquares.one("click", playTurn);
                    swal.close();
                } else {
                    location.href = "http://www.reactiongifs.us/wp-content/uploads/2014/05/youre_welcome_obama.gif";
                }
            });
    };

    // Function to play moves and detect results
    var playTurn = function() {

        // The if statement initially works out if it is the first turn, then play X, add 1 to countClicks
            // If countClicks is an odd number, play O, add 1 to countClicks
            // If countClicks is an even number, play X, add 1 to countClicks
                // If countClicks is equal to 9 and there hasnt been a result, it is a draw
        if (countClicks === 0) {
            countClicks += 1;
            // places first piece on the board and changes the border of the square
            var $paragraph = $("<p></p>");
            $paragraph.html("X");
            $paragraph.appendTo(this);
            $(this).css({
                color: "#EC3F8C",
                borderColor: "#EC3F8C"
            });
            $(this).addClass("animated bounce");
            // updates the turn indicator
            $newTurn.html("NEXT MOVE: O");
            $newTurn.appendTo(".playerIndicator");
            $newTurn.css({
                fontSize: "25px",
                color: "#39B1C6"
            });

        } else if (countClicks % 2 !== 0) {
            countClicks += 1;
            // places piece on the board and changes the border
            var $paragraph = $("<p></p>");
            $paragraph.html("O");
            $paragraph.appendTo(this);
            $(this).css({
                color: "#39B1C6",
                borderColor: "#39B1C6"
            });
            $(this).addClass("animated bounce");
            // updates the turn indicator
            $newTurn.html("NEXT MOVE: X");
            $newTurn.css({
                fontSize: "25px",
                color: "#EC3F8C"
            });

        } else if (countClicks % 2 === 0) {
            countClicks += 1;
            // places piece on the board and changes the border
            var $paragraph = $("<p></p>");
            $paragraph.html("X");
            $paragraph.appendTo(this);
            $(this).css({
                color: "#EC3F8C",
                borderColor: "#EC3F8C"
            });
            $(this).addClass("animated bounce");
            // updates the turn indicator
            $newTurn.html("NEXT MOVE: O");
            $newTurn.css({
                fontSize: "25px",
                color: "#39B1C6"
            });
        }

        // Testing if the maximum number of moves has been made
        if (countClicks === 9) {
            $newTurn.html("GAME OVER");
        }


        // Retrieves the value of all squares and stores it in the resultChecker array
        var $squareOne = $(".one p").html();
        resultChecker[0][0] = $squareOne;

        var $squareTwo = $(".two p").html();
        resultChecker[0][1] = $squareTwo;

        var $squareThree = $(".three p").html();
        resultChecker[0][2] = $squareThree;

        var $squareFour = $(".four p").html();
        resultChecker[1][0] = $squareFour;

        var $squareFive = $(".five p").html();
        resultChecker[1][1] = $squareFive;

        var $squareSix = $(".six p").html();
        resultChecker[1][2] = $squareSix;

        var $squareSeven = $(".seven p").html();
        resultChecker[2][0] = $squareSeven;

        var $squareEight = $(".eight p").html();
        resultChecker[2][1] = $squareEight;

        var $squareNine = $(".nine p").html();
        resultChecker[2][2] = $squareNine;

        // Testing conditions for a winner, determines which message to display
        // HORIZONTAL ROW CHECKS FOR X
        if (resultChecker[0][0] === "X" && resultChecker[0][1] === "X" && resultChecker[0][2] === "X") {
            messageOne();
        } else if (resultChecker[1][0] === "X" && resultChecker[1][1] === "X" && resultChecker[1][2] === "X") {
            messageOne();
        } else if (resultChecker[2][0] === "X" && resultChecker[2][1] === "X" && resultChecker[2][2] === "X") {
            messageOne();
        } // Vertical COLUMN CHECKS FOR X
        else if (resultChecker[0][0] === "X" && resultChecker[1][0] === "X" && resultChecker[2][0] === "X") {
            messageOne();
        } else if (resultChecker[0][1] === "X" && resultChecker[1][1] === "X" && resultChecker[2][1] === "X") {
            messageOne();
        } else if (resultChecker[0][2] === "X" && resultChecker[1][2] === "X" && resultChecker[2][2] === "X") {
            messageOne();
        } // DIAGONAL CHECKS FOR X
        else if (resultChecker[0][0] === "X" && resultChecker[1][1] === "X" && resultChecker[2][2] === "X") {
            messageOne();
        } else if (resultChecker[0][2] === "X" && resultChecker[1][1] === "X" && resultChecker[2][0] === "X") {
            messageOne();
        } // HORIZONTAL ROW CHECKS FOR O
        else if (resultChecker[0][0] === "O" && resultChecker[0][1] === "O" && resultChecker[0][2] === "O") {
            messageTwo();
        } else if (resultChecker[1][0] === "O" && resultChecker[1][1] === "O" && resultChecker[1][2] === "O") {
            messageTwo();
        } else if (resultChecker[2][0] === "O" && resultChecker[2][1] === "O" && resultChecker[2][2] === "O") {
            messageTwo();
        } // VERTICAL COLUMN CHECKS FOR O
        else if (resultChecker[0][0] === "O" && resultChecker[1][0] === "O" && resultChecker[2][0] === "O") {
            messageTwo();
        } else if (resultChecker[0][1] === "O" && resultChecker[1][1] === "O" && resultChecker[2][1] === "O") {
            messageTwo();
        } else if (resultChecker[0][2] === "O" && resultChecker[1][2] === "O" && resultChecker[2][2] === "O") {
            messageTwo();
        } // DIAGONAL CHECKS FOR O
        else if (resultChecker[0][0] === "O" && resultChecker[1][1] === "O" && resultChecker[2][2] === "O") {
            messageTwo();
        } else if (resultChecker[0][2] === "O" && resultChecker[1][1] === "O" && resultChecker[2][0] === "O") {
            messageTwo();
        } // DRAW CONDITION
        else if (countClicks === 9) {
            messageThree();
        }

    }; // End of playTurn function


    // Calls the playturn function on click
    $allSquares.one("click", playTurn);

    // Logs and updates array of results in the console
    console.log(resultChecker);

}); // End of document ready function

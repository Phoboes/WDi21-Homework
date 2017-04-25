$(document).ready(function () {
// console.log("js is working");


//Below function will switch between player 1 & 2
//Declare undefined variable
// Once player 1 finishes variable changes to 2, once player 2 finishes, variable goes back to 1
//variable to keep track of number of turns so that if it reaches 9 and none of the winning combos have happened, then it should be a tie.

var player = 1; // Player one starts, this variable will be updated to 1 or 2 depending on player doing the click event
var numberOfTurns = 0; //variable to keep track of number of turns, if === 9 with no matches then it's a tie
var playerOneWins = 0; //variable to keep track of playerOne wins
var playerTwoWins = 0; //variable to keep track of playerTwo wins


var $square = $(".square"); // variable to store jQuery selection of .square class

$square.on("click", function (){
  if (player === 1) {
      removePlayerTwoText();
      $(this).addClass("animated flipInX");
      $(this).css({ //When clicked set square css to image clinton
      backgroundImage : "url(images/clintonTwo.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerOne"); //add a class marker, so I can check what squares playerOne has
      numberOfTurns += 1; //add 1 to the number of turns
      player = 2; //update variable to 2, so to switch to player 2

  } else {
      removePlayerOneText();
      $(this).addClass("animated flipInX");
      $(this).css({ //when clicked set square css to trump cheeto
      backgroundImage : "url(images/trump.jpg)",
      backgroundSize : "100%"
    });

      $(this).addClass("playerTwo"); //add a class marker, so I can check what squares playerTwo has
      numberOfTurns += 1; //add 1 to the number of turns
      player = 1;
  }
// conditions to check if it's a match
  if ( //horizontal
      ($(".square.one").hasClass("playerOne") && $(".square.two").hasClass("playerOne") && $(".square.three").hasClass("playerOne")) ||

      $(".square.four").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.six").hasClass("playerOne") ||

      $(".square.seven").hasClass("playerOne") && $(".square.eight").hasClass("playerOne") && $(".square.nine").hasClass("playerOne") ||
        //vertical
      $(".square.one").hasClass("playerOne") && $(".square.four").hasClass("playerOne") && $(".square.seven").hasClass("playerOne") ||

      $(".square.two").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.eight").hasClass("playerOne") ||

      $(".square.three").hasClass("playerOne") && $(".square.six").hasClass("playerOne") && $(".square.nine").hasClass("playerOne") ||
        //diagonal
      $(".square.three").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.seven").hasClass("playerOne") ||

      $(".square.one").hasClass("playerOne") && $(".square.five").hasClass("playerOne") && $(".square.nine").hasClass("playerOne")) {
    playerOneWins += 1; //add one to the win counter
    $(".scoreOne").text(playerOneWins); //push the number of wins to the players score panel
    clintonWin(); //run clinton win theme

  } else if (
      //horizontal
    $(".square.one").hasClass("playerTwo") && $(".square.two").hasClass("playerTwo") && $(".square.three").hasClass("playerTwo") ||

    $(".square.four").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.six").hasClass("playerTwo") ||

    $(".square.seven").hasClass("playerTwo") && $(".square.eight").hasClass("playerTwo") && $(".square.nine").hasClass("playerTwo") ||
    //vertical
    $(".square.one").hasClass("playerTwo") && $(".square.four").hasClass("playerTwo") && $(".square.seven").hasClass("playerTwo") ||

    $(".square.two").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.eight").hasClass("playerTwo") ||

    $(".square.three").hasClass("playerTwo") && $(".square.six").hasClass("playerTwo") && $(".square.nine").hasClass("playerTwo") ||
    //diagonal
    $(".square.three").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.seven").hasClass("playerTwo") ||

    $(".square.one").hasClass("playerTwo") && $(".square.five").hasClass("playerTwo") && $(".square.nine").hasClass("playerTwo")) {
    playerTwoWins += 1; //add one to the win counter
    $(".scoreTwo").text(playerTwoWins); //push the number of ones to the players score panel
    cheetoWin(); //run cheeto win theme

  } else if (numberOfTurns === 9){
      tie(); //run tie theme

  } else {
      if (player === 2){
        animatePlayerTwo();
      } else {
        animatePlayerOne();
      }
  }
});

///////////THEMES AND ANIMATIONS/////////////////////
// Quit button will refresh whole page
var $quitButton = $(".col-one button, .col-two button");

$quitButton.one("click", function (){
  window.location.reload();
});
//animation to increase size slightly if hovering over
$(".col-one button").mouseenter(function(){
    $(".col-one button").animate({
      padding: "23px"
    }, "fast");
    });
$(".col-one button").mouseleave(function(){
    $(".col-one button").animate({
      padding: "20px"
    }, "fast");
    });

$(".col-two button").mouseenter(function(){
    $(".col-two button").animate({
      padding: "23px"
    }, "fast");
    });
$(".col-two button").mouseleave(function(){
    $(".col-two button").animate({
      padding: "20px"
    }, "fast");
    });


//animations to show who's turn is it next
// changes the p in col one and two to show, with a slight delay and bounce
var animatePlayerOne = function () {
  window.setTimeout(function(){
    $(".col-one p").addClass("animated bounce");
    $(".col-one p").css({
      display: "inline-block"
    });
  }, 500);
};

var animatePlayerTwo = function () {
  window.setTimeout(function(){
    $(".col-two p").addClass("animated bounce");
    $(".col-two p").css({
      display: "inline-block"
    });
  }, 500);
};

//function to remove the prompt to who's turn is next text so it toggles back and forth between the two
 var removePlayerOneText = function () {
   $(".col-two p").css({
     display: "none"
   });
 };

 var removePlayerTwoText = function () {
   $(".col-one p").css({
     display: "none"
   });
 };
// I want to animate the gameboard exploding and each square
// to fly out to the sides and up on a win
var animateBoard = function () {
  $(".gameboard").css ({
    border: "none"
  });
  $(".square.one").animate({
    right: "-1500px"
  }, 3500);
  $(".square.two").animate({
    top: "-1500px"
  }, 3500);
  $(".square.three").animate({
    left: "-1500px"
  }, 3500);
  $(".square.four").animate({
    right: "-1500px"
  }, 3500);
  $(".square.five").animate({
    top: "-1500px"
  }, 3500);
  $(".square.six").animate({
    left: "-1500px"
  }, 3500);
  $(".square.seven").animate({
    right: "-1500px"
  }, 3500);
  $(".square.eight").animate({
    bottom: "-1500px"
  }, 3500);
  $(".square.nine").animate({
    left: "-1500px"
  }, 3500);
};
//I need my gameboard to be centre of screen
boardCentre = ((window.innerWidth / 2) - 302 ) + "px";
$gameboard = $(".gameboard");
$gameboard.css({
  left: boardCentre
});
themeCentre = ((window.innerWidth / 2) - 300 ) + "px";

//Winning themes

// Clinton winning theme
var $clintonTheme = $(".clintonTheme");
var $clintonButton = $(".clintonTheme button");
var clintonWin = function () {
  animateBoard(); //run exploding squares
  $clintonTheme.css({
    display: "inline-block",
    left: themeCentre
  });
};
//set button to reset panels, and clear classes
$clintonButton.on("click", function (){
  $clintonTheme.css({
    display: "none",
    outline: "none"
  });
  playAgain();
});

$clintonButton.mouseenter(function(){
    $clintonButton.animate({
      padding: "23px"
    }, "fast");
    });
$clintonButton.mouseleave(function(){
    $clintonButton.animate({
      padding: "20px"
    }, "fast");
    });


// Cheeto winning theme
var $cheetoButton = $(".cheetoTheme button");
var $cheetoTheme = $(".cheetoTheme");
var cheetoWin = function () {
  animateBoard(); //run exploding squares
  $cheetoTheme.css({
    display: "inline-block",
    left: themeCentre
  });
};

//reset button for cheeto theme
$cheetoButton.on("click", function (){
  $cheetoTheme.css({
    display: "none",
    outline: "none"
  });
  playAgain();
});

$cheetoButton.mouseenter(function(){
    $cheetoButton.animate({
      padding: "23px"
    }, "fast");
    });
$cheetoButton.mouseleave(function(){
    $cheetoButton.animate({
      padding: "20px"
    }, "fast");
    });

//It's a tie theme
var $tieTheme = $(".tieTheme");
var $tieButton = $(".tieTheme button");
var tie = function () {
  animateBoard(); //run exploding squares
  $tieTheme.css({
    display: "inline-block",
    left: themeCentre
  });
};
//reset button for tie theme
$tieButton.on("click", function (){
  $tieTheme.css({
    display: "none",
    outline: "none"
  });
  playAgain();
});

$tieButton.mouseenter(function(){
    $tieButton.animate({
      padding: "23px"
    }, "fast");
    });
$tieButton.mouseleave(function(){
    $tieButton.animate({
      padding: "20px"
    }, "fast");
    });

//Function to reset gameboard but no wipe scores
//The squares to reset to star background - done
//reverse animate squares into place
//PlayerOne and PlayerTwo classes & animated flipInX to be removed - done
//numberOfTurns to reset to 0 - done

var playAgain = function () {
  numberOfTurns = 0;
  player = 1;
  $(".square").removeClass("playerOne");
  $(".square").removeClass("playerTwo");
  $(".square").removeClass("animated");
  $(".square").removeClass("flipInX");
  $(".gameboard").css ({
    display: "inline-block"
  });
  $(".square").css ({
    backgroundImage: "url(images/square_stars.png)"
  });
  $(".square.one").animate({
    right: "0px"
  }, 500);
  $(".square.two").animate({
    top: "0px"
  }, 500);
  $(".square.three").animate({
    left: "0px"
  }, 500);
  $(".square.four").animate({
    right: "0px"
  }, 500);
  $(".square.five").animate({
    top: "0px"
  }, 500);
  $(".square.six").animate({
    left: "0px"
  }, 500);
  $(".square.seven").animate({
    right: "0px"
  }, 500);
  $(".square.eight").animate({
    bottom: "0px"
  }, 500);
  $(".square.nine").animate({
    left: "0px"
  }, 500);
};

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };
//
// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));
//
// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');
//
// console.log('retrievedObject: ', JSON.parse(retrievedObject));


///////////below to end $(document).ready thing from 1st line
});

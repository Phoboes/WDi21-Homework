//SWITCH PLAYERS
  //   if x then make it 0
  //   else make it X
  //  Use a variable to detemine the current player

//CHECK FOR A WINNER
  //  Use the text in each box

//Event handlers
  //Use event handlers to change the text
  //click handlers - who is the current player?

//DISPLAY WINNER

//SEPERATE GAME LOGIC FROM PRESENTATION
//var playerOne = O;
//var playerTwo = X;

$(document).ready (function () {

var player = 1;
  $('.box').click(function () {
    $(this).addClass("animated flipInX");
      console.log(this);
    if(player === 1){
      $(this).text("O");
     player = 2;
    } else {
     $(this).text("X");
     player = 1;
   }
  });

var playerOneWins = function () {
  window.setTimeout( function () {
      swal({
          title: "Player One Wins",
          text: "You are a legend!",
          closeOnConfirm: true,
          timer: 5000
      })}, 1000);
};


var playerTwoWins = function () {
  window.setTimeout( function () {
      swal({
        title: "Player Two Wins",
        text: "You are a superstar!",
        closeOnConfirm: true,
        timer: 5000
    })}, 1000);
};



  //first row win
    //if in row one all boxes equal X
      //then playerOne wins
    //Else if all rows equal 0
      //then playerTwo wins

  $(".box").click(function () {
    if ($("#box1").text() === "O" && $("#box2").text() === "O" && $("#box3").text() === "O") {
      playerOneWins();
    } //{
      // setTimeout(function () {swal("Player 1 wins", "Awesome work!"); }, 1000); }
    else if ($("#box1").text() === "X" && $("#box2").text() === "X" && $("#box3").text() === "X") {
      playerTwoWins();
  };
});


//second row win
//if in the second row all boxes equal X
  //then playerOne wins
//Else if all rows equal 0
  //then playerTwo wins

  $(".box").click(function () {
    if ($("#box4").text() === "O" && $("#box5").text() === "O" && $("#box6").text() === "O") {
      playerOneWins();
  } else if ($("#box4").text() === "X" && $("#box5").text() === "X" && $("#box6").text() === "X") {
    playerTwoWins();
  };
  });

//third row win
  //if in the third row all boxes equal X
    //then playerOne wins
  //Else if all rows equal 0
    //then playerTwo wins

  $(".box").click(function () {
    if ($("#box7").text() === "O" && $("#box8").text() === "O" && $("#box9").text() === "O") {
      playerOneWins();
  } else if ($("#box7").text() === "X" && $("#box8").text() === "X" && $("#box9").text() === "X") {
    playerTwoWins();
  };
  });

//first column win
  //if in the first column all boxes equal X
    //then playerOne wins
  //Else if all columns equal 0
  //then playerTwo wins


  $(".box").click(function () {
    if ($("#box1").text() === "O" && $("#box4").text() === "O" && $("#box7").text() === "O") {
      playerOneWins();
  } else if ($("#box1").text() === "X" && $("#box4").text() === "X" && $("#box7").text() === "X") {
    playerTwoWins();
  };
  });

//second column win

//if in the second column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins

  $(".box").click(function () {
    if ($("#box2").text() === "O" && $("#box5").text() === "O" && $("#box8").text() === "O") {
      playerOneWins();
  } else if ($("#box2").text() === "X" && $("#box5").text() === "X" && $("#box8").text() === "X") {
      playerTwoWins();
  };
  });

//third column win

//if in the second column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins

  $(".box").click(function () {
    if ($("#box3").text() === "O" && $("#box6").text() === "O" && $("#box9").text() === "O") {
      playerOneWins();
  }  else if ($("#box3").text() === "X" && $("#box6").text() === "X" && $("#box9").text() === "X") {
      playerTwoWins();
  };
  });

//right diagonal win

//if in the right diagonal all boxes equal X
  //then playerOne wins
//Else if in the right diagonal equal 0
  //then playerTwo wins

  $(".box").click(function () {
    if ($("#box3").text() === "O" && $("#box5").text() === "O" && $("#box7").text() === "O") {
      playerOneWins();
  } else if ($("#box3").text() === "X" && $("#box5").text() === "X" && $("#box7").text() === "X") {
    playerTwoWins();
  };
  });


//left diagonal win

//if in the left diagonal all boxes equal X
  //then playerOne wins
//Else if in the left diagonal equal 0
  //then playerTwo wins

  $(".box").click(function () {
    if ($("#box1").text() === "O" && $("#box5").text() === "O" && $("#box9").text() === "O") {
      playerOneWins();
  } else if ($("#box1").text() === "X" && $("#box5").text() === "X" && $("#box9").text() === "X") {
      playerTwoWins();
  };
  });

//playerOne wins if above conditions are met

//player two wins if above conditions are met

//reset board

$(".reset").on("click", function ()  {
    $("td").empty().removeClass("complete");
});

 }); //doc.ready end of

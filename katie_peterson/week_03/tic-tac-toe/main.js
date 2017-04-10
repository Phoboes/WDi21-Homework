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

$(document).ready (function () {

  //SWITCH PLAYERS
  //   if x then make it 0
  //   else make it X
  //  Use a variable to detemine the current player

//var playerOne = O;
//var playerTwo = X;

var player = 1;
  $('.box').click(function () {
    console.log("Clicked!");
   if(player === 1){
     $(this).text("O");
     player = 2;
   } else {
     $(this).text("X");
     player = 1;
   }

  });


  //first row win


    //if in row one all boxes equal X
      //then playerOne wins
    //Else if all rows equal 0
      //then playerTwo wins


  $("body").click(function () {
    if ($("#box1").text() === "O" && $("#box2").text() === "O" && $("#box3").text() === "O") {
      console.log("Player 1 wins!");
  } else if ($("#box1").text() === "X" && $("#box2").text() === "X" && $("#box3").text() === "X") {
    console.log("Player 2 wins!");
  };
});


//second row win

//if in the second row all boxes equal X
  //then playerOne wins
//Else if all rows equal 0
  //then playerTwo wins

  $("body").click(function () {
    if ($("#box4").text() === "O" && $("#box5").text() === "O" && $("#box6").text() === "O") {
      console.log("Player 1 wins!");
  } else if ($("#box4").text() === "X" && $("#box5").text() === "X" && $("#box6").text() === "X") {
    console.log("Player 2 wins!");
  };
  });

//third row win

//if in the third row all boxes equal X
  //then playerOne wins
//Else if all rows equal 0
  //then playerTwo wins

  $("body").click(function () {
    if ($("#box7").text() === "O" && $("#box8").text() === "O" && $("#box9").text() === "O") {
      console.log("Player 1 wins!");
  } else if ($("#box7").text() === "X" && $("#box8").text() === "X" && $("#box9").text() === "X") {
    console.log("Player 2 wins!");
  };
  });

//first column win

//if in the first column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins


  $("body").click(function () {
    if ($("#box1").text() === "O" && $("#box4").text() === "O" && $("#box7").text() === "O") {
      console.log("Player 1 wins!");
  } else if ($("#box1").text() === "X" && $("#box4").text() === "X" && $("#box7").text() === "X") {
    console.log("Player 2 wins!");
  };
  });

//second column win

//if in the second column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins

  $("body").click(function () {
    if ($("#box2").text() === "O" && $("#box5").text() === "O" && $("#box8").text() === "O") {
      console.log("Player 1 wins!");
  } else if ($("#box2").text() === "X" && $("#box5").text() === "X" && $("#box8").text() === "X") {
    console.log("Player 2 wins!");
  };
  });

//third column win

//if in the second column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins

  $("body").click(function () {
    if ($("#box3").text() === "O" && $("#box6").text() === "O" && $("#box9").text() === "O") {
      console.log("Player 1 wins!");
  }  else if ($("#box3").text() === "X" && $("#box6").text() === "X" && $("#box9").text() === "X") {
    console.log("Player 2 wins!");
  };
  });

//right diagonal win

//if in the right diagonal all boxes equal X
  //then playerOne wins
//Else if in the right diagonal equal 0
  //then playerTwo wins

  $("body").click(function () {
    if ($("#box3").text() === "O" && $("#box5").text() === "O" && $("#box7").text() === "O") {
      console.log("Player 1 wins!");
  } else if ($("#box3").text() === "X" && $("#box5").text() === "X" && $("#box7").text() === "X") {
    console.log("Player 2 wins!");
  };
  });


//left diagonal win

//if in the left diagonal all boxes equal X
  //then playerOne wins
//Else if in the left diagonal equal 0
  //then playerTwo wins

  $("body").click(function () {
    if ($("#box1").text() === "O" && $("#box5").text() === "O" && $("#box9").text() === "O") {
      console.log("Player 1 wins!");
  } else if ($("#box1").text() === "X" && $("#box5").text() === "X" && $("#box9").text() === "X") {
    console.log("Player 2 wins!");
  };
  });



//playerOne wins if above conditions are met

//player two wins if above conditions are met


 }); //doc.ready end of

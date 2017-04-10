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

//var playerOne = X;
//var playerTwo = 0;

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

  $("body").click(function () {
    if ($("#box1").text() === "O" && $("#box2").text() === "O") {
      console.log("Box 1 and box 2 are equal");
  }
  });


//first row win


  //if in row one all boxes equal X
    //then playerOne wins
  //Else if all rows equal 0
    //then playerTwo wins

//second row win

//if in the second row all boxes equal X
  //then playerOne wins
//Else if all rows equal 0
  //then playerTwo wins

//third row win

//if in the third row all boxes equal X
  //then playerOne wins
//Else if all rows equal 0
  //then playerTwo wins

//first column win

//if in the first column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins

//second column win

//if in the second column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins

//third column win

//if in the second column all boxes equal X
  //then playerOne wins
//Else if all columns equal 0
  //then playerTwo wins

//right diagonal win

//if in the right diagonal all boxes equal X
  //then playerOne wins
//Else if in the right diagonal equal 0
  //then playerTwo wins

//left diagonal win

//if in the left diagonal all boxes equal X
  //then playerOne wins
//Else if in the left diagonal equal 0
  //then playerTwo wins



//playerOne wins if above conditions are met

//player two wins if above conditions are met


 }); //doc.ready end of

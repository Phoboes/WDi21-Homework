document.body.style.backgroundImage = "url(https://s-media-cache-ak0.pinimg.com/originals/26/e5/ab/26e5ab66140271e7e80cbc9668832e76.gif)";


///////////////////////////////////////////////
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
var firstCat = document.querySelector("#blackCat");
  firstCat.style.top = "0px";
  firstCat.style.left = "0px";

var neonCat = document.querySelector("#neonCat");
  neonCat.style.top = "100px";
  neonCat.style.left ="50px";

var runningCat = document.querySelector("#runningCat");
  runningCat.style.top = "200px";
  runningCat.style.left ="100px";

  var secondCat = document.querySelector("#blackCatTwo");
    secondCat.style.top = "300px";
    secondCat.style.left = "150px";

  var neonCatTwo = document.querySelector("#neonCatTwo");
    neonCatTwo.style.top = "400px";
    neonCatTwo.style.left ="200px";

  var runningCatTwo = document.querySelector("#runningCatTwo");
    runningCatTwo.style.top = "500px";
    runningCatTwo.style.left ="250px";

// var getCatBigger = document.querySelector("#crazyCat");
//   getCatBigger.style.

///////////////////////////////////////////////
  // Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
var catWalk = function () {
  var start = parseInt( firstCat.style.left );
  var step = start + 2;
    firstCat.style.left = step + "px";
};
  window.setInterval( catWalk, 50 );

    var catWalkTwo = function () {
      var start = parseInt( secondCat.style.left );
      var step = start + 2;
        secondCat.style.left = step + "px";
    };
      window.setInterval( catWalkTwo, 50 );

var neonCatWalk = function () {
  var start = parseInt( neonCat.style.left );
  var step = start + 2;
    neonCat.style.left = step + "px";
};
  window.setInterval( neonCatWalk, 50 );

  var neonCatWalkTwo = function () {
    var start = parseInt( neonCatTwo.style.left );
    var step = start + 2;
      neonCatTwo.style.left = step + "px";
  };
    window.setInterval( neonCatWalkTwo, 50 );

var catRun = function () {
  var start = parseInt( runningCat.style.left );
  var step = start + 4;
    runningCat.style.left = step + "px";
};
  window.setInterval( catRun, 50 );

  var catRunTwo = function () {
    var start = parseInt( runningCatTwo.style.left );
    var step = start + 4;
      runningCatTwo.style.left = step + "px";
  };
    window.setInterval( catRunTwo, 50 );


// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
///////////////////////////////////////////////


//********************************************
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
      // var catTimerID = null;
      //
      //   var backAndForth = function () {
      //     var start = parseInt( runningCat.style.left );
      //     var step = start + 4;
      //     var intFrameWidth = window.innerWidth;
      //
      //     if ( step < intFrameWidth ) {
      //       runningCat.style.left = step + "px";
      //     } else {
      //       window.clearInterval( catTimerID );
      //     }
      //   };
      //   catTimerID = window.setInterval(backAndForth, 50)
      //
  //
  // var catFallOne = function () {
  //   var start = parseInt( runningCat.style.top );
  //   var step = start + 4;
  //     runningCat.style.left = step + "px";
  // };
  //   window.setInterval( catRun, 50 );

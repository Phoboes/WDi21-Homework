// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
var firstCat = document.querySelector("#blackCat");
firstCat.style.top = "0px";
firstCat.style.left = "0px";
var neonCat = document.querySelector("#neonCat");
neonCat.style.top = "120px";
neonCat.style.left ="50px";


// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
var catWalk = function () {
  var start = parseInt( firstCat.style.left );
  var step = start + 2;
  firstCat.style.left = step + "px";
};
window.setInterval( catWalk, 50 );

var neonCatWalk = function () {
  var start = parseInt( neonCat.style.left );
  var step = start + 2;
  neonCat.style.left = step + "px";
};

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

window.setInterval( neonCatWalk, 50 );

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

//********************************************
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

var screenWidth = 

// document.getElementById("myDIV").style.transform = "rotate(7deg)"

  // set body width && set it as limit for the catwalk
  var pageWidth = document.querySelector("body");
    console.log();

  // when the cat reaches the limit/end/max width
    // set a function as catWalk but reversed
  // set a FOR loop to make sure the cat continues to do back and forth





//**************************************************
// font color flash
  //function changeColor() {
    //  nIntervId = setInterval(flashText, 1000);
    // }

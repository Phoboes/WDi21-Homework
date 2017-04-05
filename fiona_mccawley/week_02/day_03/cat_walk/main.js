// console.log("cats!!!");
// What do i need
// Starting Point
//   opacity: 1.0
// Ending point
//   opacity: 0.0
// Step or Increment
//   -= 0.1 each time this iteration runs i want to take away 0.1
// Delay between steps
//   100 ms
//CAT WALK

// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// window.innerWidth
// scaleX


var image = document.querySelector(".walking");
//starting point
image.style.left = "0px";
//create a function

var catWalk = function () {

  var width = window.innerWidth - 296; //created variable to store width of screen minus size of cat
  var catLeft = parseInt(image.style.left);
  var catRight = catLeft + 10;
  image.style.left = catRight + "px";

  if (catRight > width) { //if cat goes more than the width, then stop the intervals
    window.clearInterval(stopWalk);

    var reverse = function (){ //then run this function
      image.style.transform = "scaleX(-1)"; //flip cat
      var catRev = parseInt(image.style.left); //create new varible with new left position turned to a number
      var catToLeft = catRev - 10; // -10 to go back the other way
      image.style.left = catToLeft + "px";

  };
  window.setInterval (reverse, 50);
    }
};
var stopWalk = window.setInterval (catWalk, 50);






//
// var imageTwo = document.querySelector(".walkingTwo");
// imageTwo.style.right = "0px";
// imageTwo.style.transform = "scaleX(-1)";
//
// var catReverse = function () {
//   var catRightRv = parseInt(imageTwo.style.right);
//   var catLeftRv = catRightRv + 5;
//   imageTwo.style.right = catLeftRv + "px";
// };
// window.setInterval (catReverse, 50);

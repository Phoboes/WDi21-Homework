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
//cross over 450px


var image = document.querySelector(".walking");
//starting point
image.style.left = "0px";
//create a function

var catWalk = function () {
//so i want to change px to a number so I can add to it, then turn it back to px
  var catLeft = parseInt(image.style.left);
  var catRight = catLeft + 5;
  image.style.left = catRight + "px";
};
// Then i want to use a time to automate this to move every 50ms
window.setInterval (catWalk, 50);


var imageTwo = document.querySelector(".walkingTwo");
imageTwo.style.right = "0px";
imageTwo.style.transform = "scaleX(-1)";

var catReverse = function () {
  var catRightRv = parseInt(imageTwo.style.right);
  var catLeftRv = catRightRv + 5;
  imageTwo.style.right = catLeftRv + "px";
};
window.setInterval (catReverse, 50);








// -webkit-transform: scaleY(-1);
//     transform: scaleY(-1);
//     filter: FlipV;
//     -ms-filter: "FlipV";


//
// //Make the cat go from right to left
// var image = document.querySelector(".walking");
// image.style.right = "0px";
//
// var catWalkReverse = function () {
//   var catRightRv = parseInt(image.style.right);
//   var catLeftRv = catRightRv + 10;
//   image.style.right = catLeftRv;
// };
// catWalkReverse();

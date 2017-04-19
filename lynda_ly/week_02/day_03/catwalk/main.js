var cat = document.querySelector("img"); // find the first "img" tag in document
cat.style.position = "absolute"; // positions cat in absolute top left corner
cat.style.top = "100px"; // starting top 0px
cat.style.left = "0px"; // starting left 0px

var catWalk = function () { // callbackFunction
  var currentLeft = parseInt( cat.style.left ); // changes "0px" string starting position to a 0 number starting postion
  var desiredLeft = currentLeft + 10; // change the number to adjust the distance the object moves, higher the number the faster the object moves
  cat.style.left = desiredLeft + "px"; // turns back to a string by adding "px" to the end
};

window.innerWidth = "900px";
window.setInterval( catWalk, 50 ); //  (callbackFunction, delayMilliseconds) calls the function catWalk every 50 milliseconds

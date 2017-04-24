// var cat = document.querySelector("#kitten");
// cat.style.position = "absolute";
// cat.style.top = "0px";
// cat.style.left = "0px";
//
// var catWalk = function () {
//   var currentLeft = parseInt(cat.style.left);
//   var desiredLeft = (currentLeft + 10);
//   cat.style.left = desiredLeft + "px";
// };
//
// // moveBill();
//
// window.setInterval(catWalk, 100);

var parent = document.getElementById('mover'); // Element that holds the mover
var mover = document.getElementById('kitten'); // The mover, can be anything
var dir = 1; // The direction we are moving... 1 is right, -1 is left.
var dist = 10; // The distance we move each "tick"

// The ID will let us stop it later if we want.
var intervalId = setInterval(function() {
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;

    // Add dir * dist
    posX += dir * dist;

    // If we are moving right and we've gone over the right edge...
    if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX -= posX + mover.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir *= -1;
    // If we are moving left and we've gone over the left edge...
    } else if (dir == -1 && posX < 0) {
        // stop at zero...
        posX = 0;
        // and change direction...
        dir *= -1;
    }

    // Set the new position
    mover.style.left = posX + "px";
}, 50); // this number is how many milliseconds in between each move.
// Smaller interval time means smoother movement but slower performance.

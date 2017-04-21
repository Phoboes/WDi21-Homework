

var cat = document.querySelector("#cat");
cat.style.position = "absolute";
cat.style.top = "500px";
cat.style.left = "0px";


// var catdance = document.getElementsByClassName(".catdance");
// cat.style.position = "relative";
// cat.style.top = "1000px";
// cat.style.left = "0px";

// var moveCat = function () {
//     // "10px" ---> 10
//     var currentLeft = parseInt ( cat.style.left );
//     var desiredLeft = currentLeft + 1;
//
//         cat.style.left = desiredLeft + "px";
//     if (moveCat) {
//
//     }
// };
// moveCat();
//
// // function spin() {
// //   var cat = ("#cat");
// //
// // }
//   // moveCat();
//
//           // moveCat()
//           window.setInterval( moveCat, 50 );

var catdance = document.getElementsByTagName('#cat')[0];
cat.style.position = "absolute";
cat.style.left = '0px';
var walkForwards = true;
function catWalk() {
  var currentLeft = parseInt(cat.style.left);
  if (walkForwards && (currentLeft > (window.innerWidth-cat.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  if (walkForwards) {
    cat.style.left = (currentLeft + 5) + 'px';
  } else {
    cat.style.left = (currentLeft - 5) + 'px';
  }
}
window.setInterval(catWalk, 30);

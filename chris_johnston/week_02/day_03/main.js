var cat = document.querySelector("#cat");
cat.style.top = "50px";
cat.style.left = "0px";
cat.style.position = "absolute";
var walkForwards = true;

var makeCatMove = function () {

  var currentPosition = parseInt(cat.style.left);
  if (walkForwards && (currentPosition > (window.innerWidth-cat.width))) {
    walkForwards = false}

    if (walkForwards) {
      cat.style.left = (currentPosition + 10) + 'px';
    } else {
      cat.style.left = (currentPosition - 10) + 'px';
    }
};

var boat = document.querySelector("#boat");
boat.style.top = "450px";
boat.style.right = "0px";
boat.style.position = "absolute";
var boatForwards = true;

var makeBoatMove = function () {
var currentPosition = parseInt(boat.style.right);
if (boatForwards && (currentPosition > (window.innerWidth-boat.width))) {
  boatForwards = false}

  if (boatForwards) {
    boat.style.right = (currentPosition + 10) + 'px';
  } else {
    boat.style.right = (currentPosition - 10) + 'px';
  }
}


var donald = document.querySelector("#donald");
var donaldTimerID = null;


donald.style.width = "200px";
var delta = 1
var goback = true;
var animateDonald = function () {
  var currentWidth = donald.style.width;
  currentWidth = parseInt( currentWidth);
  var desiredWidth = currentWidth + delta;
  if (desiredWidth < 20) {
    delta = 1;
  } else if(desiredWidth < 700) {
      donald.style.width = desiredWidth + "px";
  } else {
    delta = -1;
  }
};




donaldTimerID = window.setInterval(animateDonald, 1000 / 400);
window.setInterval(makeCatMove, 120);
window.setInterval(makeBoatMove, 120);

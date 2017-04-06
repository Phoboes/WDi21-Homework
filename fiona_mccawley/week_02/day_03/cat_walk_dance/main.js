// console.log("cats!!!");
var image = document.querySelector(".walking");
image.style.left = "0px";
image.style.bottom = "0px";
// dancing cat start point
var dancingCat = document.querySelector(".dancing");
dancingCat.style.display = "none";
// bowling ball start point
var bowlingBall = document.querySelector(".ball");
bowlingBall.style.width = "350px";
bowlingBall.style.height = "350px";
bowlingBall.style.top = "-350px";
// var wallpaper = document.querySelector(".wallpaper");
// var backgroundImg = "url(https://media.giphy.com/media/7CieDdSRoDnFe/giphy.gif)";
//function for cat to walk out halfway
var catWalk = function () {
  var width = window.innerWidth - 296; //created variable to store width of screen minus size of cat
  var catLeft = parseInt(image.style.left);
  var catRight = catLeft + 10;
  image.style.left = catRight + "px";
  if (catRight > width / 2) { //condition to stop cat halfway
    window.clearInterval(stopWalk); //stop the interval from running
    image.style.display = "none"; //make the cat disappear
    //dancing cat appears
    // wallpaper.style.backgroundImage = backgroundImg;
    dancingCat.style.display = "inline"; //make dancing cat appear
    dancingCat.style.bottom = "0px"; //at the bottom
    dancingCat.style.left = (width / 2) + "px"; //halfway across the screen

    // I want to remove dancing cat, when the bowling ball falls on top.
    var removeDancingCat = function (){
      dancingCat.style.display = "none";
    };
window.setTimeout(removeDancingCat, 6000);
window.setTimeout (ballFall, 6000);
    var ballFall = function () {

      var ballTop = parseInt(bowlingBall.style.top);
      var ballBottom = ballTop + 10;

      bowlingBall.style.top = ballBottom + "px";
    };

window.setInterval (ballFall, 20);
  }
};
var stopWalk = window.setInterval (catWalk, 50);









// Starting Point
//   opacity: 1.0
// Ending point
//   opacity: 0.0
// Step or Increment
//   -= 0.1 each time this iteration runs i want to take away 0.1
// Delay between steps
//   100 ms

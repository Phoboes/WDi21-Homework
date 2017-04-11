// console.log("cats!!!");
var centreScreen = (window.innerWidth - 300) / 2;

var image = document.querySelector(".walking");
image.style.left = "0px";
image.style.bottom = "0px";
// dancing cat start point
var dancingCat = document.querySelector(".dancing");
dancingCat.style.display = "none";
dancingCat.style.height = "300px";
// bowling ball start point
var bowlingBall = document.querySelector(".ball");
bowlingBall.style.width = "300px";
bowlingBall.style.height = "300px";
bowlingBall.style.top = "0px";
bowlingBall.style.left = centreScreen + "px";
bowlingBall.style.display = "none";
var wallpaper = document.querySelector("body");
wallpaper.style.background = "#7E71D0";
var question = document.querySelector("h3");
question.style.display = "none";
question.style.position = "relative";
question.style.top = "100px";
question.style.left = (centreScreen - 300) + "px";
var gravestoneOne = document.querySelector(".rip");
gravestoneOne.style.width = "100px";
gravestoneOne.style.display = "none";
gravestoneOne.style.position = "absolute";
gravestoneOne.style.bottom = "0px";
gravestoneOne.style.left = "0px";
gravestoneOne.style.margin = "50px";
var gravestoneTwo = document.querySelector(".ripTwo");
gravestoneTwo.style.width = "100px";
gravestoneTwo.style.display = "none";
gravestoneTwo.style.position = "absolute";
gravestoneTwo.style.bottom = "0px";
gravestoneTwo.style.left = centreScreen + "px";
gravestoneTwo.style.margin = "50px";
var gravestoneThree = document.querySelector(".ripThree");
gravestoneThree.style.width = "100px";
gravestoneThree.style.display = "none";
gravestoneThree.style.position = "absolute";
gravestoneThree.style.bottom = "0px";
gravestoneThree.style.right = "0px";
gravestoneThree.style.margin = "50px";
var reaper = document.querySelector('.grim');
reaper.style.width = "300px";
reaper.style.left = "0px";
reaper.style.display = "none";
reaper.style.zIndex = 1;



//remove dancing cat function
var removeDancingCat = function (){
  dancingCat.style.display = "none";
};

var catWalk = function () {
  var width = window.innerWidth - 296; //created variable to store width of screen minus size of cat
  var catLeft = parseInt(image.style.left);
  var catRight = catLeft + 10;
  image.style.left = catRight + "px";
  if (catRight > width / 2) { //condition to stop cat halfway
    stopCatWalk(); //stop the interval from running
    image.style.display = "none"; //make the cat disappear
    //dancing cat appears
    // wallpaper.style.backgroundImage = backgroundImg;
    dancingCat.style.display = "inline"; //make dancing cat appear
    dancingCat.style.bottom = "0px"; //at the bottom
    dancingCat.style.left = (centreScreen + 25) + "px"; //halfway across the screen
    bowlingBall.style.display = "inline-block";
    question.style.display = "inline";

  }
};

//Cat Walk function and stop walk function
var stopWalk = window.setInterval (catWalk, 50);
var stopCatWalk = function () {
  window.clearInterval( stopWalk );
};


// What if I make this a click event that asks you to crush the cat, if so click on the bowling ballFall
// which triggers the ball to drop top: 435px
  // Cat disappears
    // Blood ensues

// I already have the bowling ball selector stored in a variable bowlingBall

    var ballFall = function () {
      var ballTop = parseInt(bowlingBall.style.top);
      var ballBottom = ballTop + 5;
      bowlingBall.style.top = ballBottom + "px";
      var ballFallId = window.setInterval (ballFall, 100);
      if (ballBottom === 450) {
        dancingCat.style.display = "none";
        question.style.display = "none";
        wallpaper.style.background = "red";
        gravestoneOne.style.display = "inline-block";
        gravestoneTwo.style.display = "inline-block";
        gravestoneThree.style.display = "inline-block";
        var grimGlide = function () {
          reaper.style.display = "inline";
          var width = window.innerWidth; //created variable to store width of screen minus size of cat
          var grimLeft = parseInt(reaper.style.left);
          var grimRight = grimLeft + 10;
          reaper.style.left = grimRight + "px";
        };
        window.setInterval(grimGlide, 100);
      }
};

bowlingBall.addEventListener("click", ballFall);







//Event listener
// var annoyUser = function () {
//   console.log("I am annoying");
// };
// // what event i.e click,
// button.addEventListener("click", annoyUser);

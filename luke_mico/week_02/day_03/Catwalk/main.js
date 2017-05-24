
var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
var walkForwards = true;
function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 20) + 'px';
    img.style.transform = "scale(-1,1)";
  }
}
window.setInterval( catWalk, 50 );

var rave = document.getElementsByTagName('rave')[0];

var raveTimerId = 50;
// // What is the starting point of the animation>
// rave.style.width = "20px";

// // For each frame of the animation, what needs
var delta = 1;
var animaterRave = function () {
var currentWidth = rave.style.width;
currentWidth = parseInt( currentWidth );
var desiredWidth = currentWidth + 1;

if (desiredWidth < 250 ) {
  rave.style.width = desiredWidth + "px";
} else {
var delta = -1;
  bill.style.width = desiredWidth + "px";
}
};

raveTimerId = window.setInterval( animaterRave, 1000 / 1000000 );





/////////////////////////////////////////////////////////////////////// ...
//
// var rave = function () {
//   this.style.width = "250px";
// };
//
// if (currentWidth === "250px") {
//   this.style.width = "250px";
// } else {
//   this.style.width = "300px";
// } for ( var i = 0; i < rave.length; i += 1 ) {
//   var currentImage = rave[i];
//   currentImage.addEventListener ("click", makeImageBigger
//   );
// }
//
// var rave = document.getElementsByTagName('rave')[0];
//
// var raveTimerId = null;
//
// // What is the starting point of the animation>
// rave.style.width = "20px";
//
// // For each frame of the animation, what needs
// var delta = 1;
// var animaterRave = function () {
//   var currentWidth = rave.style.width;
//   currentWidth = parseInt( currentWidth );
//   var desiredWidth = currentWidth + 1;
//
//   if (desiredWidth < 800 ) {
//     rave.style.width = desiredWidth + "px";
//   } else {
//     var delta = -1;
//     // bill.style.width = desiredWidth + "px";
//   }
// };
// // Setting up the timer
//   // 1000 / 60 === 60 frames per second
// raveTimerId = window.setInterval( animaterRave, 1000 / 30 );
//

// var img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';
// function catWalk() {
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + 10) + 'px';

// }
// window.setInterval(catWalk, 50);
//
// var img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';
// function catWalk() {
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + 10) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//     if (walkForwards) {
//       img.style.left = (catWalk + 15) + 'px';
//     } else {
//       img.style.left = (catWalk - 25) + 'px';
//       img.style.transform = "scale(-1,1)";
//   }
// }
// window.setInterval(catWalk, 50);
//
// //
//
// }
// window.setInterval(catWalk, 50);
//
//
//
// var img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';
//
// function catWalk() {
//   var currentLeft = parseInt(img.style.left);
// }
//   img.style.left = (currentLeft + 10) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//   }
// }
// window.setInterval(catWalk, 50);



// if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
//   walkForwards = false;
// }
// if (!walkForwards && (currentLeft <= 0)) {
//   walkForwards = true;
// }

// var img = document.getElementsByTagName('img')[0];
// img.style.left = '0px';

// var walkForwards = true;
// function catWalk() {
//   var currentLeft = parseInt(img.style.left);
// }

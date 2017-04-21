
var cat = document.querySelector(".cat1");
cat.style.position = "absolute";
cat.style.top = "0px";
cat.style.left = "0px";

var moveCat = function () {

var currentLeft = parseInt (cat.style.left);

var desiredLeft = currentLeft + 1;
console.log( desiredLeft );

cat.style.left = desiredLeft + "px";
};

window.setInterval ( moveCat, "30px");


var cat1 = document.querySelector (".cat2");
cat1.style.opacity = 1.0;
var makeCatFade = function () {
  cat1.style.opacity -= 0.05;

};

window.setInterval (makeCatFade, 30);



//CAT TW0

// var catTwo = document.querySelector(".cat3");
// cat.style.position = "absolute";
// cat.style.top = "20px";
// cat.style.left = "20px";
//
// var moveCat = function () {
//
// var currentLeft = parseInt (cat.style.left);
//
// var desiredLeft = currentLeft + 1;
// console.log( desiredLeft );
//
// cat.style.left = desiredLeft + "px";
// };
//
// window.setInterval ( moveCat, "30px");
//
//
// var cat1 = document.querySelector (".cat3");
// cat1.style.opacity = 1.0;
// var makeCatFade = function () {
//   cat1.style.opacity -= 0.05;
//
// };
//
// window.setInterval (makeCatFade, 30);
//
// var cat2 = document.querySelector(".cat1");
// cat2.style.position = "absolute";
// cat2.style.top = "0px";
// cat2.style.left = "0px";

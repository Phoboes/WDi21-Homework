// The Calculator

// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// var squareNumber = function (number) {
//   var result = number * number;
//   console.log("The result of squaring the number " + number + " is " + result + ".");
//   return result;
// };
//
// squareNumber(3);
//
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// var halfNumber = function (number) {
//   var result = number / 2;
//   console.log("Half of " + number + " is " + result + ".");
//   return result;
// };
//
// halfNumber(5);
//
// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// var percentOf = function (numOne, numTwo) {
//   var result = 100 / (numOne / numTwo);
//   console.log( numTwo + " is " + result + "% of " + numOne + ".");
//   return result;
// };
//
// percentOf(4, 2);
//
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// var areaOfCircle = function (radius) {
//   var result = radius * radius * Math.PI;
//   console.log("The area for a circle with radius " + radius + " is " + result + ".");
//   return result;
// }
//
// areaOfCircle(2);
//
// // Bonus: Round the result so there are only two digits after the decimal.
//
// var areaOfCircle = function (radius) {
//   var result = (radius * radius * Math.PI).toFixed(2);
//   console.log("The area for a circle with radius " + radius + " is " + result + ".");
//   return result;
// }
//
// areaOfCircle(2);



// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).




var halfNumber = function (number) {
  var result = number / 2;
  return result;
};

var squareNumber = function (number) {
  var result = number * number;
  return result;
};

var areaOfCircle = function (radius) {
  var result = radius * radius * Math.PI;
  return result;
};

var halfNumberResult = halfNumber(112);
var squareNumberResult = squareNumber(halfNumberResult);
var areaOfCircleResult = areaOfCircle(squareNumberResult);


var percentOf = (areaOfCircleResult / squareNumberResult) * 100;
  console.log(percentOf);










// var halfNumber = function (number) {
//   var result = number / 2;
//   return result;
// };
//   var squareNumber = function (result) {
//     var result = number * number;
//     return result;
// };
//     var areaOfCircle = function (result) {
//       var result = radius * radius * Math.PI;
//       return result;
// };
//       var percentOf = function (result) {
//         var result = 100 / (result);
//         console.log(result);
// };
//
// halfNumber (112);



// // var halfNumber = function (number) {
//   var result = number / 2;
//
//   var squareNumber = function (result) {
//     result = result * result;
//
//     var areaOfCircle = function (result) {
//       result = result * result * Math.PI;
//
//       var percentOf = function (result) {
//         result = 100 / (result);
//       };
//       percentOf();
//
//     };
//     areaOfCircle();
//
//   };
//   squareNumber();
// };

// halfNumber (112);
// console.log(halfNumber);
//
// ////// reference
//
// var myGlobalVariable = "A GLOBAL VAR";
//
// var myFirstScope = function () {
//   var myLocalVariable = "A LOCAL VAR";
//
//   var mySecondScope = function () {
//     var myVeryLocalVar = "A VERY LOCAL VAR";
//     console.log(myVeryLocalVar, myLocalVariable, myGlobalVariable);
//   };
//
//   mySecondScope();
//
//   // From here, you can see global variables and variables created in this function
//   console.log(myGlobalVariable, myLocalVariable);
// };
//
// myFirstScope();
// console.log(myGlobalVariable);

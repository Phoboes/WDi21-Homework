console.log("Working");

// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

//var globalVar = null;

// var squareNumber = function (number) {
//
//   //globalVar = number/2;
//   console.log(globalVar);
//   return "The result of squaring the number " + number + " is " +  number * number;
// };
//
// var halfNumber = function(number) {
//   return "Half of " + number + " is " + number/2;
//
// };
//
// var percentOf = function (firstNumber, secondNumber) {
//   percentageCalculation = (secondNumber/firstNumber) * 100;
//   return firstNumber + " is " + percentageCalculation + "% of " + secondNumber ;
//
// }
//
// var areaOfCircle = function (radius) {
//   circleArea = (Math.PI * radius * radius).toFixed(2);
//   return "The area of circle with radius " + radius + " is " + circleArea;
// }
//
//
// console.log(squareNumber(4));
// console.log(halfNumber(16));
// console.log(percentOf(12, 6));
// console.log(areaOfCircle(2));
//

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


//var globalVar = null;
//debugger;
//number = null;
var newNumber = function(number) {
  // return number;
  halfNumber( number );
};

var halfNumber = function(number) {
  // var number = newNumber();
  halfedNumber = number/2;
  console.log("Half of " + number + " is " + halfedNumber);
  //globalVar = number/2;
  squareNumber(halfedNumber);
};

var squareNumber = function (halfedNumber) {
  //var number = halfNumber();
  squaredNumbered = halfedNumber * halfedNumber;
  console.log(" Squared number is: ", squaredNumbered);

  areaOfCircle(squaredNumbered);
  percentOf(squaredNumbered, 0);

  //return squaredNumbered;

};

var areaOfCircle = function (squaredNumbered) {

  circleArea = (Math.PI * squaredNumbered * squaredNumbered).toFixed(2);
  console.log("The area of circle with radius " + squaredNumbered + " is " + circleArea);
  percentOf(squaredNumbered, circleArea);
}


var percentOf = function (first, second) {

  percentageCalculation = (first/second) * 100;
  return first + " is " + percentageCalculation + " % of " + second ;

}

console.log(newNumber(5));
//console.log(halfNumber());

//console.log("JS is working");

// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument
// (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function ( number ) {
  var squareResult = Math.pow (number, 2);
  console.log("The result of squaring " + number + " is " + squareResult);
  return squareResult;
};

squareNumber(6);

// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function ( number ) {
  var divide = number / 2;
  console.log("Half of " + number + " is " + divide);
  return divide;
};

halfNumber(10);

// Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function ( numOne, numTwo ) {
  var percent = ((numOne - numTwo) / ((numOne + numTwo) / 2)) * 100;
  console.log(numOne + " is " + percent + "%" + " of " + numTwo);
  return percent;
};

percentOf(10, 4);

// Write a function called areaOfCircle that will take one argument
// (the radius), calculate the area based on that, and return the result.
// It should also log a string like
// "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function ( r ) {
  var circle = ( r * r ) * Math.PI;
  console.log("The are for a circle with radius " + r + " is " + circle);
  return circle;
};

areaOfCircle(5);

// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function ( r ) {
  var circle = ( r * r ) * Math.PI;
  console.log("The are for a circle with radius " + r + " is " + circle.toFixed(2));
  return circle;
};

areaOfCircle(5);



// Part 2
//
// Write a function that will take one argument (a number)
// and perform the following operations, using the functions you wrote earlier1:

var exercise = function (number) {
  var numberOne = number / 2;
  var numberTwo = Math.pow (numberOne, 2);
  var area = ( numberTwo * numberTwo ) * Math.PI;
  var percentOf = ((area - numberTwo) / ((area + numberTwo) / 2)) * 100;
  console.log("Result one is " + numberOne + ". Result two is " + numberTwo +
              ". Result three is  " + area.toFixed(2) + ". Result four is " +
              percentOf.toFixed(2));
  return numberOne;
  return numberTwo;
  return area;
  return percentOf;
}

exercise (4);

// # 1 Take half of the number and store the result.
// # 2 Square the result of #1 and store that result.
// # 3 Calculate the area of a circle with the result of #2 as the radius.
// # 4 Calculate what percentage that area is of the squared result (#3).
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> 343c9894c79353eecd7642833572d6403b520ff0

var exercise = function ( number ) {
  var a = halfNumber(number);
  var b = squareNumber(a);
  var c = areaOfCircle(b);
  var result = percentOf(c, b);
  console.log(result);
  return result;
}

<<<<<<< HEAD
exercise(30);
>>>>>>> b3872d63a2e5386c2318f7185226a323e7bb624f
=======
exercise(30);
>>>>>>> 343c9894c79353eecd7642833572d6403b520ff0

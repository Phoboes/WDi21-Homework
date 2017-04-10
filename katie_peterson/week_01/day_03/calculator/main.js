// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function ( number ) {
  squareNumber = number * number;
  console.log( "The result of squaring the number " +  number + " is " + squareNumber );
  return squareNumber;
};

squareNumber( 5 );


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function ( num ) {
  halfNumber = num / 2;
  console.log("Half of " +  num + " is " + halfNumber);
  return halfNumber;
};

halfNumber (5);



// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function ( numOne, numTwo) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 343c9894c79353eecd7642833572d6403b520ff0
  percentOf = (numOne/numTwo) * 100;
  console.log( numOne + " is " + percentOf + " % of " + numTwo );
  return percentOf;
};

percentOf ( 2, 4 );

<<<<<<< HEAD
=======
  var percent = (numOne/numTwo) * 100;
  console.log( numOne + " is " + percent + " % of " + numTwo );
  return percent;
};

percentOf ( 3, 6 );
percentOf ( 3, 6 );
>>>>>>> b3872d63a2e5386c2318f7185226a323e7bb624f
=======
>>>>>>> 343c9894c79353eecd7642833572d6403b520ff0
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


var areaOfCircle = function (radius) {
  var area =  radius * radius * Math.PI;
<<<<<<< HEAD
<<<<<<< HEAD
  console.log( "The area for a circle with radius " + radius +  " is " + Math.round(area * 100/100));
=======
  console.log( "The area for a circle with radius " + radius +  " is " + Math.round(area * 100) /100);
>>>>>>> b3872d63a2e5386c2318f7185226a323e7bb624f
=======
  console.log( "The area for a circle with radius " + radius +  " is " + Math.round(area * 100) /100);
>>>>>>> 343c9894c79353eecd7642833572d6403b520ff0
  return areaOfCircle;
};

areaOfCircle (12);
<<<<<<< HEAD
<<<<<<< HEAD

//need to work on the decimal, not quite working yet. 
=======
areaOfCircle (15);

//need to work on the decimal, not quite working yet.
>>>>>>> b3872d63a2e5386c2318f7185226a323e7bb624f
=======

//need to work on the decimal, not quite working yet. 

>>>>>>> 343c9894c79353eecd7642833572d6403b520ff0


// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var doStuff = function (num) {
    var half    = num / 2;
    var squared = half * half;
    var area    = num * num * Math.PI; (squared);
    var result  = (squared / area) * 100;
    return doStuff;
};

doStuff(5);

//THE CALCULATOR
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function( x ) {
 var y = (Math.pow(x, 2));
   console.log("The Result of squaring the number " + x + " is " + y);
   // return squareNUmber
}
squareNumber(3);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function ( x ) {
 var y = ( x / 2 );
   console.log("Half of " + x + " is " + y);
}
halfNumber(10);

// Write a function called percentOf that will take two numbers,
//figure out what percent the first number represents of the second number,
// and return the result.
//It should also log a string like "2 is 50% of 4."

var percentOf = function ( numOne, numTwo ) {
 percent = ( ( (numOne - numTwo) / y)  * 100 );
   console.log( x + " is the " + z + "%" + " of " + y);
}
percentOf(30, 300);



//// Let's say you have two numbers, 40 and 30. ////
// 30/40*100 = 75.
 //So 30 is 75% of 40.
 //40/30*100 = 133.
 //So 40 is 133% of 30.
//The percentage increase from 30 to 40 is:
// (40-30)/30 * 100 = 33%
//The percentage decrease from 40 to 30 is:
// (40-30)/40 * 100 = 25%.
//These calculations hold true whatever your two numbers.

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function ( radius ) {
  var x = (radius * radius) * Math.PI;
  var y = x.toFixed(2);
    console.log("The area for a circle with radius " + radius + " is " + y + ".");
}
areaOfCircle(10);

// Bonus: Round the result so there are only two digits after the decimal.






///////////////////////////////////////////////////////////////////////////////
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// var multiplier = 9;
//
// for ( i = 0; i <= 10; i =

//////////////////////////

//The Grade Assigner

//Check the results of assignGrade function >from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

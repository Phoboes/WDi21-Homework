// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function (number) {
  var numberSquared = number * number
  console.log("The result of squaring " + number + " is " + numberSquared);
  return numberSquared
}
squareNumber(5);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function (number) {
  var numberHalved = number / 2

  console.log("Half of " + number + " is " + numberHalved)

  return numberHalved
}
halfNumber(10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function (number1, number2) {
  var thePercent = (number1 / number2) * 100
  console.log(number1 + " is " + thePercent + "%" + " of " + number2)

  return thePercent
}

percentOf(10,100)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

  var areaOfCircle = function (radius) {
  var area = 3.14159265359 * (radius * radius)
  console.log("The area for a circle with radius " + radius + " is " + area )

  return area
}

areaOfCircle(5);



// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

  var allTheFunctions = function(number) {
  var functionOne = halfNumber(number)
  var functionTwo = squareNumber(functionOne)
  var functionThree = areaOfCircle(functionTwo)
  var functionFour = percentOf(functionThree,functionTwo)
}

allTheFunctions(10);


// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for ( var count =1; count <= 20; count += 1 ) {
if (count % 2 === 0)
console.log(count + " is even")
else {console.log(count + " is odd")}
}

// Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var count =1; count <= 10; count += 1 ) {
  var timesCount = count * 9
  console.log(count + " * 9 =" + timesCount)
}

// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for (var count=1; count <= 100; count += 1) {

  if (count >= 80){
  console.log("for " + count + " you get a A")}

  else if (count >= 70){
  console.log("for " + count + " you get a B")}

  else if (count >= 60){
  console.log("for " + count + " you get an C")}

  else {console.log("You fail")}

}

// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


var tellFortune = function (job, location, spouse, numKids) {
   return ("You will be a " + job + " in " + location + ", and married to " + spouse + " with " + numKids + " kids.")
};

console.log( tellFortune("Web Developer", "Sydney", "Katie", 2) );
console.log( tellFortune("Doctor", "London", "Sarah", 3) );
console.log( tellFortune("Lawyer", "New York", "Anne", 0) );


// The Age Calculator
//
// Forgot how old you are? Calculate it!
//
// Write a function named calculateAge that:
//
// Takes 2 arguments: birth year, current year.
// Calculates the 2 possible ages based on those years.
// Outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calculateAge = function (birthYear, currentYear) {
  var ageOne = currentYear - birthYear;
  console.log ( "You are either ", ageOne, " or ", ageOne - 1);
};

calculateAge(1991, 2017);
calculateAge(1993, 2017);
calculateAge(1944, 2017);


// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// Takes 2 arguments: age, amount per day.
// Calculates the amount consumed for rest of the life (based on a constant max age).
// Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function (age, amount) {
  const maxAge = 85;
  var total = (maxAge - age) * 365 * amount;
  console.log(total);
};

calculateSupply(25, 1);
calculateSupply(84, 10);
calculateSupply(50, 5);


// The Geometrizer
//
// Create 2 functions that calculate properties of a circle, using the definitions here.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
// Part 1
var calcCircumference = function ( r ) {
  var returnVal = 2 * Math.PI * r;
  console.log( returnVal );
};

calcCircumference( 5 );
// Part 2
var calcArea = function ( radius ) {
  var returnVal = Math.PI * ( radius * radius );
  console.log( returnVal );
};

calcArea( 5 );


// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Create a function called celsiusToFahrenheit:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
//
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsiusToFahrenheit = function (celsius) {
  var conversion = celsius * 1.8 + 32;
  console.log(celsius + "C is " + conversion + "F.");
};

var fahrenheitToCelsius = function (fahrenheit) {
  var conversion = (fahrenheit - 32) / 1.8;
  console.log(fahrenheit + "F is " + conversion + "C.")
};

celsiusToFahrenheit(30);

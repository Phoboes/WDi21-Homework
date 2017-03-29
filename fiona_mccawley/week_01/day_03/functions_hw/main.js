// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
// console.log("JS is working");

var tellFortune = function(children, partner, geoLocation, job) {
  console.log( "You will be a " + job + " in " + geoLocation + " , and married to " + partner + " with " + children + " kids.");
};

tellFortune(3, "Wilfred", "Dubai", "Window Cleaner");
tellFortune(0, "Barnabas", "The Artic", "Golfer");
tellFortune(3, "Homer", "Springfield", "Nuclear plant worker");




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


var calculateAge = function (birthYear) {
  var possibleAge = (new Date().getFullYear()) - birthYear;
  var possibleAgeTwo = possibleAge - 1;
  console.log("They are either " + possibleAge + " or " + possibleAgeTwo);
  return possibleAge, possibleAgeTwo;
};

calculateAge(1990);
calculateAge(1978);
calculateAge(1939);

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


var maxAge = 80;
var calculateSupply = function (age, amountPerDay) {
  var snackTotal = (maxAge - age) * amountPerDay;
  console.log("You will need " + snackTotal + " twix to last you until the ripe old age of " + maxAge);
  return snackTotal;
};

calculateSupply(50, 2);
calculateSupply(23, 5);
calculateSupply(75, 10);

// The Geometrizer
//
// Calculate properties of a circle, using the definitions here.
//
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
//
var calcCircumference = function ( r ) {
  var returnVal = 2 * Math.PI * r;
  console.log( returnVal );
  return returnVal;
};

calcCircumference( 4 );

var calcArea = function ( r ) {
  var circle = ( r * r ) * Math.PI;
  console.log( circle );
  return circle;
}

calcArea( 5 );

// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var tempCelc = 35;
var celsiusToFahrenheit = function ( tempCelc ) {
  var convertFarhenheit = ( tempCelc * 9 ) / 5 + 32;
  console.log( tempCelc + "C" + " is " + convertFarhenheit + "F" );
  return convertFarhenheit;
}


var tempFar = 120;
var fahrenheitoCelsius = function ( tempFar ) {
  var convertCelcius = ( tempFar -32 ) * 5 / 9;
  console.log( tempFar + "F" + " is " + convertCelcius + "C");
  return convertCelcius;
}

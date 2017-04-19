// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = function (numOfChildren, partnerName, geoLocation, jobTitle) {
  console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChildren + " kids.");
};

tellFortune(5, "rob", "sydney", "Gardener");
tellFortune(3, "bob", "brisbane", "boss");
tellFortune(6, "ron", "melbourne", "architect");


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

// var calculateAge = function (birthYear, currentYear) {
//   var age = currentYear - birthYear;
//   console.log("They are either " + age + " or " + (age - 1));
// };
//
// calculateAge(1996, 2017);
// calculateAge(1962, 2017);
// calculateAge(1983, 2017);

// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var currentTime = new Date();
var currentYear = currentTime.getFullYear();
  console.log(currentYear);

var calculateAge = function (birthYear) {
  var age = currentYear - birthYear;
  console.log("They are either " + age + " or " + (age - 1));
};

calculateAge(1996);
calculateAge(1962);
calculateAge(1983);


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

var calculateSupply = function (currentAge, dailyAmount) {
  var maxAge = 80;
////// var dailyAmount = dailyAmount.toFixed() || Should I use this instead of adding it into console.log? //////////
  console.log( "You will need " + (maxAge - currentAge) * 365 * dailyAmount.toFixed() + " to last you until the ripe old age of " + maxAge );
};

calculateSupply(60, 20);
calculateSupply(35, 37);
calculateSupply(18, 43.402823);


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


var calcCircumfrence = function (radius) {
  console.log( "The circumference is " + (2 * radius * Math.PI).toFixed(2) );
};

calcCircumfrence(15);
calcCircumfrence(36);
calcCircumfrence(23);

var calcArea = function (radius) {
  console.log( "The area is " + (radius * radius * Math.PI).toFixed(2) );
};

calcArea(15);
calcArea(36);
calcArea(23);

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
  console.log( celsius + " C is " + (celsius * 1.8 + 32) + " F") ;
};

celsiusToFahrenheit(23);
celsiusToFahrenheit(18);
celsiusToFahrenheit(3);

var fahrenheitToCelsius = function (fahrenheit) {
  console.log( fahrenheit + " F is " + ((fahrenheit - 32) / 1.8).toFixed(2) + " C") ;
};

fahrenheitToCelsius(100);
fahrenheitToCelsius(69);
fahrenheitToCelsius(93)

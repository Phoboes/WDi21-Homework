console.log("Worjing js");

// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


var tellFortune = function(numofChildren, spouse, country, jobPosition){

var combinedSentence = "You will " + jobPosition + " in " + country +", and married to " + spouse + " with " + numofChildren;
return combinedSentence;
};

var fortune = tellFortune(6, "Yesu", "Australia", "Webdev")
console.log(fortune);


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




var calculateAge = function(birthYear, currentYear){

  predictableAge = currentYear - birthYear;

  return "You are either " + predictableAge + " or " + (predictableAge + 1) + ".";
};

var age = calculateAge(1985, 2017);

console.log(age);



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

var calculateSupply = function (myAge, amountPerDay){
    maxAge = 80;
    totalSupply = (maxAge - myAge) * amountPerDay * 365 + " KG";
    return totalSupply;
};
var maxSupply = calculateSupply(35, 80);
console.log(maxSupply);








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


var calcCircumfrence = function(radius)
{
  var circumference = 2 * Math.PI * radius;
  return circumference;
};
console.log(calcCircumfrence(34).toFixed(2));




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


// Celsius to Fahrenheit:   °C × 1.8 + 32 = °F
// Fahrenheit to Celsius:   (°F − 32) / 1.8 = °C

var celsiusToFahrenheit = function(tempInCelcius){

   var degreeInFarenheit = (tempInCelcius * 1.8 + 32) + " \xB0F";
   return degreeInFarenheit;

};

console.log(celsiusToFahrenheit(100));

var fahrenheitToCelsius = function(tempInFarenheit){
  var degreeInCelcius = (tempInFarenheit - 32) / 1.8 + " \xB0C" ;
  return degreeInCelcius;
};


console.log(fahrenheitToCelsius(212));

// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// // Store the following into variables: number of children,
// partner's name, geographic location, job title.
// Output your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

//
// console.log("JS is working");

var lifeGoals = function(children, partner, geoLocation, job) {
  return "You will be a " + job + " in " + geoLocation + " , and married to " + partner + " with " + children + " kids.";
};

console.log(lifeGoals(10, "Wilfred", "Tokyo", "Lawyer") );



// The Age Calculator
//
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var age = function (birthYear, currentYear) {
  var possibleAge = currentYear - birthYear;
  var possibleAgeTwo = possibleAge - 1;
  console.log("They are either " + possibleAge + " or " + possibleAgeTwo);
  return possibleAge, possibleAgeTwo;
};


age(1939, 2017);

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

var convertCelc = function ( tempCelc ) {
  var convertFarhenheit = ( tempCelc * 9 ) / 5 + 32;
  console.log( tempCelc + "C" + " is " + convertFarhenheit + "F" );
  return convertFarhenheit;
}

convertCelc(40);

var convertFar = function ( tempFar ) {
  var convertCelcius = ( tempFar -32 ) * 5 / 9;
  console.log( tempFar + "F" + " is " + convertCelcius + "C");
  return convertCelcius;
}

convertFar(120);

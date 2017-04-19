// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberOfChildren = "N";
var partnersName = "Z";
var geoLocation = "Y";
var jobTitle = "X";

console.log( "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids." );



// The Age Calculator
//
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2017;
var birthYear = 1991;
var ageOne = currentYear - birthYear - 1;
var ageTwo = currentYear - birthYear;

console.log("They are either " + ageOne + " or " + ageTwo);


// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 25;
var maximumAge = 100;
var dailyAmount = 5;

console.log("You will need " + ((maximumAge - currentAge) * 365 * dailyAmount) + " to last you until the ripe olf age of " + maximumAge );




// The Geometrizer
//
// Calculate properties of a circle, using the definitions here.
//
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 10 //cm
const pi = 3.14159

console.log("The circumference is " + (2 * pi * radius) + "cm");

console.log("The area is " + (pi * radius * radius) + "cm^2");



// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 30 //degrees

console.log(celsius + "°C is " + (celsius * 1.8 + 32) + "°F");

var fahrenheit = 80 //degrees

console.log( fahrenheit + "°F is " + (fahrenheit - 32) / 1.8 + "°C.");

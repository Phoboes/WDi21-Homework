
//
// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location,
// job title.
//
// Output your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."
//

var numOfChildren = 3;
var nameOfSpouse = "Daphne";
var geoLocation = "America";
var jobTitle = "Web Master";


console.log( "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + nameOfSpouse + " with " + numOfChildren + " kids." );

// The Age Calculator
//
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2017;
var age = 28;

var birthYear = currentYear - age;

console.log("They are either" + birthYear + " or " + (birthYear - 1 ) + ".");

// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var maxAge = 100;
var intake = 10;

console.log( "You will need " + (maxAge - age) * 365 * intake + " to last you until the ripe old age of " + maxAge);

// The Geometrizer
//
// Calculate properties of a circle, using the definitions here.
//
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 3.16;

console.log( "The circumference is " + radius);
console.log( "The area is " + radius * 2);

// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var temp = "celsius temperature ";
var fah = ( temp * 32 );

console.log( 30 + " is " + fah);

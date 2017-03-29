// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, 
// geographic location, job title. Output your fortune to the screen like so: 
// "You will be a X in Y, and married to Z with N kids."

var numOfChildren = 12;
var partnerName = "Ruby";
var geoLocation = "Sydney";
var jobTitle = "Ventriloquist";

console.log("You will be a " + jobTitle + " in " + geoLocation + " and maried to " + partnerName + " with " + numOfChildren + " kids");

// --------------------------------------------

// The Age Calculator

// Forgot how old someone is? Calculate it!

//     Store the current year in a variable.
//     Store their birth year in a variable.
//     Calculate their 2 possible ages based on the stored values.
//     Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2017;
var birthYear = 1994;
console.log(currentYear - birthYear);

// --------------------------------------------

// The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

//     Store your current age into a variable.
//     Store a maximum age into a variable.
//     Store an estimated amount per day (as a number).
//     Calculate how many you would eat total for the rest of your life.
//     Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 23;
var maxAge = 100;
var amountPerDay = 4;
var numOfSnacks = (100 - 23) * 365 * amountPerDay;
console.log("You will need " + numOfSnacks + " snacks to last you until the rip old age of " + maxAge);

// ---------------------------------------------

// The Geometrizer

// Calculate properties of a circle, using the definitions here.

//     Store a radius into a variable.
//     Calculate the circumference based on the radius, and output "The circumference is NN".
//     Calculate the area based on the radius, and output "The area is NN".

var radius = 10;
var circumfrence = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);
console.log("The circumference is " + circumfrence);
console.log("The area is " + area);

// -------------------------------------------------

// The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

//     Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F".
//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C."

var celsius = 50;
var fahrenheit = 104;

console.log(celsius + "C is " + (celsius * 1.8 + 32) + "F");
console.log(fahrenheit + "F is " + ((fahrenheit - 32) / 1.8) + "C"); 
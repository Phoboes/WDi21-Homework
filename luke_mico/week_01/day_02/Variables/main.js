// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?

var numKids  = 5; // Store the following into variables: number of children, partner's name, geographic location, job title.
var partner  = 'Rhonda'; // Store the following into variables: number of children, partner's name, geographic location, job title.
var geolocation = 'Japan'; // Store the following into variables: number of children, partner's name, geographic location, job title.
var jobTitle = 'graphic designer'; // Store the following into variables: number of children, partner's name, geographic location, job title.

var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ', and married to ' + partner + ' with ' + numKids + ' kids.'; //Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
console.log(future);


// The Age Calculator
//
// Forgot how old someone is? Calculate it!

var birthYear = 1984; // Store the current year in a variable.
var currentYear  = 2016; // Store their birth year in a variable.

var age  = currentYear - birthYear; // Calculate their 2 possible ages based on the stored values.
console.log('They are either ' + age + ' or ' + (age - 1)); // Output them to the screen like so: "They are either NN or NN", substituting the values.



// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

var numKids  = 36; // Store your current age into a variable.
var maxAge = 99;// Store a maximum age into a variable.
var amountPerDay = 14; // Store an estimated amount per day (as a number).
var totalNeeded = (numPerDay * 365) * (maxAge - age); // Calculate how many you would eat total for the rest of your life.
console.log("You will need " + totalNeeded + " to last you until the ripe old age of X"); // Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// The Geometrizer
//
// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".




// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

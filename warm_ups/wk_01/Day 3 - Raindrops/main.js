// Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

// ----------------------------------------

// debugger

var number = 1755;
var returnStr = '';

// For every one of these conditions, add to the empty string.

if ( number % 3 === 0 ) {

// += says "Take this variable, and add this value to it. 
// ex: "str" += "ing" is the same as "str" = "str" + "ing"
  returnStr += "Pling";
}

if ( number % 5 === 0 ){
  returnStr += "Plong";
}

if ( number % 7 === 0 ){
  returnStr += "Plang";
}

// If none of the above conditions is true, the string will be empty. 
// Adding a number to a string will coerce it into a string as well. ex: 1 + "" = "1".

if ( returnStr === '' ) {
  returnStr += number;
}

// ----------------------------------------

// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

console.log( returnStr );
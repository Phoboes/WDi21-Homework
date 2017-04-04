// Control Flow

// if ( some expression ) {
//
// }

if (true) {
  console.log("That evaluated to true");
}

if ( false ) {
  console.log("This shouldn't run");
}

var age = 96;

if ( age >= 21 ) {
  console.log("You can see this page");
} else {
  console.log("Redirect to my little pony");
}

//If the age is over 21
//Print out you are right to look at the page
// If you are not over 21
// Redirect to mylittlepony

//I have a boolean that indicates whehter there are new tweets
//Print out there are new tweets
// If there aren't
//Print out there are no tweets to show

var newTweets = true;
if ( newTweets === true ) {
  console.log("There are tweets to show");
} else {
  console.log("There are no snippets of wisdom");
}

//Comparison operators
  // === - Strict Equality
  // == - Loose Equality (Type Coercion)
  // !== - Strict Inequality
  // != - Loost Inequality

// I want a favNumber variable
//IF the variable is not equal to 42
// Print out That's the wrong number
// If it is equal
// Print out Yay! Twins!

var favNumber = 42;

if ( favNumber !== 42 ) {
  console.log("That's the wrong number");
} else {
  console.log("Yay! Twins!");
}

// I have two Numbers
// If x times 2 is equal to y
// Print out x is half Y
// Otherwise, print out Y is not double X

var x = 10;
var y = 20;

if (x * 2 === y) {
console.log("X is half Y");
} else {
  console.log("Y is not double X");
}

var age = 28;
var youthfulHacker = true;

//IF the age is over 21, or the person is a hacker
  //Print out you can see the site
  // Otherwise, better luck next year

if ( age>= 21 || youthfulHacker === true) {
  console.log("You can see the site");
} else {
  console.log("Better luck next year");
}

var myName = "Wolf";
var occupation = "Landscape";

// If the name sis Wolf, and the occupation is Taecher
//Print out you probably work at GA
//Otherwise, print out Youa re probably in Alaska

if ( myName === "Wolf" && occupation === "Teacher" ) {
  console.log("You work at GA");
} else {
  console.log("You are probably in Alaska");
}

//Logical Operators
  //Logical and Operator (&&)
  //Both sides need to be true!
  // Logical or OPerator (||)
  //Only needs one side to be true

  //If /Else If / Else Statement

  // if (condition) {
  //
  // } else if (otherCondiiton ) {
  //
  // } else if (anotherCondition ) {
  //
  // } else {
  //

  var age = 10;
  if ( age >= 35 ) {
    console.log("You can vote and hold any place in Government");
  } else if ( age >= 25) {
    console.log("You can vote and run for the senate");
  } else if ( age >= 18 ) {
    console.log("You can vote");
  } else {
    console.log("You have no voice in Government");
  }

  /// If you are over 35
  // You can vote and you can hold any place in Gov.
// Or if you are over 25
  // You can vote and you can run for the senate
// Or if you are over 18
  // You can vote
// Or if you aren't
  // You have no voice in Gov.

//Joel aka The Blade
var name = "The Blade";
var occupation = "The Teacher";

if (name === "Blade" && occupation === "Teacher") {
  console.log("That's a great choice");
} else if (name === 'Blade' && occupation === "Ping Pong Player") {
  console.log("That's not a  great choice");
} else {
  console.log("I don;t know who you are, I don;t know what you want");
}
//If you are the blade, and you are a Teacher
  //That's a great choice
  //Or if you are the blade, and you are a ping pong player
  // That's not a great choice
  //Otherwise, probably a good choice

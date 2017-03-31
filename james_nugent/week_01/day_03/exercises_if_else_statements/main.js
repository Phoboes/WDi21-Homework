// What number's bigger?
//
// Write an if statement that tests two number (numOne and numTwo), and prints the biggest number

var numOne = 30
var numTwo = 20

if ( numOne > numTwo ) {
  console.log( numOne );
} else {
  console.log( numTwo );
}


// The World Translator
//
// Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World, if the language is French write something romantic)

var language = "Japanese";

if ( language === "English" ) {
  console.log( "Hello World" );
} else if ( language === "French" ) {
  console.log( "Bonjour le monde" );
} else if ( language === "Italian" ) {
  console.log( "Ciao mondo" );
} else if ( language === "German" ) {
  console.log( "Hallo Welt" );
} else if ( language === "Spanish" ) {
  console.log( "Hola Mundo" );
} else if ( language === "Russian" ) {
  console.log( "Privet mir" );
} else if ( language === "Japanese" ) {
  console.log( "Kon'nichiwa sekai" );
} else {
  console.log( "Sorry I don't speak your language!" );
}

// The Grade Assigner
//
// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results


var grade = 85;

if ( grade >= 85 ) {
  console.log("You received an A! :D");
} else if ( grade >= 75 ) {
  console.log( "You received a B :)" );
} else if ( grade >= 65 ) {
  console.log( "You received a C :|" );
} else if ( grade >= 50 ) {
  console.log( "You received a D :/" );
} else {
  console.log( "You received an F :(" );
}


// The Pluralizer
//
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!!

var noun = "computer"
var plural = "s"
var num = 0

if ( num === 1 || num === -1 ) {
  console.log( num + " "  + noun );
} else {
  console.log( num + " " + noun + plural);
}

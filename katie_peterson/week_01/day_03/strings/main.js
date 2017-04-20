// Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function ( amount ) {
  if (amount === 1000000) {
    console.log( amount + " dollars (pinky)" );
  } else {
    console.log( amount + " dollars");

  }
};


DrEvil (1000000);

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!'

var mixUp = function ( x , y ) {
  //slice?
  console.log(y.slice(0, 2) + x.slice(2) + " " + x.slice(0, 2) + y.slice(2));
};

mixUp ( "mix", "pod" );

// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

//

var fixStart = function ( a )  {
  //charAt, return the first character of a string
  var c = a.charAt(0);
  // RegExp is search and find, 'g' finds all matches
  //slice seems to work but I am not really sure if it is the correct use and the internet suggested using it with arrays.
  return c + a.slice(1).replace(new RegExp(c, 'g'), '*');
}

fixStart ("babble");

//need to call fixStart ("babble"); in the browser console.

// Verbing
//

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// Not Bad
// //
// //
var verbing = function ( word ) {
  if (word.length < 3);
      console.log( word );
//slice seems to work again...
 if (word.slice(-3) == "ing") {
    console.log(word + "ly");
  }
  else {
    console.log( word + "ing");
  };
};
verbing ( "swim" );



// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
// //   notBad('This movie is not so bad!'): 'This movie is good!'
// //   notBad('This dinner is bad!'): 'This dinner is bad!'
// //
// //

var notBad = function (sentence) {

//indexOf retruns the position of the first occurance of a value in a string.
  var notInd = sentence.indexOf('not');
  var badInd = sentence.indexOf('bad');
//
  if (notInd == -1 || badInd == -1 || badInd < notInd) {
  console.log (sentence);}
  else {
    console.log (sentence.slice(0, notInd) + 'good' + sentence.slice(badInd + 3));
  };
};

notBad ("This dinner is not that bad!");

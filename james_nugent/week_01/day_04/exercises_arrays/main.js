// Exercises: Arrays
// Your top choices
//
// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var topFive = ["Blue", "Green", "Red", "Black", "White"];
var suffix = ["1st", "2nd", "3rd", "4th", "5th" ];

for (var i = 0; i < topFive.length; i++) {
  console.log("My " + suffix[i] + " choice is " + topFive[i]);
}


var favAnimals = [
  "Hyena",
  "Crow",
  "Octopus",
  "Steak Factories",
  "Dog"
]

for (var i = 0; i < favAnimals.length; i++) {
  var returnStr = '';
  if( i === 0 ){
    returnStr = "My " + (i + 1) + "st choice will be " + favAnimals[i] + ".";
  } else if ( i === 1 ) {
    returnStr = "My " + (i + 1) + "nd choice will be " + favAnimals[i] + ".";
  } else if ( i === 2 ) {
    returnStr = "My " + (i + 1) + "rd choice will be " + favAnimals[i] + ".";
  } else {
    returnStr = "My " + (i + 1) + "th choice will be " + favAnimals[i] + ".";
  }
  console.log( returnStr )
}

// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function ( numOne, numTwo ) {
  if ( numOne > numTwo ) {
    console.log(numOne);
  } else if ( numOne === numTwo ) {
    console.log( numOne + " and " + numTwo + " are the same." );
  } else {
    console.log( numTwo );
  }
};

maxOfTwoNumbers( 4, 4 );

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function ( numOne, numTwo, numThree ) {
  if ( numOne >= numTwo && numOne >= numThree ) {
    console.log( numOne );
  } else if ( numTwo >= numOne && numTwo >= numThree ) {
    console.log( numTwo );
  } else {
    console.log( numThree );
  }
};

maxOfThree( 1, 5, 2);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowelTest = function ( vowel ) {
  if ( vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ) {
    console.log( true );
  } else {
    console.log( false );
  }
};

vowelTest( "b" );

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var test = [1,2,3,4]

console.log(test);

var sumArray = function ( [ someNums ] ) {
  for (var i = 0; i < someNums.length; i += 1) {
    var nums = someNums[i];
    console.log( nums );
  }
};

sumArray(test);

// var multiplyArray = function ([i]) {
//
// };


// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.














//

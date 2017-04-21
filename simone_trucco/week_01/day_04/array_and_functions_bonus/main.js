// ARRAY AND FUNCTIONS BONUS MATERIAL
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function maxOfTwoNumbers ( x, y ) {
  if ( x > y ) {
    console.log( x + " is the bigger number");
  } else {
    console.log( y + " is the biggest number");
  }
};
maxOfTwoNumbers( 14, 10);

///////////////////////////////////////////////////////////////
// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
//

function  reverseString ( str ) {
  var splitString = str.split("");
    var reverseArray = splitString.reverse();
      var joinArray = splitString.join("");
        console.log(joinArray);
};
reverseString( "Hello" );



function findLongestWord () {
  var words = ["Home", "Holiday", "Supercalifragilisticexpialidocious", "Pirates"];
var home = words[0];
console.log(home);

};
findLongestWord();

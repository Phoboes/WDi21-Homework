//console.log("Boooooom tish");
// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers
// that takes two numbers as arguments and
// returns the largest of them.
// Use the if-then-else construct available in Javascript.

var maxOfTwoNumbers = function (numOne, numTwo) {
  if ( numOne > numTwo ) {
    console.log(numOne);
    return numOne;
  } else if ( numTwo > numOne ) {
    console.log(numTwo);
    return numTwo
  } else {
    console.log("numbers are equal");
  }
};
maxOfTwoNumbers(30, 30);

// You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments
// and returns the largest of them.
var maxOfThreeNum = function (numUno, numDos, numTres) {
  var maxNumber = 0;
  if ( (numUno >= numDos) && (numUno >= numTres) ) {
    maxNumber = numUno;
  } else if ( (numDos >= numUno) && (numDos >= numTres ) ) {
    maxNumber = numDos;
  } else {
    maxNumber = numTres;
  }
  console.log(maxNumber);
  return maxNumber;
}
maxOfThreeNum(60, 50, 50);



// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

var vowelCheck = function (letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
vowelCheck("b");

// Define a function sumArray and a function multiplyArray
// that sums and multiplies (respectively) all
// the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10,
// and multiplyArray([1,2,3,4]) should return 24.

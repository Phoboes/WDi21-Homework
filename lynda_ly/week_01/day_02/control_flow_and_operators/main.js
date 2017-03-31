// What number's bigger?

// Write an if statement that tests two number (numOne and numTwo), and prints the biggest number

var numOne = 18;
var numTwo = 26;

if (numOne > numTwo) {
  console.log(numOne);
} else {
  console.log(numTwo);
}

// The World Translator

// Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World, if the language is French write something romantic)
var language = "french";

var english = "Hello World";
var french = "Bonjour travail";
var italian = "Ciao lavoro";
var dutch = "Hello werk";

if (language === "dutch") {
  console.log(dutch);
} else if (language === "italian") {
  console.log(italian);
} else if (language === "french") {
  console.log(french);
} else {
  console.log(english);
}

// The Grade Assigner

// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results

var testResult = 76;

if (testResult >= 90) {
  console.log("A");
} else if (testResult >= 80) {
  console.log("B");
} else if (testResult >= 70) {
  console.log("C");
} else if (testResult >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// The Pluralizer

// Write an if statement that works with a noun and a number. Make the noun plural if necessary!!

var noun = "car";
var number = 6;

if (number > 1) {
  console.log(noun + "s");
} else {
  console.log(noun);
}

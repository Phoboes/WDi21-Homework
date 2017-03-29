// What number's bigger?
// Write an if statement that tests two number (numOne and numTwo), 
// and prints the biggest number

var numOne = 10;
var numTwo = 5;
numOne > numTwo ? console.log(numOne) : console.log(numTwo);

// ---------------------------------------------

// The World Translator
// Write an if statement that writes Hello World in different languages 
// (i.e. if the language is english, write Hello World, 
// if the language is French write something romantic)

var lang = "English";
if (lang === "English") {
    console.log("Hello World!");
} else if (lang === "French") {
    console.log("Something romantic");
} else {
    console.log("No such language");
}

// -------------------------------------------

// The Grade Assigner
// Write an if statement that gives users a score 
// (A, B, C, D, or F) based on the test results

var testResult = 88;
var score;
if (testResult >= 90) {
    score = "A";
} else if (testResult >= 80 && testResult < 90) {
    score = "B";
} else if (testResult >= 70 && testResult < 80) {
    score = "C";
} else if (testResult >= 50 && testResult < 70) {
    score = "D";
} else {
    score = "F";
}

// --------------------------------------------

// The Pluralizer
// Write an if statement that works with a noun and a number. 
// Make the noun plural if necessary!!

var nouns = ["dog", "cat", "computer"];

function pluralize(args) {
    Array.from(args).forEach((i) => {
         console.log(i + "s");
    });
}

function singular(args) {
    for (var i = 0; i < args.length; i++) {
        console.log("No pluralization of: " + args[i]);
    }
}

function checkIfPlural(num) {
    return num > 1 ? pluralize(nouns) : singular(nouns);
}

checkIfPlural(2);
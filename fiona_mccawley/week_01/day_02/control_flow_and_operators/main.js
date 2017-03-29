// Exercises: if/else statements
//
// What number's bigger?
//
// Write an if statement that tests two number (numOne and numTwo),
//and prints the biggest number
//

var numOne = 50;
var numTwo = 50;

if ( numOne > numTwo ) {
  console.log("The first number " + numOne + " is larger");
} else if ( numTwo > numOne ) {
  console.log("The second number " + numTwo + " is larger");
} else {
  console.log("The numbers are equal");
}

// The World Translator
//
// Write an if statement that writes Hello World in
//different languages (i.e. if the language is english,
//write Hello World, if the language is French write something romantic)

var language = "Japanese";

if (language === "English") {
  console.log("Hello World");
} else if ( language === "French" ) {
  console.log("Vos yeux sont aussi bleus que l'ocean");
} else {
  console.log("I don't recognise that language");
}

// The Grade Assigner
//
// Write an if statement that gives users a score (A, B, C, D, or F)
//based on the test results

var score = 95;

if ( score >= 90 ) {
  console.log("Congratulations you got an A!!");
} else if ( score >= 80 ) {
  console.log("Good job, you got a B");
} else if ( score >= 60 ) {
  console.log("Nice work, you got a C");
} else if ( score >= 50 ) {
  console.log("You got a D");
} else {
  console.log("You got an F, study harder next time");
}





// The Pluralizer
//
// Write an if statement that works with a noun and a number.
//Make the noun plural if necessary!!

// This if statement is to provide the details on what each animal is called. If
// there are 1, 2 or more than 2 of them.
// I'm going to do it for a couple of animals, baboons = troop or flange, kittens = kindle,
// litter, intrigue. Crows and magpies = murder
// create a variable for animal
// create a variable for the number of animals

// If there is an animal and there is only one
  // then print out the single noun
// Otherwise if there is an animal and there are two
  // Then print out the plural
//Otherwise if there is more than 2 animals, the print out the collective noun
//Else print out a statement including the animal name doing something.

var animal = "Elephant";
var numberOfAnimals = 10;

if ( numberOfAnimals === 1 && animal === "Baboon" ) {
  console.log("There is a Baboon in your backyard");
} else if ( numberOfAnimals === 2 && animal === "Baboon" ) {
  console.log("There are Baboons in your backyard!");
} else if ( numberOfAnimals > 2 && animal === "Baboon" ) {
  console.log("You have a troop of baboons in your yard, run away now!!");
} else if ( numberOfAnimals === 1 && animal === "Kitten" ) {
  console.log("Awww, you have a kitten, how cute!");
} else if ( numberOfAnimals === 2 && animal === "Kitten" ) {
  console.log("You got another kitten, they are so cute");
} else if ( numberOfAnimals > 2 && animal === "Kitten" ) {
  console.log("You have a kindle of kittens, i'm bursting with happiness! Did you know they are also called an intrigue of kittens?");
} else if ( (numberOfAnimals === 1 && animal === "Crow") || (numberOfAnimals === 1 && animal === "Magpie") ) {
  console.log("I don't like the look of that " + animal + "!");
} else if ( (numberOfAnimals === 2 && animal === "Crow") || (numberOfAnimals === 2 && animal === "Magpie") ) {
  console.log("Those two " + animal + "'s are huge!");
} else if ( (numberOfAnimals > 2 && animal === "Crow") || (numberOfAnimals > 2 && animal === "Magpie") ) {
  console.log("I'm going to murder that murder of " + animal + "'s" + " , they are so noisy!");
} else {
  console.log("The " + animal + " jumps over the lazy dog");
}

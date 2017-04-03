// ## The Fortune Teller

function tellFortune(jobTitle, geoLocation, partner, numKids) { // Write a function named tellFortune that:
  // takes 4 arguments: number of children, partner's name, geographic location, job title.
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partner + ' ' + ' with ' + numKids + ' kids.';
    // outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    console.log(future);
}

tellFortune('Dentist', 'France', 'Tina', 4); // Call that function 3 times with 3 different values for the arguments.
tellFortune('Banker', 'Fiji', 'Jane', 63); // Call that function 3 times with 3 different values for the arguments.
tellFortune('Politician', 'Egypt', 'Simone', 0); // Call that function 3 times with 3 different values for the arguments.




// The Age Calculator

var age = 36

function calculateAge(age) { // Write a function named calculateAge that:
    var yearOne = ( age - 1 ); // - calculates the 2 possible ages based on those years. as the person may not have had their birhtday that year, you need to calculate both options.
    var yearTwo = ( 2017 - age ); // second
    console.log("You are either " + yearOne + " or " + yearTwo + ); // - outputs the result to the screen like so: "You are either NN or NN"
};

calculateAge(25); // - Call the function three times with different sets of values.
calculateAge(107); // - Call the function three times with different sets of values.
calculateAge(42); // - Call the function three times with different sets of values.
//
// Line 24 has an error. I haven't been able to figure out what syntax is incorrect or missing??

// - Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
// - Need to work through this, at a later stage.




// ## The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

function calculateSupply(age, numPerDay) { // Write a function named calculateSupply that:
  // - takes 2 arguments: age, amount per day.
  var age = 36; // argument for current age.
  var maxAge = 89; // argument for age input
  var numPerDay = 3; // argument for number used per day
  var totalNeeded = (numPerDay * 365) * (maxAge - age); // - calculate amount consumed for rest of the life (using a constant max age).
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message); // - outputs results to the screen like so: "You will need NN to last you until the ripe old age of X"
};

calculateSupply(36, 36); // - Call that function three times, passing in different values each time.
calculateSupply(25, 2.5); // - Call that function three times, passing in different values each time.
calculateSupply(25, 400); // - Call that function three times, passing in different values each time.

// - Bonus: Accept floating point values for amount per day, and round the result to a round number.
// Need to work through floating point + rounding numbers.




// ## The Geometrizer
function calculate( radius ) { // Create 2 functions that calculate properties of a circle.

  var calcCircumfrence = something * something; // Create a function called calcCircumfrence. I couldn't work out the calculation!
  // Pass the radius to the function.
  console.log("The circumference is " + calCircumference )// Calculate the circumference based on the radius, and output "The circumference is NN".

  var calcArea = something * something; // Create a function called calcArea. I couldn't work out the calculation!
  // Pass the radius to the function.
  console.log("The area is " + calcArea ); // Calculate the area based on the radius, and output "The area is NN".

}

// I worked through each line of psuedocode, however I got stuck on the math formula for circumference + Area. What should Area relate to?




// ## The Temperature Converter
// It's hot out! Let's make a converter.

function celsiusToFahrenheit(celsius) { // Create a function called celsiusToFahrenheit:
  var celsiusInF = (celsius*9)/5 + 32; // - Store a celsius temperature into a variable.
  console.log(celsius + '°C is ' + celsiusInF + '°F'); // - Convert it to fahrenheit and output "NN°C is NN°F".
}

function fahrenheitToCelsius(fahrenheit) { // - Create a function called fahrenheitToCelsius:
  var fahrenheitInC = ((fahrenheit - 32)*5)/9; // Now store a fahrenheit temperature into a variable.
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C'); // - Convert it to celsius and output "NN°F is NN°C."
}

// This example was easier as I was able to work through the conversion of temperature than with The Geomtrizer exmaple.
// Is it ok to google formulas or is it expected that I should get to be more familiar with these? I'm guessing the more practice I have the easier it will come!
































// var doSomething = function () {
//   console.log("I did something");
// };
//
// doSomething(); // Call site
// doSomething(); // Call site
// doSomething(); // Call site

// var multiplyFiveByFive = function () {
//   console.log(5 * 5);
// };
// //
// var sayHi = function () {
//   var message = "Hello";
//   console.log( message );
// };
//
// sayHi();
// sayHi();
//
// var functionExpression = function () {
//   console.log("I am a function expression");
// };
//
// function funcDeclaration () {
//   console.log("I am a function declaration");
// };
//
// var sayHello = function ( name ) {
//     var msg = "Hello " + name;
//     console.log(msg);
// };
//
// sayHello();
// sayHello("Groucho");
// sayHello("Harppo");
// sayHello("Zeppo");
//
// var add = function () {
//   console.log( 5 + 5 );
// }
//
// add();
//
//
// var add = function (firstNum, secondNum ) {
//   var result = firstNum + secondNum;
//   console.log( result );
//   // console.log( 5 + 5);
// //
// // };
// //
// // add( 10, 42 );
// // add( 2, 9 );
// // add( 2, 2982 );
// //
// //
// //
// //
// // var createFullName = function ( first, last) {
// //   var  fullName = first + " " + last;
// //   console.log(fullName);
// // };
// //
// // createFullName( "Groucho", "Marx" );
// // createFullName( "Chris", "Barnaby" );
// // createFullName( "Hayley", "Petrov" );
// //
// //
// var createFullName = function (firstName, lastName) {
//   var Olivia = createFullName(firstName + lastName);
//   console.log(Olivia); // => "Olivia Basheer"
// };
//
// createFullName( "Groucho", "Marx" );
// createFullName( "Chris", "Barnaby" );
// createFullName( "Hayley", "Petrov" );
// createFullName( "Olivia", "Basheer" );
//
// //
// //
// // var add = function (firstNum, secondNum ) {
// //   var result = firstNum + secondNum;
// //   return result;
// //   // console.log( 5 + 5);
// //
// // };
// //
// //
// //
// // // var multiply = function (x, y) {
// // //   return x * y; // Return statement needs to be last line. Everything after is irrelevant.
// // // };
// //
// // var res =  multiply(1, 4);
// // console.log( res);
// //
// //
// // var res = multiply( multiply(1, 4), 5);
// //   console.log( res );
// //
// //
// // var sayHello = function( name ) { name = "Groucho" }
// //   debugger;
// //   var msg = "Hello";
// //   console.log(msg);
// // };
// //
// // sayHello( "Groucho" );
// //
// // var globalVar = "GLOBAL VAR";
// //
// // var aNewFunctionScope = function () {
// //     var localScoped = "LOCAL SCOPED VAR";
// //
// //     console.log(globalVar, localScoped);
// // };
// //
// // aNewFunctionScope();

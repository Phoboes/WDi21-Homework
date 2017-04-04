// debugger;
//
// var doSomething = function () {
//   console.log("I did something");
// };
//



// // Duplicate Lines: CMND + SHIFT + D
// // COMMENT Line(s) CMND + /
//
// doSomething(); //Call site
// doSomething(); //Call site
// doSomething(); //Call site
//
// var multiplyFivebyFive = function () {
//   console.log(5 * 5);
// };
//
// multiplyFivebyFive();
//
// var sayHi = function () {
//   var message = "Hello";
//   console.log(message);
// };
//
// sayHi();
// sayHi();

// var functionExpression = function () {
//   console.log("I am a function expression");
// };
//
// // functionExpression();
//
// function funcDeclaration () {
//   console.log("I am a function declaration");
// };
//
// funcDeclaration();
//

// var sayHello = function ( name ) {
//   // debugger;
//   console.log(name);
//   var msg = "Hello " + name;
//   console.log(msg);
// };
//
// sayHello();
// sayHello( "Groucho" );
// sayHello( "Zeppo" );
//
// var add = function ( firstNum, secondNum ) {
//   var result = firstNum + secondNum;
//   return result ;
// };
//
// var res = add(18, 900);
// var secondResult = add(200, 131);
// console.log(res, secondResult );
//
// //
// add( 10, 42 );
// add(2, 9);

//
// var createFullName = function (first, last) {
//   var fullName = first + " " + last;
//   console.log(fullName);
//   return fullName;
// }
//
// createFullName ("Groucho", "Marx");
// createFullName ("Chris", "Barnaby");
// createFullName ("Hayley", "Petrov");
//
// var firstName = "Olivia";
// var lastName = "Basheer";
//
// var olivia = createFullName(firstName, lastName );
// console.log(olivia); //=> "Olivia Basheer"

// var multiply = function (x * y) {
//   return x * y; //NEEDS TO BE THE LAST LINE!
//   console.log("X Y");
// }

// var globalVar = "GLOBAL VAR";
//
// var aNewFunctionScope = function () {
//   var localScoped = "LOCAL SCOPE";
//
//   var anotherANewFunctionScope = function () {
//     var veryLocallyScoped = "VERY LOCALLY SCOPED"
//
//     console.log(veryLocallyScoped, localScoped, globalVar);
//   }
//
//   console.log(globalVar, localScoped);
// }
//
// aNewFunctionScope();




//We have got our global scope

// var myGlobalVariable = "A GLOBAL VAR";
//
// var myFirstScope = function () {
//   var myLocalVariable = "A LOCAL VAR";
//
//   var mySecondScope = function () {
//     myVeryLocalVar = "A VERY LOCAL VAR";
//     console.log(myVeryLocalVar, myLocalVariable, myGlobalVariable);
//   };
//
// mySecondScope();
//   //From here, you can see global variables and variables created in this function
//
//   console.log(myGlobalVariable, myLocalVariable);
// };
//
// myFirstScope();



// var fortuneTeller = function(job, country,spouse, numKids) {
//   return "You will be a " + job + " in" + country + " and married to " + spouse + " with " + numKids +" kids."
// }
//
// console.log(fortuneTeller ("magician", "america", "Susie", 3));
//
//
//
// var calcCircumeference = function( radius ){
//   var returnVal = 2 * Math.pI * ( radius * radius);
//   console.log( returnVal );
//   return returnVal;
// }

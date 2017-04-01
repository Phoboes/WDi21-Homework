// // console.log("js is working");
// MTA Lab
//
// ##Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and
// the line and stop that user is getting off at and prints the journey
// and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points.
// (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
// so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working.
// You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names
// x(i.e. 23rd on the N and on the 6 need to be differentiated)
//


//First I'll test out creating an array for the N line stops.
//Create a for loop to log each stop name going forwards
//Create a for loop for each stop going backwards
//
var trainLineN = [
  "Times Square",
  "34th",
  "28th N",  //differentiate from the one on the 6 line
  "23rd N", //differentiate this stop from the one one on the 6 line
  "Union Square",
  "8th"
];
//
//log stops going forwards

// for( var i = 0; i < trainLineN.length; i += 1 ){
//   console.log(trainLineN[i]);
// };
//
// //log stops going backwards
//
// for( var i = trainLineN.length -1; i >= 0; i -=1 ){
//   console.log(trainLineN[i]);
// };
//
// //log out all the stops going forwards on the one line, with a string prefix
// var msg = " ";
// for( var i = 0; i < trainLineN.length; i += 1 ){
//   msg += trainLineN[i] + ", ";
// };
//   // console.log("You must travel through the following stops " + msg);
//
// //log out all the stops going backwards on the one line
// var msg = " ";
// for( var i = trainLineN.length -1; i >= 0; i -=1 ){
//   msg += trainLineN[i] + ", ";
// };
  // console.log("You must travel through the following stops " + msg);



//I want to log out all the stops between 2 specific stations
//I'll create a function with 2 arguments, stop 1 and stop 2
//Using index of, i'll find the position of those stations on the array store that in 2 variables
//by finding the index of the stop1 or stop2 argument
//Then using a loop, i'll print out the stations between those 2
//My for loop will have the starting point = to stop 1, and the end point = to stop 2.
//Increase by increments of 1
var msgForward = " ";
var trainForwards = function ( stop1, stop2) {
  var firstStop = trainLineN.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = trainLineN.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop; i <= secondStop; i += 1) { //starting point is first stop, loops stops at second stop, increase by 1
    msgForward += trainLineN[i] + ", "
  }
  // console.log("You must travel through the following stops " + msgForward);
  return msgForward; //output this variable so it can be used again outside of function
};
// trainForwards("34th", "Union Square");

//
// //function similar to above but going backwards.
var msgBackward = " ";
var trainBackwards = function ( stop1, stop2) {
  var firstStop = trainLineN.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = trainLineN.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop; i >= secondStop; i -= 1) { //starting point is firstStop, loop keeps going as long as i is greater than the Secondstop  , increase by 1
    msgBackward += trainLineN[i] + ", "
  }
    // console.log("You must travel through the following stops " + msgBackward);
    return msgBackward;
};
// trainBackwards("Union Square", "34th");




// How do I know whether the train is going forwards or backwards
// I need to include a check to see if secondStop > or < firstStop
// I could include an if statement to firstly check this, if true run forwards function  of false run backwards function

var trainJourneyN = function ( stop1, stop2 ) {
  var firstStop = trainLineN.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = trainLineN.indexOf(stop2); //declare a variable to capture the index number of stop 2
  if (firstStop < secondStop) {      //check to see if the first index is less than the 2nd, if so then train is going forwards
    trainForwards(stop1, stop2);
    console.log("You must travel through the following stops" + msgForward);
  } else if (secondStop < firstStop){   //check to see if the second index is less than the first index, if so then train is going backwards
    trainBackwards(stop1, stop2);
    console.log("You must travel through the following stops" + msgBackward);
  } else {
    console.log("You are not going anywhere");
  }
};
trainJourneyN("Union Square", "Times Square");





//I want to be able to check to see if the Union Square is included as a stop between stop1 and stop2, and if so
//It will then log out change at Union square
//I also need to be able to check if stop2 is on the same line as Stop 1, and if so, then don't log out change at
//Union square



//If the check comes back as true to including Union square and true to secondStop being on another line
//after logging out change at union square, i need the function to continue onto the function for the other line
//to complete logging out the stations

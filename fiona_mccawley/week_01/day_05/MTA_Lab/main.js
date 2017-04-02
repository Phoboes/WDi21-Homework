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


//Create an array for each train line
//Create a for loop to log each stop name going forwards
//Create a for loop for each stop going backwards
//
var NLine = [
  "Times Square",
  "34th",
  "28th N",  //differentiate from the one on the 6 line
  "23rd N", //differentiate this stop from the one one on the 6 line
  "Union Square",
  "8th N"
];
var LLine= [
  "8th L",
  "6th",
  "Union Square",
  "3rd",
  "1st"
];
var sixLine = [
  "Grand Central",
  "33rd",
  "28th 6", //added 6 to differentiate from the one on the NLine
  "23rd 6", //added 6 to differentiate from the one on the NLine
  "Union Square",
  "Astor Place"
];




//I want to log out all the stops between 2 specific stations
//I'll create a function with 2 arguments, stop 1 and stop 2
//Using index of, i'll find the position of those stations on the array store that in 2 variables
//by finding the index of the stop1 or stop2 argument
//Then using a loop, i'll print out the stations between those 2
//My for loop will have the starting point = to stop 1, and the end point = to stop 2.
//Increase by increments of 1
// var msgForward = " ";
// var trainForwards = function ( stop1, stop2) {
//   var firstStop = NLine.indexOf(stop1); //declare a variable to capture the index number of stop 1
//   var secondStop = NLine.indexOf(stop2); //declare a variable to capture the index number of stop 2
//   for ( var i = firstStop; i <= secondStop; i += 1) { //starting point is first stop, loops stops at second stop, increase by 1
//     msgForward += NLine[i] + ", "
//   }
//   // console.log("You must travel through the following stops " + msgForward);
//   return msgForward; //output this variable so it can be used again outside of function
// };
// // trainForwards("34th", "Union Square");
//
// //
// // //function similar to above but going backwards.
// var msgBackward = " ";
// var trainBackwards = function ( stop1, stop2) {
//   var firstStop = NLine.indexOf(stop1); //declare a variable to capture the index number of stop 1
//   var secondStop = NLine.indexOf(stop2); //declare a variable to capture the index number of stop 2
//   for ( var i = firstStop; i >= secondStop; i -= 1) { //starting point is firstStop, loop keeps going as long as i is greater than the Secondstop  , increase by 1
//     msgBackward += NLine[i] + ", "
//   }
//     // console.log("You must travel through the following stops " + msgBackward);
//     return msgBackward;
// };
// // trainBackwards("Union Square", "34th");
//
//
//
// //Combine both functions, so I have one function to use to input 2 arguments and get an answer
// // How do I know whether the train is going forwards or backwards
// // I need to include a check to see if secondStop > or < firstStop
// // I could include an if statement to firstly check this, if true run forwards function  of false run backwards function
//
// var trainJourneyN = function ( stop1, stop2 ) {
//   var firstStop = NLine.indexOf(stop1); //declare a variable to capture the index number of stop 1
//   var secondStop = NLine.indexOf(stop2); //declare a variable to capture the index number of stop 2
//   if (firstStop < secondStop) {      //check to see if the first index is less than the 2nd, if so then train is going forwards
//     trainForwards(stop1, stop2);
//     console.log("You must travel through the following stops" + msgForward);
//   } else if (secondStop < firstStop){   //check to see if the second index is less than the first index, if so then train is going backwards
//     trainBackwards(stop1, stop2);
//     console.log("You must travel through the following stops" + msgBackward);
//   } else {
//     console.log("You are not going anywhere");
//   }
// };
// trainJourneyN("Union Square", "Times Square");


////////////////////////////////////////////////////////////////////////////////////////
//I need to create a trainForwards and trainBackwards function that is not hardcoded to one train line
//So the function will need to have 4 arguments, lineOne, stopOne, lineTwo, stopTwo
// I need to adjust the indexOf variables
//Copy functions from above and update

var msgForward = " ";
var arrayForward = [];
var trainForwards = function ( lineOne, stop1, lineTwo, stop2) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop + 1; i <= secondStop - 1; i += 1) { //starting point is first stop, loops stops at second stop, increase by 1
    arrayForward.push(i);
    msgForward += lineOne[i] + ", "
  }
  return msgForward; //output this variable so it can be used again outside of function
  return arrayForward;
};

var msgBackward = " ";
var arrayBackward = [];
var trainBackwards = function ( lineOne, stop1, lineTwo, stop2) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop - 1; i >= secondStop + 1; i -= 1) { //starting point is firstStop, loop keeps going as long as i is greater than the Secondstop  , increase by 1
    arrayBackward.push(i);
    msgBackward += lineOne[i] + ", "
  }
    return msgBackward;
    return arrayForward;

};

//Create a train journey function that isn't hardcoded to one train line///
//This is used for when the journey is on the same train line

var trainJourney = function ( lineOne, stop1, lineTwo, stop2 ) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  if (firstStop < secondStop) {      //check to see if the first index is less than the 2nd, if so then train is going forwards
    trainForwards(lineOne, stop1, lineTwo, stop2);
    console.log("You must travel through the following stops" + msgForward);
    var totalStops = arrayForward.length + 1;
    console.log(totalStops + " stops in total.");
  } else if (secondStop < firstStop){   //check to see if the second index is less than the first index, if so then train is going backwards
    trainBackwards(lineOne, stop1, lineTwo, stop2);
    console.log("You must travel through the following stops" + msgBackward);
    var totalStops = arrayBackward.length + 1;
    console.log(totalStops + " stops in total.");
  } else {
    console.log("You are not going anywhere");
  }
};


//////////////////////////////////////////////////////////
//function for first part of trip if lines different///////
//////////////////////////////////////////////////////////

var msgForwardOne = " ";
var arrayForwardOne = [];
var trainForwardsOne = function ( lineOne, stop1) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineOne.indexOf("Union Square"); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop + 1; i <= secondStop - 1; i += 1) { //starting point is first stop, loops stops at second stop, increase by 1
    arrayForwardOne.push(i);
    msgForwardOne += lineOne[i] + ", "
  }
  return msgForwardOne;
  return arrayForwardOne;
};



var msgBackwardOne = " ";
var arrayBackwardOne = [];
var trainBackwardsOne = function ( lineOne, stop1 ) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineOne.indexOf("Union Square"); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop -1 ; i >= secondStop + 1; i -= 1) { //starting point is firstStop, loop keeps going as long as i is greater than the Secondstop  , increase by 1
    arrayBackwardOne.push(i);
    msgBackwardOne += lineOne[i] + ", "
  }
    return msgBackwardOne;
    return arrayBackwardOne;

};

var trainJourneyOne = function ( lineOne, stop1 ) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineOne.indexOf("Union Square"); //declare a variable to capture the index number of stop 2
  if (firstStop < secondStop) {      //check to see if the first index is less than the 2nd, if so then train is going forwards
    trainForwardsOne(lineOne, stop1);
    console.log("You must travel through the following stops" + msgForwardOne + "Union Square.");
  } else if (secondStop < firstStop){   //check to see if the second index is less than the first index, if so then train is going backwards
    trainBackwardsOne(lineOne, stop1 );
    console.log("You must travel through the following stops" + msgBackwardOne + "Union Square");
  } else {
    console.log("You are not going anywhere");
  }
};



////////////////////////////////////////////////////////////////////
//Function for second part of trip if on different line/////////////////////////
////////////////////////////////////////////////////////////////////

var msgForwardTwo = " ";
var arrayForwardTwo = [];
var trainForwardsTwo = function ( lineTwo, stop2) {
  var firstStop = lineTwo.indexOf("Union Square"); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop + 1; i <= secondStop -1; i += 1) { //starting point is first stop, loops stops at second stop, increase by 1
    arrayForwardTwo.push(i);
    msgForwardTwo += lineTwo[i] + ", "
  }
  return msgForwardTwo; //output this variable so it can be used again outside of function
  return arrayForwardTwo;
};

var msgBackwardTwo = " ";
var arrayBackwardTwo = [];
var trainBackwardsTwo = function ( lineTwo, stop2 ) {
  var firstStop = lineTwo.indexOf("Union Square"); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop - 1; i >= secondStop +1; i -= 1) { //starting point is firstStop, loop keeps going as long as i is greater than the Secondstop  , increase by 1
    arrayBackwardTwo.push(i);
    msgBackwardTwo += lineTwo[i] + ", "
  }
    return msgBackwardTwo;
    return arrayBackwardTwo;

};

var trainJourneyTwo = function ( lineTwo, stop2 ) {
  var firstStop = lineTwo.indexOf("Union Square"); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(lineTwo); //declare a variable to capture the index number of stop 2
  if (firstStop < secondStop) {      //check to see if the first index is less than the 2nd, if so then train is going forwards
    trainForwardsTwo(lineTwo, stop2);
    console.log("Your journey continues through the following stops" + msgForwardTwo + "and " + stop2 + ".");
  } else if (secondStop < firstStop){   //check to see if the second index is less than the first index, if so then train is going backwards
    trainBackwardsTwo(lineTwo, stop2 );
    console.log("Your journey continues through the following stops" + msgBackwardTwo + "and " + stop2 + ".");
  } else {
    console.log("You are not going anywhere");
  }
};

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Final function//////////////////////
//Ok so I want to know firstly if the first stop and the second stop are on the same line
//If they are then run the trainJourney function. Else run the other 2 functions, trainJourneyOne first with a separate log
//statement between to say change at union square, then trainJourneyTwo

var planJourney = function ( lineOne, stop1, lineTwo, stop2) {
  if (lineOne === lineTwo) {
    trainJourney( lineOne, stop1, lineTwo, stop2);
  } else {
    trainJourneyOne( lineOne, stop1);
    console.log("Change at Union Square");
    trainJourneyTwo( lineTwo, stop2);
  }
};
planJourney( NLine, "Times Square", sixLine, "33rd");


//////////////////////Stops in total//////////////////////////////////
//Now I have to work out the number of stops in total
  //If on the same line
    //If on different lines
//I'll need to create a function that captures the output indexes from the loop
  //creates an array, using .push
  // return the array so it can be used outside
    //Then users the .length function to get a number for the length of the array
      //Logs total in the if statement, if on the same line
        //adds the 2 array.length's together for when they are on different lines
          //logs that in the else statement
    //Problem: I have different functions for forwards and backwards, which means I have
    // 4 different combos (fwd + fwd or fwd + bwards or bwds + bwds or bwds + fwds)

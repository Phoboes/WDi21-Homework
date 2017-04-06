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
var NLine = [
  "Times Square",
  "34th",
  "28th N",  //differentiate from the one on the 6 line
  "23rd N", //differentiate this stop from the one one on the 6 line
  "Union Square",
  "8th N" //added N to differentiate from the L line
];
var LLine= [
  "8th L", //add L to differentiate from the N line
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

//Need a function to be able to log dynamically what line the trainJourney is on
//Create an if/else, that I can call, that will take lineOne as an argument,
//and then log the name of the line depending on what array is being called.
//
//
// var logLineOne = function(lineOne) {
//   if (lineOne === NLine) {
//     console.log("NLine");
//   } else if (lineOne === LLine) {
//     console.log("LLine");
//   } else {
//     console.log("sixLine");
//   }
// };


////////////////////////////////////////////////////////////////////////////////////////
//If trains are on the same line, I need a function that will run if it is going forwards
//And a function if it is going backwards////
//Then a function to work out if it is going forwards or backwards, and if so, run the relevant forward or backward function and log the stops
//Not hardcoded like previously

var msgForward = " "; //empty variable to capture the stops
var arrayForward = []; //creating an empty array, so I can add the index values for the stops to this from the loop. I can then find the length of this array to work out the total stops
var trainForwards = function ( lineOne, stop1, lineTwo, stop2) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop + 1; i <= secondStop - 1; i += 1) { //starting point is first stop, loops stops at second stop, increase by 1
    arrayForward.push(i); //using .push so that it adds the index numbers loops through to the empty array
    msgForward += lineOne[i] + ", " //adds list of stops to the msgForward variable, which can be called upon later to log out the stops
  }
  return msgForward; //output this variable so it can be used again outside of function
  return arrayForward; //outputs the array so i can used it outside of the function
};
//replicate above, except for going backwards
var msgBackward = " ";
var arrayBackward = [];
var trainBackwards = function ( lineOne, stop1, lineTwo, stop2) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop - 1; i >= secondStop + 1; i -= 1) { //starting point is firstStop minus 1, as I don't want to log the initial stop, loop keeps going as long as i is greater than the Secondstop  , increase by 1
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
    console.log("You must travel through the following stops:" + msgForward + stop2 + ".");
    var totalStops = arrayForward.length + 1; //I have to add one to the length because I remove the initial stop from the starting point of the loop
    console.log(totalStops + " stops in total.");
  } else if (secondStop < firstStop){   //check to see if the second index is less than the first index, if so then train is going backwards
    trainBackwards(lineOne, stop1, lineTwo, stop2);
    console.log("You must travel through the following stops:" + msgBackward + stop2 + ".");
    var totalStops = arrayBackward.length + 1; //I add 1, as I remove the initial stop in the loop, so it does not create an index in the array
    console.log(totalStops + " stops in total.");
  } else {
    console.log("You are not going anywhere");
  }
};




//////////////////////////////////////////////////////////
//function for first part of trip if lines different
//Going forwards and backwards, plus function to determine which one to run
//I know if this function is going to run, Union Square will always be the index for the secondStop.
//////////////////////////////////////////////////////////

var msgForwardOne = " ";
var arrayForwardOne = [];
var trainForwardsOne = function ( lineOne, stop1) {
  var firstStop = lineOne.indexOf(stop1); //declare a variable to capture the index number of stop 1
  var secondStop = lineOne.indexOf("Union Square"); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop + 1; i <= secondStop - 1; i += 1) { //starting point is first stop +1 ( I don't want to log the first stop in my stops list), loops stops at second stop, increase by 1
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
  var secondStop = lineOne.indexOf("Union Square"); //declare a variable to capture the index number of Union Square. If this function is running, the second stop will always be union square to change train lines
  if (firstStop < secondStop) {      //check to see if the first index is less than the 2nd, if so then train is going forwards
    trainForwardsOne(lineOne, stop1);
    console.log("You must travel through the following stops:" + msgForwardOne + "Union Square.");
  } else if (firstStop > secondStop){   //check to see if the second index is less than the first index, if so then train is going backwards
    trainBackwardsOne(lineOne, stop1 );
    console.log("You must travel through the following stops:" + msgBackwardOne + "Union Square.");
  } else {
    console.log("You are not going anywhere");
  }

};


////////////////////////////////////////////////////////////////////
//Function for second part of a trip if on different line/////////////////////////
//same as above, except I know that the starting off point will always be union square///
//so find the index of that as first stop, then index of last or stop2. ////
//function for forwards and function for backwards /////
////////////////////////////////////////////////////////////////////////

var msgForwardTwo = " ";
var arrayForwardTwo = [];
var trainForwardsTwo = function ( lineTwo, stop2) {
  var firstStop = lineTwo.indexOf("Union Square"); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  for ( var i = firstStop + 1; i <= secondStop - 1; i += 1) { //starting point is first stop, loops stops at second stop, increase by 1
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
  for ( var i = firstStop - 1; i >= secondStop + 1; i -= 1) { //starting point is firstStop, loop keeps going as long as i is greater than the Secondstop  , increase by 1
    arrayBackwardTwo.push(i);
    msgBackwardTwo += lineTwo[i] + ", "
  }
    return msgBackwardTwo;
    return arrayBackwardTwo;

};

var trainJourneyTwo = function ( lineTwo, stop2 ) {
  var firstStop = lineTwo.indexOf("Union Square"); //declare a variable to capture the index number of stop 1
  var secondStop = lineTwo.indexOf(stop2); //declare a variable to capture the index number of stop 2
  if (firstStop < secondStop) {      //check to see if the first index is less than the 2nd, if so then train is going forwards
    trainForwardsTwo(lineTwo, stop2);
    console.log("Your journey continues through the following stops:" + msgForwardTwo + stop2 + ".");
  } else if (firstStop > secondStop){   //check to see if the second index is less than the first index, if so then train is going backwards
    trainBackwardsTwo(lineTwo, stop2 );
    console.log("Your journey continues through the following stops:" + msgBackwardTwo + stop2 + ".");
  } else {
    console.log("You are not going anywhere");
  }
};

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Primary plan journey function//////////////////////
//Ok so I want to know firstly if the first stop and the second stop are on the same line
//If they are then run the trainJourney function. Else run the other 2 functions, call trainJourneyOne first with a separate log
//statement between to say change at union square, then call trainJourneyTwo
//log the total stops, by adding a line to add all arrays together and add 2 stops (due to taking away the initial stop in the forwards/backwards functions so as not to log that out)

var planJourney = function ( lineOne, stop1, lineTwo, stop2) {
  if (lineOne === lineTwo) { //checking if lineOne and lineTwo are equal
    trainJourney( lineOne, stop1, lineTwo, stop2); //If on the same line, run first function trainJourney
  } else {    //else they are on different lines, run trainJourneyOne first , then trainJourneyTwo
    trainJourneyOne( lineOne, stop1);
    console.log("Change at Union Square");
    trainJourneyTwo( lineTwo, stop2);
    var stopsForwardOne = arrayForwardOne.length   //store the length of each array in 4 different variables
    var stopsBackwardOne = arrayBackwardOne.length
    var stopsForwardTwo = arrayForwardTwo.length
    var stopsBackwardTwo = arrayBackwardTwo.length
    var totalStops = (stopsForwardOne + stopsBackwardOne + stopsForwardTwo + stopsBackwardTwo) + 2 //add all together, and add 2, as a stop was taken away in each of the backwards and forwards functions
    console.log(totalStops + " stops in total"); //only 2 of the above variables will ever have values (fwd1 + fwd2, or bwd1 + bwd2 etc. )
  }
};

planJourney( NLine, "Grand Central", sixLine, "Astor Place");

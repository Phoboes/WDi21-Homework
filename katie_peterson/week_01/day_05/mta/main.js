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
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
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
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

//KP's attempt

//create arrays for the 3 subway lines
//The N line: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//The L line: 8th, 6th, Union Square, 3rd, and 1st
//The 6 line: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

//PSEDUO CODE

//1: How to store the station station.
  // Use an object to create arrays with all the stations listed.

//2. Log out the basic scenario of using a single line, with no changes.

//3. Break the journey down and use the interection as the 'break' point. Work out how to go from timessquare to union square on the N line -> use a for loop.
  //reverse this to go backwards.

// //4. Work out how to go from union square to 33rd on the 6 line. -> use a for loop.
//   //reverse this to go backward.
//
// //5. console log the 3 trips, the first part, interection and the third part.
//
// //console.log("Hello MTA, let's do this!");
//
//Create object to store the stations.

 var subwayStations = {
    "lineN": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
     "lineL": ["8th", "6th", "Union Square", "3rd", "1st"],
     "line6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
 };

var intersectionStation = "Union Square";

//checked to see whether it works.
  //var getOn = console.log( subwayStations.lineN[0]);
  //var getOff = console.log( subwayStations.line6[1]);

var tripPlanner = function ( startLine, startStation, endLine, endStation) {

  //need to log out the station possibilities
    //empty array to log that stations that were visited...
      var noVisitedStations = [];
    //startline and start station possibility
      var startLineStartStation = subwayStations[startLine].indexOf (startStation);
    //startline and end station possibility
      var startLineEndStation = subwayStations[startLine].indexOf (endStation);
     //startline intersect - where the route stops and changes.
      var startIntersectStation = subwayStations[startLine].indexOf( intersectionStation);
     //endline and end station possibility
      var endLineEndStation = subwayStations[endLine].indexOf (endStation);
    //endline intersect - where the route stops and changes.
      var endLineIntersect = subwayStations[endLine].indexOf( intersectionStation);


  //IF STATEMENTS

  //if startstation is less than interect, then we are moving forwards on the line.
  //else if the startstation is greater than the start line intersect than we are moving backwards.
  //Use startLine to pick the correct Array of stations, and then use indexOf to find the array index for the startStation. You can then use a for loop, with your iteration count variable (i usually) set to indexOf(startStation), and loop until i=indexOf(endStation).

if (startLine != endLine ) {

  if (startLineStartStation < startIntersectStation) {
    for (i = startLineStartStation; i <= startLineStartStation; i ++) {
      noVisitedStations.push( subwayStations [startLine][i]);
    };
  } else {
      for (i = startLineStation; i>= startLineIntersectl; i--) {
        noVisitedStations.push( subwayStations [startLine][i]);
      };
    //console.log( startLine, startStation, endLine, endStation );
  }

//change stations - remove union square ?

noVisitedStations.pop();

 //Second part of the trip
    //f start section is greater than endline interect than we are moving forwards

  if (endLineEndStation > endLineIntersect) {
    for (i = endLineIntersect; i <= endLineEndStation; i ++) {
      noVisitedStations.push(endLine [i]);
  }
} else {
  for (i = endLineIntersect; i >= endLineEndStation; i --) {
    noVisitedStations.push(endLine [i]);
};
// Also, if they do not reach intersectionStation, or if they are on the same line, then they do not need to change lines
} else {
  if (startLineStartStation < startLineEndStation) {
    for (var i = startLineStation); i <= startLineEndStation; i++) {
        noVisitedStations.push( [startLine] [i]);
    };
  }
}
};

var trip1 ="You must travel trough the following stops on the " + startLine + "line: ";

//

//if you  get to this point - wooohooo high five!

}

// print the total number of stops for the trip in the console.

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.



// //call the function
// //Find out what line the user is getting on at -  Line N
// //Find out what stop the user is getting on at - times square
// Find out what line the user is getting off at - Line 6
// Find out what stop the user is gettin off at - 33rd
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.

tripPlanner ("lineN", "Times Square", "line6", "33rd");
tripPlanner ("lineL", "33rd", "line6", "23rd");

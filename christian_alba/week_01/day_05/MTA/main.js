//
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
// The program takes the line and stop that a user is getting on at and the line and stop
// that user is getting off at and prints the journey and the total number of stops for the trip in the console:
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
// Make sure the stops that are the same for different lines have different names (i.e.
// 23rd on the N and on the 6 need to be differentiated)

var singleTrip = function ( startLine, startStop, endLine, endStop ) {
  var nLine = [
    "Time Square",
    "34th",
    "28th",
    "23rd",
    "Union Square",
    "8th"
  ];
  // N line Object
  var trainLines = [
    {
      name: "N",
      stops: [
        "Time Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th"
      ]
    },
    {
      name: "L",
      stops: [
        "8th",
        "6th",
        "Union Square",
        "3rd",
        "1st"
      ]
    },
    {
      name: "6",
      stops: [
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place"
      ]
    }
  ];
  //FIGURING OUT THE STARTING LINE OBJECT AND ENDING LINE OBJECT TO VARIABLES

  var startingLine;
  var endingLine;

  for (var i = 0; i < trainLines.length; i++ ) {
    //CHECK TO SEE IF CURRENT LINE IS EQUAL TO INPUT STARTING LINE
      if (trainLines[i].name === startLine) {
        startingLine = trainLines[i];
      }
      if (trainLines[i].name === endLine) {
        endingLine = trainLines[i];
      }
  }

  // // CLARDIFIED THAT nLine HAS STATIONS
  // if (startLine === 'N') {
  //   console.log( nLine.indexOf(startStop) );
  // }

  // var lineLength = nLine.length;
  // console.log(lineLength);
  // CHECK IF TRAIN ROUTE ARE STAYING ON THE ONE LINE

  if (startingLine.name === endingLine.name) {

    // FINDING THE NUMBER OF STOPS BETWEEN START AND END.
    var startStopIndex = startingLine.stops.indexOf(startStop);
    var endStopIndex = startingLine.stops.indexOf(endStop);

    //FINDING THE LENGTH BETWEEN THE TWO
    if ( startStopIndex > endStopIndex ) {
      console.log( "The no. of stops between destinations is " + ((startStopIndex - endStopIndex ) +1));
    } else {
      console.log("The no. of stops between destinations is " + ((endStopIndex - startStopIndex ) +1));
    }
    else {
    // IF TRAIN ROUTE IS NOT ON THE SAME LINE
    var firstLineStartStopIndex = startingLine.stops.indexOf(startStop);
    var firstLineEndStopIndex = startingLine.stops.indexOf("Union Square");
    var firstLineLength;

    if ( firstLineStartStopIndex > firstLineEndStopIndex ) {
      firstLineLength = ( firstLineStartStopIndex - firstLineEndStopIndex ) + 1;
    } else {
      firstLineLength = ( firstLineEndStopIndex - firstLineStartStopIndex ) + 1;
    }

    var secondLineStartStopIndex = endingLine.stops.indexOf(endStop);
    var secondLineEndStopIndex = endingLine.stops.indexOf("Union Square");
    var secondLineLength;

    if ( secondLineStartStopIndex > secondLineEndStopIndex ) {
      secondLineLength = (secondLineStartStopIndex - secondLineEndStopIndex ) + 1;
    } else {
      secondLineLength = (secondLineEndStopIndex - secondLineStartStopIndex ) + 1;
    }
    console.log("The First Line Length: " + firstLineLength);
    console.log("The Second Line Length: " + secondLineLength);
    // putting -1 because it starts from 0
    var routeDistance = (firstLineLength + secondLineLength) - 1;
    console.log(routeDistance);
  }
};

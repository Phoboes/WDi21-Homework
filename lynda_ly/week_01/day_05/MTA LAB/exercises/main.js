// planTrip('N', 'Times Square', '6', '33rd');
  // This is only a suggested function name and signature.
  // (startLine A, startStation A, endLine B, endStation B)

// Tell the user the number of stops
  // AND the stops IN ORDER that they will pass through or change at.


// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."


// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
    // The key to the lab is finding the index positions of each stop. (hint: indexOf())


var lines = { // object: List of each line, also having its own array within
  n: [
    "Times Square",
    "34th",
    "28th",
    "23rd",
    "Union Square",
    "8th"
  ],
  l: [
    "8th",
    "6th",
    "Union Square",
    "3rd",
    "1st"
  ],
  six: [
    "Grand Central",
    "33rd",
    "28th",
    "23rd",
    "Union Square",
    "Astor Place"
  ]
};

console.log(lines);


// how to specify that you want ONE line over another from the above object?
  // var singleTrip = function (startLine, startStation, endStation) {}

// TRAVEL FORWARDS
// var startLine = lines["l"];
// console.log(startLine);
// var startStation = startLine.indexOf("6th");
// console.log(startStation);
// var endStation = startLine.indexOf("1st");
// console.log(endStation);
// var numberStops = endStation - startStation;
// console.log(numberStops);

// for (var i = startStation; i < endStation; i++) {
//   var routeStops = startLine[i];
//   console.log(routeStops);


// TRAVEL BACKWARDS

// var startLine = lines["n"];
// console.log(startLine);
// var startStation = startLine.indexOf("Union Square");
// console.log(startStation); // 4
// var endStation = startLine.indexOf("Times Square");
// console.log(endStation); // 0
// var numberStops = endStation - startStation;
// console.log(numberStops); // - 4
//
// for (var i = startStation; i >= endStation; i--) { // ie. - 4 travel backwards
//   var routeStops = startLine[i];
//   console.log(routeStops);
// }

// IF ELSE STATEMENT TRAVEL FORWARD OR BACKWARDS
// if (numberStops > 0 ) { // if ( numberStops > 0 ) // ie. 4 travel forwards
//   for (var i = startStation; i <= endStation; i++) {
//     var routeStops = startLine[i];
//     console.log(routeStops);
//   }
// } else { // if ( numberStops < 0 ) // ie. - 4 travel backwards
//   for (var i = startStation; i >= endStation; i--) {
//     var routeStops = startLine[i];
//     console.log(routeStops);
//   }
// }

// MAKE DYNAMIC // Combine the above code in one function // reassigning the variable values []
var singleTrip = function (startLine, startStation, endStation) {
  var startLineArray = lines[startLine];
  var startStationIndex = startLineArray.indexOf(startStation);
  var endStationIndex = startLineArray.indexOf(endStation);
  var numberStops = endStationIndex - startStationIndex;
  console.log(numberStops);

  if (numberStops > 0 ) { // if ( numberStops > 0 ) // ie. - 4 travel backwards
    for (var i = startStationIndex; i <= endStationIndex; i++) {
      var routeStops = startLineArray[i]; // drop starting station from list??
      console.log(routeStops);
    }
  } else { // if ( numberStops < 0 ) // ie. - 4 travel backwards
    for (var i = startStationIndex; i >= endStationIndex; i--) {
      var routeStops = startLineArray[i];
      console.log(routeStops);
    }
  }
};

singleTrip ("n", "Times Square", "Union Square");
singleTrip ("six", "Union Square", "33rd");


// var planTrip = function (startLine, startStation, endLine, endStation) {}
    // planTrip('N', 'Times Square', '6', '33rd');

// differentiate line and print out items in the array
var routeN = lines.n;
  console.log("Line N: ", routeN);

var routeL = lines.l;
  console.log("Line L: ", routeL);

var routeSix = lines.six;
  console.log("Line Six: ", routeSix);




// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

//////THINKING//////THINKING//////THINKING//////THINKING//////THINKING//////THINKING

// Make sure the stops that are the same for different lines have different names
  // (i.e. 23rd on the N and on the 6 need to be differentiated)


// // differentiate line and print out items in the array
// var routeN = lines.n;
//   console.log("Line N: ", routeN);
//
// var routeL = lines.l;
//   console.log("Line L: ", routeL);
//
// var routeSix = lines.six;
//   console.log("Line Six: ", routeSix);


// loop through each item in the array and rename it to show the line and the stop

// for (var i = 0; i < routeN.length; i++) {
//    var routeNStops = routeN[i];
//    console.log("Line N: ", routeNStops);
// };
//
// for (var i = 0; i < routeL.length; i++) {
//    var routeLStops = routeL[i];
//    console.log("Line L: ", routeLStops);
// };
//
// for (var i = 0; i < routeSix.length; i++) {
//    var routeSixStops = routeSix[i];
//    console.log("Line Six: ", routeSixStops);
// };

// console.log(routeN[4]); // TEST to print correct station of each index on routeN

// how to plan single trip?

// var lineN = [
//   "Times Square",
//   "34th",
//   "28th",
//   "23rd",
//   "Union Square",
//   "8th"
// ];
//
// console.log(lineN); // Print out lineN Array
//
// // // Print as a loop?
// for (var i = 0; i < lineN.length; i++) { // Loop: Print the index of each item in lineN Array
//   var lineNIndex = lineN[ i ];
//   // console.log("LineN:", lineNIndex);
//   var lineNIndexName = ("N Line: " + lineNIndex)
//   console.log(lineNIndexName);
// };
//
// // function to find array index? is the station on the line?
// // var stationIndex = function (lineName, stationName) {
// //   if // if its on line N use line N array etc
// //   else if
// //   else
// // };
// // stationIndex ("N", "Time Square");
//
// // How many stops and to make more generic so any number can be inputted?
// var lineNStops = function (line, start, end) {
//   var result = end - start;
//   console.log(result);
// }
// lineNStops(line, 2, 5);

// var lineNFirst = "N Line: " + lineN[0];
// console.log(lineNFirst);
//
// var lineNSecond = "N Line: " + lineN[1];
// console.log(lineNSecond);
//
// var lineNThird = "N Line: " + lineN[2];
// console.log(lineNThird);
//
// var lineNFourth = "N Line: " + lineN[3];
// console.log(lineNFourth);
//
// var lineNFifth = "N Line: " + lineN[4];
// console.log(lineNFifth);
//
// var lineNSixth = "N Line: " + lineN[5];
// console.log(lineNSixth);
//
// // an array from the above variables? to reference lines somehow?
// var lineNArray = [
//   lineNFirst,
//   lineNSecond,
//   lineNThird,
//   lineNFourth,
//   lineNFifth,
// ];
// console.log(lineNArray);


// reference start and finish and calculate number of stops based on indexOf?
// var indexTimesSquare = lineN.indexOf("Times Square"); // Test indexOf
// var indexThirtyFourth = lineN.indexOf("34th");
// var indexTwentyEight = lineN.indexOf("28th");
// var indexTwentyThird = lineN.indexOf("23rd");
// var indexUnionSquare = lineN.indexOf("Union Square");
// var indexEighth = lineN.indexOf("8th");

// console.log(indexTimesSquare);  // 0  // Print the index of each item in lineN Array
// console.log(indexThirtyFourth); // 1
// console.log(indexTwentyEight);  // 2
// console.log(indexTwentyThird);  // 3
// console.log(indexUnionSquare);  // 4
// console.log(indexEighth);       // 5

// put lineN before index = lineN item name // want to log these as new variables?
// console.log("lineN", indexTimesSquare, "Times Square");
// console.log("lineN", indexThirtyFourth);
// console.log("lineN", indexTwentyEight);
// console.log("lineN", indexTwentyThird);
// console.log("lineN", indexUnionSquare);
// console.log("lineN", indexEighth);

// function??
// return item into memory for use later?

// console.clear(); //



    // The key to the lab is finding the index positions of each stop. (hint: indexOf())
// var lineL = [
//   "8th",
//   "6th",
//   "Union Square",
//   "3rd",
//   "1st"
// ];
//
// // The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//     // The key to the lab is finding the index positions of each stop. (hint: indexOf())
// var lineSix = [
//   "Grand Central",
//   "33rd",
//   "28th",
//   "23rd",
//   "Union Square",
//   "Astor Place"
// ];







// All 3 subway lines intersect at Union Square, but there are no other intersection points.
  // (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
  // so you'll have to differentiate this when you name your stops in the arrays.)


// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Hints:
  // Work out how you would do it on paper first! Then start to explain that process in Javascript.
  // Get the program to work for a single line before trying to tackle multiple lines.

  // Don't worry about prompting the user for input.
    // Hard code some values to get it working.
    // You can use prompt() later to make it more interactive.

  // Consider diagramming the lines by sketching out the subway lines and their stops and intersection.

  // The key to the lab is finding the index positions of each stop. (hint: indexOf())
      // INDEX OF //
        // amazingFrenchAuthors.indexOf("Alexandre Dumas"); // Returns 0 (ie, the first element in the array)
        // amazingFrenchAuthors.indexOf("Anäis Nin"); // indexOf returns -1 if it cannot find a match.
      // END INDEX OF //

  // Make sure the stops that are the same for different lines have different names
    // (i.e. 23rd on the N and on the 6 need to be differentiated)

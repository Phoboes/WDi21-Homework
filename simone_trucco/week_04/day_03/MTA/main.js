var line = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  Six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// straight trip going up an array:

var travel = function( line, startStation, endingStation ) {
  var returnArray = [];

  // If the start looping through from the starting index to the end.
  // Store all stops along the way in an array.

  for( var i = line.indexOf( startStation ); i <= line.indexOf( endingStation ); i ++ ){
    returnArray.push( line[i] );
  }
  return returnArray;
};


var travel = function( line, startStation, endingStation ){
  var returnArray = [];

  // We know that the single line works now. Rather than re-use code, if we have an array where we know our start index is higher than our end (further down the array), just reverse the array.

  if( line.indexOf( endingStation ) < line.indexOf( startStation ) ){
    line = line.reverse();
  }


  for( var i = line.indexOf( startStation ); i <= line.indexOf( endingStation ); i ++ ){
    returnArray.push( line[i] );
  }
  return returnArray;
};

var makeTrip = function( startingLine, startStation, endingLine, endingStation ){

  if( startingLine !== endingLine ){

    // We know we will be getting 2 arrays ending or starting at Union Square (the common point between our lines), we can use concat to join them.
    return travel( startingLine, startStation, "Union Square" )
          .concat( travel( endingLine, "Union Square", endingStation ) );
  }

  return travel( startingLine, startStation, endingStation );

};


// var line = {
//   N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
//   L: ["8th", "6th", "Union Square", "3rd", "1st"],
//   Six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
// };
//
// // straight trip going up;
//
// var travel = function( line, startStation, endingStation ){
//   var returnArray = [];
//   if( line.indexOf( endingStation ) < line.indexOf( startStation ) ){
//     line = line.reverse();
//   }
//   for( var i = line.indexOf( startStation ); i <= line.indexOf( endingStation ); i ++ ){
//     returnArray.push( line[i] );
//   }
//   return returnArray;
// };
//
// var makeTrip = function( startingLine, startStation, endingLine, endingStation ){
//
//   if( startingLine !== endingLine ){
//     return travel( startingLine, startStation, "Union Square" )
//           .concat( travel( endingLine, "Union Square", endingStation ) );
//   }
//
// };
//
//
//
//
//
// // var line = {
// //   N: [ "Grand Central", "33rd", "28th N", "23rd N", "Union Sq N","Astor Place" ],
// //   L: [ "Times Square", "34th", "28th L", "23rd L", "Union Sq L","8th L" ],
// //   6: [ "8th S", "6th", "Union Sq S", "3rd", "1st" ]
// // };
// //
// // // straigh trip going up
// //
// // var travel = function( line, startStation, endingStation ) {
// //   var returnArray = [];
// //   if( line.indexOf( endingStation ) < line.indexOf( startStation ) {
// //     line = line.reverse();
// //   }
// // for( var i = line.indexOf( startStation ); i <= line.indexOf( endingStation ); i++ ) {
// //         returnArray.push( line[i] );
// //       }
// // };
// //
// // var makeTrip = function( startingLine, startStation, endingLine, endingStation) {
// //
// //   if( startingLine !== endingLine ) {
// //     return travel ( startingLine, startStation, "Union Square" ).concat( travel( endingLine, "Union Square", endingStation));
// //   }
// //
// // };

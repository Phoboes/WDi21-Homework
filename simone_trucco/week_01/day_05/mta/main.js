var line = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  Six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// straight trip going up;

var travel = function( line, startStation, endingStation ){
  var returnArray = [];
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
    return travel( startingLine, startStation, "Union Square" )
          .concat( travel( endingLine, "Union Square", endingStation ) );
  }

};





// var line = {
//   N: [ "Grand Central", "33rd", "28th N", "23rd N", "Union Sq N","Astor Place" ],
//   L: [ "Times Square", "34th", "28th L", "23rd L", "Union Sq L","8th L" ],
//   6: [ "8th S", "6th", "Union Sq S", "3rd", "1st" ]
// };
//
// // straigh trip going up
//
// var travel = function( line, startStation, endingStation ) {
//   var returnArray = [];
//   if( line.indexOf( endingStation ) < line.indexOf( startStation ) {
//     line = line.reverse();
//   }
// for( var i = line.indexOf( startStation ); i <= line.indexOf( endingStation ); i++ ) {
//         returnArray.push( line[i] );
//       }
// };
//
// var makeTrip = function( startingLine, startStation, endingLine, endingStation) {
//
//   if( startingLine !== endingLine ) {
//     return travel ( startingLine, startStation, "Union Square" ).concat( travel( endingLine, "Union Square", endingStation));
//   }
//
// };





//////////////////////////////////////////////////////////////////////////////

// var subwaySystem = {
//   nLine: [ "Grand Central", "33rd", "28th N", "23rd N", "Union Sq N","Astor Place" ],
//   lLine: [ "Times Square", "34th", "28th L", "23rd L", "Union Sq L","8th L" ],
//   sixLine: [ "8th S", "6th", "Union Sq S", "3rd", "1st" ]
// };
//
// // var gC = nLine[0];
// // var n33 = nLine[1];
// // var n28 = nLine[2];
// // var n23 = nLine[3];
// // var uSqN = nLine[4];
// // var aPlace = nLine[5];
//
// // var nLine = subwaySystem.lLine;
// // console.log(nLine);
// // var lLine = subwaySystem.lLine;
// // console.log(lLine);
// // var sixLine = subwaySystem.sixLine;
// // console.log(sixLine);
//
//
// // var lLine = subwaySystem.lLine;
// // var sixLine = subwaySystem.sixLine;
// //
//
// // example use: singleTrip("nLine", "33rd", "Astor Place");
// // var singleTrip = function (line, start, stop) {
// //   var nLine = subwaySystem[ nline ];  // evaluates to subwaySystem[ "nLine"] in the above example
// //
// //     // lineStations[0]
// // };
// // singleTrip(nLine, );
// // debugger;
// var gC = subwaySystem.nLine[0];
// var n33 = subwaySystem.nLine[1];
// var n28 = subwaySystem.nLine[2];
// var n23 = subwaySystem.nLine[3];
// var uSqN = subwaySystem.nLine[4];
// var aPlace = subwaySystem.nLine[5];
//
// // function singleTrip (start, stop) {
// //     if (start > stop) {
// //       for (i = start; i = stop; i += 1 );
// //       console.log();
// //     } else {
// //       for ( j = start; i = stop; i += 1 );
// //     }
// //     console.log(singleTrip);
// // };
// // singleTrip( gC, uSqN) ;

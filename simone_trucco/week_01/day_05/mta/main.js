

var subwaySystem = {
  nLine: [ "Grand Central", "33rd", "28th N", "23rd N", "Union Sq N","Astor Place" ],
  lLine: [ "Times Square", "34th", "28th L", "23rd L", "Union Sq L","8th L" ],
  sixLine: [ "8th S", "6th", "Union Sq S", "3rd", "1st" ]
};

// var gC = nLine[0];
// var n33 = nLine[1];
// var n28 = nLine[2];
// var n23 = nLine[3];
// var uSqN = nLine[4];
// var aPlace = nLine[5];

// var nLine = subwaySystem.lLine;
// console.log(nLine);
// var lLine = subwaySystem.lLine;
// console.log(lLine);
// var sixLine = subwaySystem.sixLine;
// console.log(sixLine);


// var lLine = subwaySystem.lLine;
// var sixLine = subwaySystem.sixLine;
//

// example use: singleTrip("nLine", "33rd", "Astor Place");
// var singleTrip = function (line, start, stop) {
//   var nLine = subwaySystem[ nline ];  // evaluates to subwaySystem[ "nLine"] in the above example
//
//     // lineStations[0]
// };
// singleTrip(nLine, );
// debugger;
var gC = subwaySystem.nLine[0];
var n33 = subwaySystem.nLine[1];
var n28 = subwaySystem.nLine[2];
var n23 = subwaySystem.nLine[3];
var uSqN = subwaySystem.nLine[4];
var aPlace = subwaySystem.nLine[5];

singleTrip = function (start, stop) {

    if (start > stop) {

      for (i = start; i = stop; i += 1 );
      console.log();

    } else {


      for ( j = start; i = stop; i += 1 );
    }
    console.log(singleTrip);
};
singleTrip( gC, uSqN) ;

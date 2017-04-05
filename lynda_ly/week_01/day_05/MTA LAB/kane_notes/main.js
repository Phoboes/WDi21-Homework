var line = {
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

// Kane notes
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



////// Kane as student attempt
lineArr = [

  // NLine
  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

  // The L line has the following stops:
  // LLine
  ["8th", "6th", "Union Square", "3rd", "1st"],

  // The 6 line has the following stops:
  // sixLine
  ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
];



var result;
var indexFun = function(line, station){

  // This uses the line input to determine what train line array it will need to index for the station input.

  var returnIndex;

  if (line.toUpperCase() === "N"){
    returnIndex = lineArr[0];
  }
  if (line.toUpperCase() === "L"){
    returnIndex = lineArr[1];
  }
  if (line === "6"){
    returnIndex = lineArr[2];
  }

  if (line.toUpperCase() != "N" && line.toUpperCase() != "L" && line != "6"){
    result = chooch;
    return result;
  }

  // These 2 variables are the index values of Union Square and the station input. The values they hold are used by the
  // the slice below to cut the excess stations from the array.

  var union = returnIndex.indexOf("Union Square");
  var station = returnIndex.indexOf(station);


  if (union > station) {result = returnIndex.slice( station , union+1 ).reverse()
  };

  if (union < station) { result = returnIndex.slice( union , station+1 );
  };

  return result;
}
var result2;

// This function is effectively the same as the above, except it is only called in the event that a trip on the line ignores
// Union square. Because of this, it indexes between the start and end input on one line.

var sameLine = function(line, start, end){

  var returnIndex;
  line = line.toString().toUpperCase()

  if (line === "6"){
    returnIndex = lineArr[2];
  }
  if (line.toUpperCase() === "N"){
    returnIndex = lineArr[0];
  }
  if (line.toUpperCase() === "L"){
    returnIndex = lineArr[1];
  }

  if (line.toUpperCase() != "N" && line.toUpperCase() != "L" && line != "6"){
    result2 = chooch;
    return result2;
  }

  var start = returnIndex.indexOf(start);
  var end = returnIndex.indexOf(end);

  if (start > end) {result2 = returnIndex.slice( end , start ).reverse();
  };

  if (start < end) { result2 = returnIndex.slice( start , end+1 );
    result2.shift();
  };

};

// This function evaluates whether a trip is spread over 2 train lines and runs indexFun twice
 // for each line and combines them if it is, if it isn't - it runs sameLine and logs the results.

var travelTo = function (line1, start, line2, end){

  var line1 = line1.toString().toUpperCase();
  var line2 = line2.toString().toUpperCase();
  var stopsToUnion = indexFun (line1, start);
  var stopsFromUnion = indexFun (line2, end);

// The first 2 if statements evaluate whether the train line is valid, then whether the stop is valid on that line.
// if it passes those 2 things, it checks whether the trip runs on the same line or not and processes input accordingly.

  if (stopsToUnion !== chooch && stopsFromUnion !== chooch){
    if (stopsToUnion.length > 0 && stopsFromUnion.length > 0){
      var stopNum = stopsFromUnion.length + stopsToUnion.length-1;

      if (line1 === line2){

        if (start != end){

          sameLine(line1, start, end)
          stopNum = result2.length+1
          console.log("You are going from "+start+" to "+end+" on the "+line1+" line."+"\n"+
                "You will go through "+start+" to "+result2.join(", ")+"."+'\n'+
                "That's "+stopNum+" stations total.")
        } else {console.log("Same stop.")}

      } else {
          stopsToUnion.shift();
          stopsToUnion.reverse();

          console.log ("Your trip is from "+start+" on the "+line1+" line to "+end+" on "+line2+"."+"\n"+
                "You pass through "+stopsToUnion.join(", ")+", "+stopsFromUnion.join(", ")+"."+"\n"+
                "That's a total of "+stopNum+" stations.")
      }
    } else {console.log ("That stop doesn't exist.")}

  } else if (stopsToUnion === chooch || stopsFromUnion === chooch){console.log(chooch);}
};

// -------- TEST LINES ---------


// //wrong station
// travelTo("6", "Grand Central", "6", "28h") ;
// console.log("\n");

//wrong line
travelTo("g", "Grand Central", "6", "28h") ;
console.log("\n");

// Same stop.
travelTo("6", "23rd", "6", "23rd");
console.log("\n");

// // same name, different lines
travelTo("n", "8th", "l", "8th");
// console.log("\n");

// // same line
// travelTo("6", "Astor Place", "6", "Grand Central");
// console.log("\n");

// //same line not through Union
// travelTo("6", "Grand Central", "6", "23rd");
// console.log("\n");

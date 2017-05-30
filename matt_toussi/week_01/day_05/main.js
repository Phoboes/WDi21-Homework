
var nLine = ["Times Square","34th","28th","23rd","Union Square","8th"];
var lLine = ["8th", "6th", "Union Square", "3rd", "1st"];
var sixLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];


function printTrip (lineName, stopIn, stopOut) {
  var line = [];
  if(lineName == 'N'){
    line = nLine;
  } else if (lineName == 'L'){
    line = lLine;
  } else if (lineName == '6'){
    line = sixLine;
  }else{
    console.log('invalid line');
    return;
  }

  var stopInIndex = line.indexOf(stopIn);
  var stopOutIndex = line.indexOf(stopOut);

  if(stopOutIndex > stopInIndex){
    for ( var i = stopInIndex+1 ; i <= stopOutIndex ; i++) {
      console.log(lineIn+"_" , line[i]);
    }
  }else{
    for ( var i = stopInIndex-1 ; i >= stopOutIndex ; i--) {
      console.log(lineOut+"_", line[i]);
    }
  }
}


var lineIn = prompt("Please Enter Which line you are getting in: ");
var stopIn = prompt("Please Enter Which stop you are getting in: ");
var lineOut = prompt("Please Enter Which line you are getting out: ");
var stopOut = prompt("Please Enter Which stop you are getting out: ");

if(lineIn == lineOut) {
  printTrip(lineIn, stopIn, stopOut);

} else {
  console.log("You must travel through the following stops on the " + (lineIn) + "line:");
  printTrip(lineIn, stopIn, "Union Square");
  console.log("Please change at Union Square.");
  console.log("Your journey continues through the following stops:");
  printTrip(lineOut, "Union Square", stopOut );
}

console.log("end");


var lines = {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st" ],
    6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

function firstLeg(line, station) {
    var tripLine = lines[line];
    var stationIndex = lines[line].indexOf(station);
    var unionIndex = tripLine.indexOf("Union Square");
    // If the stationIndex > unionIndex call the compareIndexToUnion function
    // and let that function have the responsibility of return the correct array
    if(stationIndex > unionIndex) {
        return compareIndexToUnion(tripLine, unionIndex, stationIndex);
    } 
    // if stationIndex < unionIndex we can straight away
    // slice from the stationIndex to the unionIndex + 1
    // we want to keep unionSquare here so we can output it and count it
    // towards our total stops
    return tripLine.slice(stationIndex, unionIndex + 1);
}

function secondLeg(line, station) {
    var tripLine = lines[line];
    var unionIndex = lines[line].indexOf("Union Square");
    var stationIndex = tripLine.indexOf(station);
    // If the stationIndex < unionIndex call the compareIndexToUnion function
    // and let that function have the responsibility of returning the correct array.
    if(stationIndex < unionIndex) {
        return compareIndexToUnion(tripLine, unionIndex, stationIndex);
    }
    // if the stationIndex > unionIndex we can straight away
    // slice from the unionIndex to the stationIndex + 1 (off by one error)
    // we then splice off 'Union Square' as we do not want to have it in our second trip array
    var r = tripLine.slice(unionIndex, stationIndex + 1);
    r.splice(r[unionIndex], 1);
    return r;
}

function compareIndexToUnion(line, unionIndex, stationIndex) {
    // If the stationIndex > unionIndex, slice from the unionIndex
    // then reverse the array to get it in the correct order and return
    // add + 1 when slicing to accomodate for off by 1 error
    if(stationIndex > unionIndex) {
        return line.slice(unionIndex, stationIndex + 1).reverse();
    } else {
        // if the stationIndex < unionIndex slice from the stationindex
        // and reverse the array to get it in the correct order then return that array
        // then splice off 'Union Square' from the array as we do not want to out put it
        // or count it twice towards the total stops
        var r = line.slice(stationIndex, unionIndex).reverse();
        r.splice(unionIndex, 1);
        return r;
    }
}

function isSameLine(line, startStation, endStation) {
    var tripLine = lines[line];
    var startIndex = lines[line].indexOf(startStation);
    var endIndex = lines[line].indexOf(endStation);
    // If the endIndex < startIndex, slice from the endIndex and reverse the array
    // to get the correct trip order then return that array
    if(endIndex < startIndex) {
        return tripLine.slice(endIndex, startIndex + 1).reverse();
    }
    // If the endIndex > startIndex just return the entire array as is + 1 to include the last stop
    return tripLine.slice(startIndex, endIndex + 1);
}

function planTrip(startLine, startStation, endLine, endStation) {
    // Check if user is staying on the same line or staying at union square
    if((startLine === endLine) || (startStation === "Union Square" && endStation === "Union Square")) {
        // Check if user is staying at the same station
        if (startStation === endStation) {
            return "You won't be going anywhere with these choices.";
        }
        // Check if the use is travelling on the same line to a different station
        var s = isSameLine(startLine, startStation, endStation);
        // Log the trip that is on the same line
        var msg = "You are travelling on line " + startLine;
        msg += " from station " + "'"+s[0]+"'" + " through to station " + "'"+s[s.length - 1]+"'";
        return msg;

    } else if (startLine !== endLine){
        // Call the two below functions to return the appropriate arrays
        var f1 = firstLeg(startLine, startStation);
        var f2 = secondLeg(endLine, endStation);
        // Concat the two arrays together and -1 to account for off by one
        var totalStops = f1.concat(f2).length - 1+ " stops in total.";
        // Log stops of the first trip
        var msg1 = "You must travel through the following stops on the ";
        msg1 += startLine + " line: " + f1.slice(1,f1.length).join(", ") + ".";    
        // Log stops of the second trip
        var msg2 = "Your journey continues through the following stops: ";
        msg2 += f2.join(", ") + " on the " + endLine + " line.";
        // log all stops and information
        return msg1 + "\n" + "Then change at Union Square." + "\n" + msg2 + "\n" + totalStops;
    } else {
        return "Invalid Parameters.";
    }
}


// ----------------------------------------------------------------
// SETUP USER CONTROLS

// Having fun with some jQuery to get auto populated drop down menus
// based on which line you have selected. Then return those selected values 
// into planTrip(). We then append the returned result from planTrip() to a span element

startTripMenu();
endTripMenu();

function startTripMenu() {
    var line = $("#startLine").val();
    $("#startStation").html("");

    if(line === "N") {
        for(var i=0; i < lines[line].length ;i++){
            $("#startStation").append("<option>"+lines[line][i]+"</option>")
        }
    } else if(line === "L") {
        for(var i=0; i < lines[line].length ;i++){
            $("#startStation").append("<option>"+lines[line][i]+"</option>")
        }
    } else if(line === "6") {
        for(var i=0; i < lines[line].length ;i++){
            $("#startStation").append("<option>"+lines[line][i]+"</option>")
        }
    } else {
        return null;
    }   
};

function endTripMenu() {
    var line = $("#endLine").val();
    $("#endStation").html("");

    if(line === "N") {
        for(var i=0; i < lines[line].length ;i++){
            $("#endStation").append("<option>"+lines[line][i]+"</option>")
        }
    } else if(line === "L") {
        for(var i=0; i < lines[line].length ;i++){
            $("#endStation").append("<option>"+lines[line][i]+"</option>")
        }
    } else if(line === "6") {
        for(var i=0; i < lines[line].length ;i++){
            $("#endStation").append("<option>"+lines[line][i]+"</option>")
        }
    } else {
        return null;
    }
};

function resultOutput() {
    document.getElementById("result").innerHTML = "";
    var span = document.getElementById("result");

    var sle = document.getElementById("startLine");
    var startLine = sle.options[sle.selectedIndex].value;

    var sse = document.getElementById("startStation");
    var startStation = sse.options[sse.selectedIndex].value;

    var ele = document.getElementById("endLine");
    var endLine = ele.options[ele.selectedIndex].value;

    var ese = document.getElementById("endStation");
    var endStation = ese.options[ese.selectedIndex].value;

    var result = planTrip(startLine, startStation, endLine, endStation);
    span.appendChild(document.createTextNode(result));
};

var btn = document.getElementById("calcTrip");
btn.addEventListener("click", resultOutput);

(function() {
    $("#startLine").change(function() { 
        startTripMenu();
    });
    $("#endLine").change(function() { 
        endTripMenu();
    });
})();

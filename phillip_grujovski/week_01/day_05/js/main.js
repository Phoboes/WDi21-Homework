$(document).ready(function() {
    var lines = {
        N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        L: ["8th", "6th", "Union Square", "3rd", "1st" ],
        6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    };

    function firstLeg(line, station) {
        var tripLine = lines[line];
        var startIndex = lines[line].indexOf(station);
        var unionIndex = tripLine.indexOf("Union Square");
        if(startIndex > unionIndex) {
            return compareIndexToUnion(tripLine, unionIndex, startIndex);
        } 
        return tripLine.slice(startIndex, unionIndex + 1);
    }

    function secondLeg(line, station) {
        var tripLine = lines[line];
        var unionIndex = lines[line].indexOf("Union Square");
        var endIndex = tripLine.indexOf(station);
        if(endIndex < unionIndex) {
            return compareIndexToUnion(tripLine, unionIndex, endIndex);
        }
        var r = tripLine.slice(unionIndex, endIndex + 1);
        r.splice(r[unionIndex], 1);
        return r;
    }

    function compareIndexToUnion(trip, union, station) {
        if(station > union) {
            return trip.slice(union, station + 1).reverse();
        } else {
            var r = trip.slice(station, union).reverse();
            r.splice(union, 1);
            return r;
        }
    }

    function isSameLine(line, startStation, endStation) {
        var tripLine = lines[line];
        var start = lines[line].indexOf(startStation);
        var end = lines[line].indexOf(endStation);
        if(end < start) {
            return tripLine.slice(end, start + 1).reverse();
        }
        return tripLine.slice(start, end + 1);
    }

    function planTrip(startLine, startStation, endLine, endStation) {
        // Check if user is staying on the same line
        if(startLine === endLine) {
            // Check if user is staying on the same line
            if (startStation === endStation) {
                return "You won't be going anywhere with these choices.";
            }
            var s = isSameLine(startLine, startStation, endStation);
            var msg = "You are travelling on line " + startLine;
            msg += " from station " + "'"+s[0]+"'" + " through to station " + "'"+s[s.length - 1]+"'";
            return msg;

        } else if (startLine !== endLine){
            var f1 = firstLeg(startLine, startStation);
            var f2 = secondLeg(endLine, endStation);
            var totalStops = f1.concat(f2).length - 1+ " stops in total.";
            // Log stops of the first trip
            var msg1 = "You must travel through the following stops on the ";
            msg1 += startLine + " line: " + f1.slice(1,f1.length).join(", ") + ".";    
            // Log stops of the second trip
            var msg2 = "Your journey continues through the following stops: ";
            msg2 += f2.join(", ") + ".";
            return msg1 + "\n" + "Then change at Union Square." + "\n" + msg2 + "\n" + totalStops;

        } else {
            return "Invalid Parameters.";
        }
    }

    console.log(planTrip('N', 'Times Square', '6', '33rd'));

    // ------------------------------------
    // SETUP USER CONTROLS

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
});

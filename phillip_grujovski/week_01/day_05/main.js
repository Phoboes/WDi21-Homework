var lines = {
    N: [
        "Times Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th"
    ],
    L: [
        "8th",
        "6th",
        "Union Square",
        "3rd",
        "1st"
    ],
    6: [
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place"
    ]
};
// This is how we will swap @ Union Square
// if(lines[sLine][i] === "Union Square"){
//     return "swap";
// };
// store trips in variables slice(startIndex, finishIndex)
function planTrip(sLine, sStation, fStation) {
    var stops = [];
    var start = lines[sLine].indexOf(sStation);
    var finish = lines[sLine].indexOf(fStation);
    debugger;
    if(sLine.toUpperCase() === "N") {
        if (finish > start) {
            for (var i = start; i > finish + 1; i++){
                stops.push(lines[sLine][i]);
            }
        } else {
            for (var i = finish; i < start + 1; i++){
                stops.push(lines[sLine][i]);
            }
        }
    } else {
        return "Incorrect parameters";
    }
    var msg = "You must travel through the following stops on the " + sLine + " line: ";
    for (var i = 0; i < stops.length; i++) {
        msg += stops[i] + " ";
    };
    console.log(msg);
}
//
//
// // console.log("Page Loaded");
//
// var emptyArr = [];
// var alphabet = ["a", "b", "c", "d", "e"];
//
// var alphabetAsString = "abcdefghijklmnopqrstuvwxyz";
// var alphabetArray = alphabetAsString.split('');
//
// var tenthLetter = alphabetAsString[9];
// var fifthLetter = alphabetAsString[4];
// var lastLetter = alphabetAsString[25];
// lastLetter = alphabetAsString[ alphabetAsString.length - 1 ];
//
// var sillyArray = [
//   false,
//   '',
//   undefined,
//   null,
//   [ 'INNER ARRAY 0' ],
//   {},
//   1
// ];
//
// var nullItem = sillyArray[3];
// var innerArray = sillyArray[4];
//
// var innerArrayItem = sillyArray[4][0];
// innerArrayItem = innerArray[0];
//
// console.log(innerArrayItem);
//
// // Reassigning values
//
// var rainbowColors = [
//   "red",
//   "orange",
//   "yellow",
//   "blue",
//   "black",
// ];
//
// debugger;
//
//
// //Change the first color to Indigo
// rainbowColors[1] = "Indigo";
// //Change the index 3 element to Purple
// rainbowColors[3] = "Purple";
// //Change the last item to Gainsboro using the length property
// rainbowColors[rainbowColors.length - 1] = "Gainsboro";
// //Put something in the index 90
// debugger;
//
// console.log(rainbowColors);

//
var weirdInstruments = [
    "Badgermin",                      // 0
    "The Great Stalacpipe Organ",     // 1
    "Stylophone",                     // 2
    "Ondes Martenot",                 // 3
    "Sharpischord",                   // 4
    "Hydraulophone",                  // 5
    "Pyrophone"                       // 6
];

// LOOP REQUIREMENTS
// Starting Point, Ending Point, Increment


//Hard-coded Loop
// for ( var i = 0; i < 7; i += 1) {
//     var instrument = weirdInstruments[0];
//     //console.log("The index is", i);
//     console.log(instrument);
// }

//Easy-coded Loop
// for ( var i = 0; i < weirdInstruments.length; i += 1) {
//     var instrument = weirdInstruments[i];
//     //console.log("The index is", i);
//     console.log(instrument);
// }

// Print out every item between index 1 and 4
// I still want to print out every item (add 1)
// The starting point is different - it is now 1
// The ending point is different - it is now 4

for ( var i = 0; i < weirdInstruments.length; i += 2) {
    var instrument = weirdInstruments[i];
    //console.log("The index is", i);
    console.log(instrument);
}




// var otherWeirdInstruments =
// weirdInstruments.slice(); //Make a complete copy
//
// otherWeirdInstruments.push("OP1");
//
// console.log("Weird Instruments", weirdInstruments);
// console.log("Other Weird Instruments", otherWeirdInstruments);
//
// // Teenage Engineering OP-1 needs to go int eh index of 4
//
// console.log(weirdInstruments);
// weirdInstruments.splice(4,0, "OP1");
// console.log(weirdInstruments);
//
// //To make partial copiues of an array
//
// var theRest = weirdInstruments.slice(2);
//   //Takes all of the items from the index of 2
//
// var betweenArray = weirdInstruments.slice(1, 3);
//   //Takes all items from to 3 (not inclusive - does'nt include the item in index 3.
//

//Remove just the stylophone
// weirdInstruments.splice(2,1);
// console.log(weirdInstruments);
//
// //Remove from the Ondex Martenot to the Pyrophone
// //(bonus points if you use the .length property)
// var ondesIndex = weirdInstruments.indexOf("Ondes Martenot")
// var lastIndex = weirdInstruments.length - 1;
// weirdInstruments.splice(ondesIndex, lastIndex);
// console.log(weirdInstruments);


// //
// // Find where the Stylophone is in this ARRAY
// var styloIndex =
//   weirdInstruments.IndexOf("Stylophone");
//     console.log(styloIndex);
//
// var stylo = [ styloIndex ];
//   console.log(stylo);
//
// //Find where the Pyrophone is
// var pyroIndex =
//   weirdInstruments.IndexOf("Pyrophone");
//   console.log(pyroIndex);
// //Check to see if the Seaboard is in there
//
//
//
// // Find the index of the boolean false
// var falseSearch = sillyArray.IndexOf(false);
// console.log(falseSearch);
//
//
// // Find the index of INNER ARRAY 1 in the inner array
// var innerArrayOne = sillyArray[4].indexOf("INNER ARRAY 1");
// console.log(innerArrayOne);

//Check to see if the Seaboard is in there


// Adding Elements

// var fruits = ["Orange", "Banana", "Kiwi Fruit"];
//
// //add to the end - .push()
// fruits.push("Grapes");
// fruits.push("Red Apple", "Green Apple");
// console.log(fruits);
//
// //Add to the start - .unshift()
// fruits.unshift("Mango");
// console.log(fruits);
//
// //Removing Items
//
// // Remove from the end - .pop();
//   fruits.pop();
//   fruits.pop();
//   console.log( fruits);
//
//   //Remove from the start - .shift();
//   fruits.shift();

//SLICE

// [
//   "First Item"
//   "Second Item"
//   "Third Item"
//   "Fourth Item"
// ]
//
// var myArrayOfThings = [ true, true, true ];
// var mySecondArray = myArrayOfthings;
//
// mySecondArray.push(false);
// console.log(myArrayOfthings);
// console.log(mySecondArray);

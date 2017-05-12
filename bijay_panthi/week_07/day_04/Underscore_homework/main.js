///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// Log out 30 random numbers between 20 and 100

var numberRange = _.range(20, 101);
console.log(numberRange);
var randomNumbers = _.sample(numberRange, 30);
console.log("Random Numbers: ", randomNumbers);

// Create a function that can only ever be called once
var oneTimeCallingFunction = _.once();
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>
var printAllPerson = _.template("<p> Hello <%= name %>, you don't look a day over <%= age %> </p>");
_.each(people, function(person){
  console.log(printAllPerson({name: person.username , age: person.age}));
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// WAS NOT ABLE TO DO THE EXAMPLE BELOW ///////////////////////////////////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];


// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.

 var unzippedArrays = _.unzip(startingData);
//console.log(unzippedArrays);


var arraysToObject = _.object(unzippedArrays);
console.table((arraysToObject));

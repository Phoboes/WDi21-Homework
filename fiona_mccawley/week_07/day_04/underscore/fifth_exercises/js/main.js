// Utilities, Functions and Chaining!
// console.log(_);

// Log out 30 random numbers between 20 and 100
var range = _.range(20, 100);
var randomNumbers = _.sample(range, 30);
console.log(randomNumbers);

// Create a function that can only ever be called once

var onlyOnce = _.once(function (){
    console.log("This can be called only once");
  });
onlyOnce();
onlyOnce();
onlyOnce();
onlyOnce();
onlyOnce();

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];
// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>

var peopleLoop = _.each(people, function (person){
  // console.log("Current person is" + person["username"]);
  var paragraph = "<p>Hello <%=username%>, you don't look a day over 20 </p>";
  var addPara = _.template( paragraph );
  var currentUsername = person["username"];
  var completePara = addPara({username: currentUsername});
  console.log(completePara);
});

//////////////////// The Final Exercise//////////////////////

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];


// Five console.logs that look like the following...
//
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.


// You'll need to rearrange the data firstly,

// First step is restructuring each one of the nested arrays (_.unzip will help). For example:
// // This...
// [["groucho", "marx", 1990], ["firstName", "lastName", "born"]]
//
// // Needs to become this...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]

var firstArray = _.unzip(startingData);
// console.log(firstArray);
var secondArray = _.unzip(firstArray);
// console.log(secondArray);

var fourthArray = [];
var thirdArray = _.each(secondArray, function(i){
  fourthArray.push(_.unzip(i));
});
console.log(fourthArray);

// You then need to turn them into an object (_.object will help)
var altObject = [];
var alterArray = _.each(fourthArray, function(i){
  altObject.push(_.object(i));
});
console.log(altObject);

// You then need to flip that object around (_.invert will help)
var flipObj = [];
var flip = _.each(altObject, function(i){
  flipObj.push(_.invert(i));
});
console.log(flipObj);

// / You then need to change each value in that object. If the value can be turned into a number, you need to minus 100 from it. If it can't be, you need to make the first letter a capital (_.mapObject, _.isNaN will help)

var alterData = _.each(flipObj, function(obj){
  _.mapObject(obj, function(val){
    // console.log("val: " + val);
    if(parseInt(val)){
      val = val - 100;
      return val;
    } else {
      // val = val.toUppercase();
    // _.isNAN(val)
      // console.log(val);
    }
  });
});

console.log(alterData);



// You then need to change each value in that object. If the value can be turned into a number, you need to minus 100 from it. If it can't be, you need to make the first letter a capital (_.mapObject, _.isNaN will help) For example:
// // This...
// { born: "1990", firstName: "groucho", lastName: "marx" }
//
// // Needs to become this...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }




// After that, for each object in the startingData, you need to create a template (_.template will help) that receives an object, and console.log a string that looks something like this:
// // This...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }
//
// // Needs to be used to create a string that looks like this...
// "Groucho Marx was born in 1890."

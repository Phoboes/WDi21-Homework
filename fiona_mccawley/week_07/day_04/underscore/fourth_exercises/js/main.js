// console.log(_);
// Objects!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};
// Multiply each value in objectToMap by a random number and return an object with the changed values
var randomNumber = _.mapObject(objectToMap, function(value, key){
  var random = _.random(1, 100);
  return value * random;
});
console.log(randomNumber);

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var arrayVersion = _.pairs(objectToMap);
console.log(arrayVersion);

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var flipObj = _.invert(objectToMap);
console.log(flipObj);

// Remove the "start" key from objectToMap in two different ways
var removeStartOne = _.omit(objectToMap, 'start');
console.log(removeStartOne);

var removeStartTwo = _.pick(objectToMap, 'middle', 'end');
console.log(removeStartTwo);

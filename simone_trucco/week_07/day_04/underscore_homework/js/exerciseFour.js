// Log out the answers to all of the following questions!


var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values
var randomNum = _.random(1, 10);

var multiplied = _.mapObject( objectToMap, function ( value, key ) {
  return value * randomNum;
});
console.log(randomNum, multiplied );

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var mergedObj = _.pairs( objectToMap );
console.log(mergedObj);


// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var inverted = _.invert( objectToMap );
console.log(inverted);

// Remove the "start" key from objectToMap in two different ways
var noStart = _.omit( objectToMap, 'start');
console.log(noStart);

var noStartTwo = _.pick( objectToMap, 'middle', 'end');
console.log(noStartTwo);

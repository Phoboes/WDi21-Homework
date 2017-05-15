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
var mappedObj = _.mapObject( objectToMap, function (val, key) {
  return val * _.random(1, 10);
});

console.log( mappedObj );

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var array = _.pairs( objectToMap );
  console.log( array );


// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
console.log( _.invert( _.object ( array ) ) );



// Remove the "start" key from objectToMap in two different ways

var whitelisted = _.pick( objectToMap, 'middle', 'end' );
console.log( whitelisted);

var blacklisted = _.omit( objectToMap, 'start');
console.log( blacklisted );

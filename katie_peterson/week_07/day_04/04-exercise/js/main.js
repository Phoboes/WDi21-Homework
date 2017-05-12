var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values

var randomNum = _.random( 100, 500 );
console.log(randomNum);

var multiply = _.map( objectToMap, function ( value, key ) {
  return value * randomNum;
});

console.log(multiply);

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]

var arrayVersion = _.pairs(objectToMap);
console.log(arrayVersion);

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }

//invert

var objectKeys = _.invert( objectToMap );
console.log( "\tOriginal Object: ", objectToMap );
console.log( "\tInverted Object: ", objectKeys );


// Remove the "start" key from objectToMap in two different ways
//omit or pick

var omittedKeys = _.omit( objectToMap, 'start' );
console.log(omittedKeys);

var removeStart = _.pick( objectToMap, 'middle', 'end' );
console.log(removeStart);

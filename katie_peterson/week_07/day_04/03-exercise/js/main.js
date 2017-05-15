var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];



// Create an array of every five numbers between 30 and 101
console.log(
  _.range( 30, 101, 5)
);

// Turn bumpyArr into one flat array (no nested arrays)
var flatArray = _.flatten (bumpyArr);
console.log(flatArray);

// Remove all of the falsey elements in the uncompactedArr

var falsyValues = _.compact (uncompactedArr);
console.log(falsyValues);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0

var unique = _.union([1, 25, 100], [1, 14, 25], [2, 1], 24);
console.log(unique);

// Find the index of the first element in numbers that is over 7 and is even

// var firstIndex = _.findIndex (numbers, 8);
// console.log(firstIndex);

var firstEven = _.find( numbers, function ( numbers ) {
  return numbers % 2 === 0 && numbers > 7;
} );
console.log( "\tFirst Even in the Array Over 7 : ", firstEven );

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

var compactedArray = _.compact( arrToTransform );
console.log( "\tOriginal Array: ", arrToTransform );
console.log( "\tCompacted Array: ", compactedArray );
console.log( "" );

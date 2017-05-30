// // Reverse
//
// var nums = [1, 2, 3, 4];
//
// console.log(nums);
//
// var newNums = nums.reverse();
//
// console.log(newNums);

var reverser = function ( array ) {
  var reversedArray = array.reverse();
  console.log(reversedArray);
};

// var nums = [1, 2, 3, 4];
reverser([1, 2, 3, 4]);



var flattener = function ( array ) {
  var flatArray = [].concat.apply([], array);
  console.log(flatArray);
};

flattener(["Hello", ["World", 42] ]);

// // Flatten
// var array = ( ["Hello", ["World", 42] ] );
//
// console.log(array);
//
// var newArray = [].concat.apply([], array);
//
// console.log(newArray);

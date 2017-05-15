// ## Simple Sums 

// Write a program that can calculate the sum of the first `n` elements of the following sequences:

// ```js
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// ```
// For example:

// ```js
// s1(4) = 0
// s2(4) = 10
// ```

// Use any language of your choice.

// Can you guess what the sum would be if n is infinity?

// ---------------------------------------------------------------

// var s1 = function( num ){
//   output = 1;
//   for( var i = 0; i < num; i++ ){
//     if( i % 2 === 0 ){
//       output --;
//     } else {
//       output ++;
//     }
//   }
//   return output;
// };

// You may notice a pattern, we don't need to loop, we can just check if the number is even or not.

// var s1 = function( num ){
//   var output = 1;
//     if( num % 2 === 0 ){
//       output = 0;
//     } else {
//       output = 1;
//     }
//   return output;
// };

// We can go further:

// Ternary operators behave like extremely short if/else statements. 
// They follow consistent structure like this:
// ( condition ) ? (true case) : (false case)

// If the condition is true, it runs the first block, if not, it does the second.


var s1 = function( num ){
  return num % 2 === 0 ? 0 : 1;
};

console.log(s1(10));
console.log(s1(9));

// ---------------------------------------------------------------


// var s2 = function( num ){
//   var previousStep = 0;
//   for( var i = 1; i <= num; i++ ){
//     previousStep += i;
//   }
//   return previousStep;
// };


// Though the one above works, you may have noticed there's also a pattern here.
// This pattern is so common, it has its own wikipedia page: https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF

// From which we can steal the following formula:

var s2 = function( num ){
  return ( num * ( num + 1 ) ) / 2;
};

console.log(s2(4));
















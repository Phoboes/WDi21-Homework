
// Write a program that can calculate the sum of the first n elements of the following sequences:
//
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
//
// s1(4) = 0
// s2(4) = 10
// Use any language of your choice.
//
// Can you guess what the sum would be if n is infinity?

// console.log("Hello World");


// var s1 = function ( num ) {
//   var output = 1;
//     for( var i = 0; i <= num; i++ ) {
//       if( i % 2 === 0 ) {
//         output --;
//       } else {
//         output ++;
//       }
//     }
//     return output;
// };

// var s1 = function ( num ) {
//   var output = 1;
//     for( var i = 0; i <= num; i++ ) {
//       if( i % 2 === 0 ) {
//         output --;
//       } else {
//         output ++;
//       }
//     }
//     return output;
// };

// var s1 = function( num ) {
//   return num % 2 === 0 ? 0 : 1;
// };
//
// console.log( s1(4) );

// var s2 = function( num ){
//   var output = 0;
//
//   for( var i = 1; i <= num; i++ ){
//     output+= 1;
// }
//   return output;
// };
//
// var s2 = function( num ){
//     return ( num * ( num + 1) ) / 2;
// };
//
// console.log( s2(4) );

// Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// var number = 1755;
// var returnStr = '';

// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// Examples
//
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

var raindrops = function( targetNumber ){

  // If Loop up to our targetNumber.
  for( var i = 0; i <= targetNumber; i++ ){

    // As with our warm up, we have an empty string we push all these values to.
    var returnString = '';

    if ( i % 3 === 0 && i > 1 ) {
      returnString += "Pling"
    };
    if ( i % 5 === 0 && i > 1 ) {
      returnString += "Plang"
    };
    if ( i % 7 === 0 && i > 1 ) {
      returnString += "Plong"
    };
    if ( returnString === '' ) {
      returnString += i;
    };

    // Log out every iteration of the loop.
    console.log( returnString );
  }
};

raindrops( 7 );

// var 3 = 'Pling'
// var 5 = 'Plang'
// var 7 = 'Plong'
//
// if () {
//   console.log( "In raindrop-speak, this would be a simple" + );
// } else if () {
//   console.log( "In raindrop-speak, this would be a " + );
// } else if () {
//   console.log( "Raindrop-speak does'nt know what to make of that, so it just goes with the straightforward" + );
// }

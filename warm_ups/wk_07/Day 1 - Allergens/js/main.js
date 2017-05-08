// Allergies Warmup

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say:

// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.

// -----------------------------------------------------------------------------------

// Process:

// Get a list of all the allergen keys
// Loop through it *backwards* 
  // (if my score is 34, and I count up from 1, my allergies will be all wrong)

  // If the allergen score is higher than the flag, I am allergic
    // Save that value, and remove the key's value from the sum of the score.
    // Repeat until all sums are compared.

// Give a formatted output.

// -----------------------------------------------------------------------------------


var allergens = {
  scorecard: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  },

  getKeys: function(){

    // - Get all the keys from my starting object, turn them into numbers and reverse them
    // -----------------------------------------------------------------------------------

    // We can use Object methods to strip our key values.
    // From there, we convert all those keys to numbers, and flip our array so we can easily iterate backwards through it.
    

    // THIS:

    // var keys = Object.keys( this.scorecard ).reverse();
    // keys = keys.map(function( num ){
    //   return parseInt( num );
    // })
    // return keys;

    // CAN BE SIMPLIFIED TO THIS:

    return Object.keys( this.scorecard ).map( Number ).reverse();
  },

  getList: function( score ){

    // - Accumulate a list of all my allergens
    // -----------------------------------------------------------------------------------


    var keys = this.getKeys();
    var returnArr = [];

    // Again, if my score is higher than a key, I want to save that key's value, and subtract the key from my score.

    for( var i = 0; i < keys.length; i++ ){
      if( score >= keys[i] ){
        returnArr.push( this.scorecard[ keys[i] ] );
        score -= keys[i];
      }
    }
    return returnArr;
  },

  list: function( score ){

    // Give a neatly formatted output for the user.
    // -----------------------------------------------------------------------------------

    var allergyList = this.getList( score );
    // the join method will give us a neatly formatted string from an array, rather than needing to iterate it.

    if( allergyList.length > 0 ){
      console.log( "You are allergic to: " + allergyList.join(', ') + "." );
    } else {
      console.log("No allergies.");
    }

  }

}

allergens.list(34);


// -----------------------------------------------------------------------------------
//                              ALTERNATIVE FACTORY METHOD
// -----------------------------------------------------------------------------------

var allergyCheck = function( score ){


  this.allergens = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats" 
  };

  this.allergies = [];

// -----------------------------------------------------------------------------------

  // Rather than using a for ... in loop, we can use Object methods to strip our key values.
  // From there, we convert all those keys to numbers, and flip our array so we can easily iterate backwards through it.
  
  var allergyList = Object.keys( this.allergens ).map( Number ).reverse();

// -----------------------------------------------------------------------------------


  // If our score is higher than a key value, we are allergic.
  // Push matching values to our allergens array.
  // Subtract that key value from our score (input) otherwise we get a list of ALL values less than that input

  for( var i = 0; allergyList.length > i; i++ ){
    if( score >= allergyList[ i ] ){
      this.allergies.push( this.allergens[ allergyList[ i ] ] );
      score -= allergyList[ i ];
    };
  };

// -----------------------------------------------------------------------------------

  // A ternary operatoris like a very short if/else statement.
  // It takes a condition, if that condition is true, it runs the first command. If not, the second.
  // They can be hard to read, so they are best left to returning single values, not big blocks (though they can be put across multiple lines).

  // conditionIsTrue ? doThis() : notThis()

  this.allergicTo = function( input ){
    this.allergies.indexOf( input ) >= 0 ? console.log( "Allergic to " + input + "." ) : console.log( "Not allergic to " + input + "." );
  };
}; // end function


// Using the key word new, I can save all the information generated by my program.
// Anything in my function preceeded by <this> will be returned as an accessible attribute of that function.
var myAllergies = new allergyCheck( 34 );

console.log( myAllergies.allergies );
myAllergies.allergicTo( "peanuts" );
myAllergies.allergicTo( "cats" );
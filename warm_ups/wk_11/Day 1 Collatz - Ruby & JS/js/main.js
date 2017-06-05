// This is a pretty weird of doing this solution, but I wanted something slightly different from the Ruby solutions.
// Rather than specifically using nothing but an object,
// I've created a function that is somewhat like a constructor.

// It takes a number, and runs very similar methods to the ruby code, 
// but it spits out an object with the return values as its final step, meaning it either:

// Spits out the answer and never does anything else
// OR:
// Can be saved as a variable that holds all those return values, depending on what you need.

// Bear in mind, this is *not* the best solution, but is interesting to know about.

var collatz = function( num ){
  // Begin with a collection to modify, pass starting number diretly to it
  var collection = [ num ];
  var makeCollection = function(){

    // Using a while loop to iterate until this condition is met,
   // I am using collection.length - 1, as my length is 1; arrays start at 0 -- I need to start at collection[0]

    while ( collection[ collection.length - 1 ] > 1 ){
      // In the interests of readability, I'm storing the last item in teh array in this variable for every loop
      var currentNum = collection[ collection.length - 1 ];

      var nextIndex = currentNum % 2 === 0 ? ( currentNum / 2 ) : ( ( currentNum * 3 ) + 1 );
      collection.push( nextIndex );
    }
  };

  var answer = function(){
    console.log( "The function ran " + collection.length + " times." );
    console.log( "The process was: \n" + collection.join(', ') + ".");
  };

// Run my setters:

  makeCollection();
  answer();

  // Returning an object holding all the values defined by my functions
  return {
          start: num,
          collection: collection,
          steps: collection.length
  };

};

var colOne = collatz( 19 );

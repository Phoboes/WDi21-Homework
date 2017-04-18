var sieve = function( endPoint ){

  // Step 1: Populate a range
  // -----

  // My list always starts at 2, so I populate from 2 to my endpoint
  var range = [];
  for( var i = 2; i <= endPoint; i++ ){
    range.push( i );
  }

  // Step 2: Filter the range
  // -----

  // Somewhere to store our filtered results.
  var primes = [];

  // If anything is in our range of numbers, we want to keep counting until they are all shifted or deleted.
  while( range.length > 0 ){

    // The first number in our range will always be prime, so we save it first.
    // Saving the result of shift in a variable gives us both its value, and removes it from its original array.
    
    // eg:
    // var shiftedVal = [ 1 , 2 , 3 , 4 ].shift()
    // shiftedVal = 1. Array = [ 2, 3, 4 ].


    var nextPrime = range.shift();
    primes.push( nextPrime );

    // Filter works by taking an array and callback, then evaluating it against that callback.
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    
    // The callback in this case decides whether the next number is divisible by our last prime. 
    // If it is, ignore it, otherwise, save it.

    range = range.filter( function( num ){
      return num % nextPrime !== 0;
    });
  }

  // Return our final result when we've escaped our while loop.
  return primes;
};

// ------------------------------------------------------------
//                        OBJECT APPROACH
// ------------------------------------------------------------

var sieve = {

  // Storage
  range: [],
  primes: [],

  // Range creation
  makeRange: function( end ){
    for( var i = 2; i <= end; i ++ ){
      this.range.push( i );
    }
  // These returns aren't strictly necessary because we are actually modifying our storage arrays, but I like to have them anyway.
  return this.range;
  },


  // Sort a single prime out of our list
  filterPrimes: function( prime ){
    this.range = this.range.filter( function( num ){
      return num % prime !== 0;
    });
    // Again, an un-necessary return - But I like being able to call individual components.
    return this.range;
  },

  // Repeat our single sorts for every prime
  makePrimes: function(){
    while( this.range.length > 0 ){
      var prime = this.range.shift();
      this.primes.push( prime );
      this.filterPrimes( prime );
    }
  },

  // Tie it all together.
  toPrime: function( end ){
    // Reset primes to an empty array every time we call this function so we know we are starting with a clean slate.
    // Note: We don't do this for this.range because it is self clearing.

    this.primes = [];
    this.makeRange( end );
    this.makePrimes();

    return this.primes;
  }
};
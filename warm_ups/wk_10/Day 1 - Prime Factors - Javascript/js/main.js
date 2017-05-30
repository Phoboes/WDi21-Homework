// Prime Factors

// A prime number is any number greater than one that is only divisible by itself.

// 1 is not a prime number (it is not greater than 1).
// 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// 3 is a prime number (as above).
// 4 is not a prime number (it is evenly divisible by 2).
// The prime factors of an integer are the set of prime numbers will divide the integer exactly.

// Example

// What are the prime factors of 60?

// 1 is not a prime number.
// 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// 15 is not evenly divisible by 2.
// 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// 4 is not a prime number.
// 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 50), and leaves 1.
// When we get to 1, we're done.
// The prime factors of 60 are 2, 2, 3, 5
// You can check this yourself:

// 2 * 2 * 3 * 5
// = 4 * 15
// = 60
// Success!
// YOUR TASK

// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.

// -------------------------------------------------------------------------------

var prime = {

  // In some instances it can be handy to store the values returned from functions directly in the assosciated object.

  range: [],
  primeRange: [],
  primeFactorRange: [],

  getRange: function( num ){
    // Reset my object array every time this function is run to prevent stacking them on top of eachother.
    this.range = [];
    // Loop through and push every number from 2 to my target number
    for( var i = 2; i <= num; i++ ){
      this.range.push( i );
    }
    return this.range;
  },

  getPrimeRange: function( arr ){

    // My output array; despite having already been defined above, I want to unsure every time this function runs, it starts blank.
     this.primeRange = [];

    for( var i = 0; i < arr.length; i++ ){
      // A given number is considered prime until proven otherwise. 
      // These condition to invalidate it from being prime is:
      // It meets a number it can be divided by between 2 and itself.
      var isPrime = true;
      var potentialPrime = arr[i];

      for( var j = 2; j < potentialPrime; j++ ){
        // If the number is evenly divisible by anything between 2 and itself, it cannot be prime.
        if( potentialPrime % j === 0 ){
          isPrime = false;
        }
      }
      // If the number all checks from 1 - itself, isPrime remains true -- push it to our output array.
      // Repeat this until the loop is complete
      if( isPrime ){
        this.primeRange.push( potentialPrime );
      }
    }
    return this.primeRange;
  },

  getPrimeFactors: function( num ){
    this.primeFactorRange = [];

    // Using the functions from before, collect all the primes between 2 and the given num and store them in a variable.
    var numPrimes = this.getPrimeRange( this.getRange( num ) );

    // Iterate all the primes generated.
    for( var i = 0; i < numPrimes.length; i++ ){
      // In this case, I need a while loop. I need to stay on an index until I can no longer divide my number. 
      // A for loop would not get me a 2/2/3/5 result, as it would do the first 2, then move on.
      while( num % numPrimes[i] === 0 ){
        this.primeFactorRange.push( numPrimes[i] );
        // num /= would also work, though I don't use it, as I find it more confusing to read. /= behaves just like += etc. 
        num = num / numPrimes[i];
      }
    }
  console.log( this.primeFactorRange );
  return this.primeFactorRange;
  }
};



// var range = prime.getRange( 10 );
// prime.getPrimes( range );
prime.getPrimeFactors( 60 );


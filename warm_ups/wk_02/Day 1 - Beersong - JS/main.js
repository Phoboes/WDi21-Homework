// The song's lyrics are as follows:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.

// Bear in mind, not all verses are the same:

// The verse for 1 bottle is as follows:

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:

// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).

// ----------------------

// The basic approach:


var beerSong = function( startNum, endNum ){
  for( var i = startNum; i >= endNum; i-- ){
    if( i === 0 ){
      console.log( "No more bottles of beer on the wall, no more bottles of beer." );
      console.log( "Go to the store and buy some more, 99 bottles of beer on the wall." );
    } else if ( i === 1 ){
      console.log( "1 bottle of beer on the wall, 1 bottle of beer." );
      console.log( "Take it down and pass it around, no more bottles of beer on the wall." );
    } else {
      console.log( i + " bottles of beer on the wall, " + i + " bottles of beer." );
      console.log( "Take 1 down, pass it around " + ( i - 1 ) + " bottles of beer on the wall." );
    }
  }
};

// ----------------------

// Object approach:
  // Break the problem down in to tiny components:
    // There is always: A "bottles of beer" string, so that's where we will start.

var beer = {
  pluralise: function( num ){
    if( num === 1 ){
      return "1 bottle of beer";
    } else if ( num === 0 ){
      return "no bottles of beer";
    } else {
      return num + " bottles of beer";
    }
  },

  // There is always: An action: "Take it down"

  action: function( num ){
    if( num === 1 ){
      return "Take it down, pass it around, ";
    } else if ( num === 0 ){
      return "Go to the store, buy some more, ";
    } else {
      return "Take one down, pass it around, ";
    }
  },

  // This function addresses a very specific case on 0 bottles of beer. We can't just say ( num - 1 ) at zero, or we get -1 beers, instead of 99.

  getMoreBeer: function( num ){
    if( num === 0 ){
      return 99;
    } else {
      return num - 1;
    }
  },

  // This function combines our precious functions to make our verses.

  makeVerse: function(num){

    // Because we are calling functions from within the object, we use the 'this' beer.pluralise would also work.
    var verse1 = this.pluralise( num ) + " on the wall, " + this.pluralise( num ) + ",";

    // We can also pass functions to functions. Because I'm returning a value, I can work with the output.
    var verse2 = this.action( num ) + this.pluralise( this.getMoreBeer( num ) ) + " on the wall";

    // \ changes the meaning of the letter following it. n is no longer an n, but has been converted to a new line in our string.

    return verse1 + "\n" + verse2;
  },


  // This is my main function, it does all the work calling and combining my previous functions.

  song: function( startNum, endNum ){
    for( var i = startNum; i >= endNum; i-- ){
      // All my functions exclusively return values, they don't log, which means I need to pass makeVerse into a console.log.
      console.log( this.makeVerse( i ) );
    }
  }
};
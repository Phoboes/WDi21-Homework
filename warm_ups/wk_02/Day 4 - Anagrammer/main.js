// Anagram Detector

// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

// Suggestions

// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

var anagrams = ["enlists", "google", "inlets", "banana"];

var anagram = function( word ){
  for( var i = 0; i < anagrams.length; i++ ){
    
    // We can chain methods on top of one another, with this chain, we are uppercasing our input, splitting it into an array, sorting it alphabetically, and turning it back into a string.

    // Rather than a complicated approach, we can ask:
    // does 'listen' have the same letters as 'inlets'? Yes, they both sort to "EILNST"

    if( word.toUpperCase().split("").sort().join('') === anagrams[i].split("").sort().join('') ){
      return anagrams[i];
    }
  }
  return "No match.";
};

var anagrammmer = {
  anagramsList: ["enlists", "google", "inlets", "banana"],
  sorted: function( word ){
    return word.toUpperCase().split('').sort().join('');
  },
  findAnagram: function( word ){
    for( var i = 0; i < this.anagramsList.length; i++ ){
      if( this.sorted( word ) === this.sorted( this.anagramsList[ i ] ) ){
        console.log( this.anagramsList[i] + " is an anagram of " + word + "." );
        return this.anagramsList[i];
      }
    }
    console.log( "No anagram." );
    return null;
  }

};
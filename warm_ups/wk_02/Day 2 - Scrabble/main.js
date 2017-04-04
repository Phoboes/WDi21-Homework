var word = {
  values: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  score: function( word ){

    // Force the input word to always be uppercase, as lowercase won't evaluate in the object
    word = word.toUpperCase();
    var score = 0;

    // Iterate through our given word letter by letter
    for( var i = 0; i < word.length; i++ ){

      // With each letter, loop through our object
      for( key in this.values ){

        // If the letter is in my array, take it, force it back to a number ( keys are strings )
        if( this.values[key].indexOf( word[i] ) > -1 ){
          score += parseInt( key );

          // Once we've found and added to our score, break out of this letter's loop, don't keep looking.
          break;
        }
      }
    }
    return score;
  }
};

console.log( word.score("Cabbage!") );

var score = {
    letterScores: {
      "A": 1,
      "E": 1,
      "I": 1,
      "O": 1,
      "U": 1,
      "L": 1,
      "N": 1,
      "R": 1,
      "S": 1,
      "T": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10
  },
  word: function( word ){
    word = word.toUpperCase();
    var returnScore = 0;

    for( var i = 0; i < word.length; i ++ ){
      // If this letter is inside the object, above, add its value to the score, otherwise do nothing
      if( this.letterScores[ word[ i ] ] ){
        returnScore += this.letterScores[ word[ i ] ];
      }
    }
    return returnScore;
  }
};

console.log( score.word( "So much cabbage." ) );
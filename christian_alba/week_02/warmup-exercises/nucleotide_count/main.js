//
//
// Nucleotide Count
//
// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
//
// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
//
// Shortest intro to biochemistry EVAR:
//
// twigs are to birds nests as
// nucleotides are to DNA and RNA as
// amino acids are to proteins as
// sugar is to starch as
// oh crap lipids
// I'm not going to talk about lipids because they're crazy complex.
//
// So back to nucleotides.
//
// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
//
// There are no other nucleotides.
//
// Find how many of each nucleotides are in a string that you pass in to a function
//
// Make sure that you validate it has nucleotides!

// var DNA = ['A', 'C', 'G', 'T'];
//
// var RNA = ['A', 'C', 'G', 'U'];
//
//   function () {
//
// }

var nucleotide = {
  singleCount: function( string, singleNucleotide ) {
    var counter = 0;

    for (var i = string.length - 1; i>= 0; i--) {
      if( string[i] === singleNucleotide ){
        counter += 1;
      }
  }
    return counter;
  },

  count: function( string ) {
    var returnObject = {
      A: this.singleCount( string "A" ),
      C: this.singleCount( string "C" ),
      T: this.singleCount( string "T" ),
      G: this.singleCount( string "G" ),
      U: this.singleCount( string "U" )
    };

    if( this.nucleotidesPresent) {
      return returnObject;
    } else {
    return "No DNA.";
    }
  }
};

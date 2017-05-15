
var arrayToReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var rev1 = function( array ) {
  var output = [];

  for( var i = array.length - 1; i >= 0; i-- ) {
    output.push( array[i] );
  }

  console.log( output );
  return output;
};

// rev1( arrayToReverse );

var rev2 = function( array ){
    var output = [];
    newArray = array.slice();

    for( var i = 0; i < array.length; i++ ){
      var index = array.shift();
      output.unshift( index );
    }

    console.log( output );
    return output;
};

// rev2( arrayToReverse );

var rev3 = function( array ){
  var outputObj = {};
  var counter = array.length;

  for( var i = o; i < array.length; i++){
    outputObj[i] = counter;
  }

  console.log( Object.values( outputObj ) );

};

rev3( arrayToReverse );


var flatten2 = function( array ) {
  var output = [];
  // loop through the array
  for( var i = 0; i < array.length; i++ ) {
    //check if this index is an array
    if( Array.isArray( array[i] ) ){
      for( var j = 0; j < array.length; i++ ) {

      }
    }
  }

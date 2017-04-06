
// The even/odd reporter
// Write in the Odd
  var count = 2;
  while ( count <= 20 ) {
    console.log(count + " is even");
    count = count + 2;
  }


// Multiplication Tables

var loop = function (start, end, step ) {
  for ( var count = start; count <= end; count *= step ) {
    console.log( count);
  }
}

loop( 2, 100, 9 );



// The Grade Assigner

for( var i = 100; i >= 60; i -= 10 ){
  if( i > 90 ){
    console.log( "A" );
  } else if ( i > 80 ){
    console.log( "B" );
  } else if ( i > 70 ){
    console.log( "C" );
  } else if ( i > 60 ){
    console.log( "D" );
  } else  {
    console.log( "Failure." );
  }
}

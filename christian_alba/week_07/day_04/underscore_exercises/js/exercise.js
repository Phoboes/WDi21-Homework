var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// console.log( numbers, people );
// Iterate through numbers and log each number to the console
var countingNum = _.each( numbers, function ( num ) {
    return num;
  });
    // console.log( countingNum );
// Iterate through numbers and multiply each one of them by 5
var multiplyNumbers = _.map( numbers, function ( num ) {
    return num * 5;
} );
    // console.log( multiplyNumbers );
// Iterate through numbers and reduce it by adding them together
var totalValue = _.reduce( multiplyNumbers, function ( sum, num ) {
    // console.log( "Sum: " + sum );
    // console.log( "Num: " + num );

    return sum + num;
}, 0 );
    // console.log( totalValue );
// Get an array of all of the people in people that have the username "E"
    var spotE = _.where( people, { username: "E" } );
    // console.log( spotE );
// Find the first object in people that has the id of 3
    var spotId = _.findWhere( people, { id: 3 } );
    // console.log( spotId );
// Find the first person who has an age of less than 50
    var personLessMiddle =_.filter( age, { age: 50 >
      return age: 50;
    } );
    // Get an array of all of the people with an age of over 60
    var personMoreMiddle ==_.each( age, { age: 60 >
      return age: 60>;
    })

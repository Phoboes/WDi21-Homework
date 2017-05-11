console.log("Hello");

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console

var displayNumber = function ( number ) {
  console.log( number );
};
_.each (numbers, displayNumber);

// Iterate through numbers and multiply each one of them by 5

var multiply = _.map(numbers, function (num) {
  return num * 5;
});

console.log(multiply);
// Iterate through numbers and reduce it by adding them together

var totalNumbers = _.reduce( numbers, function ( total, currentNumber) {
  // console.log(numbers);
  return total + currentNumber;
}, 0);

console.log(totalNumbers);

// Get an array of all of the people in people that have the username "E"

var eUsers = _.where ( people, {username: "E"});
console.log(eUsers);

// Find the first object in people that has the id of 3

var firstUserWithId3 = _.findWhere( people, {id: 3});
console.log(firstUserWithId3);

// Find the first person who has an age of less than 50
var ageLessThan50 = _.findWhere ( people, function (person) {
  return person.age < 50;
});
console.log(ageLessThan50);

// Get an array of all of the people with an age of over 60

var ageOver60 = _.filter ( people, function (person) {
  return person.age > 60;
});
console.log(ageOver60);


// Remove all of the people with an age less than 40

var under40 = _.reject ( people, function (person) {
  return person.age > 40;
});
console.log( under40 );

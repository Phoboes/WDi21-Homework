// Exercises: For loops

// console.log("Woop, JS is connected");


// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current
// number is even or odd, and report that to the screen (e.g. "2 is even").
//

for ( var i = 1; i <= 20; i += 1 ) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log( i );
  }
};

// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier
// from 1 to 10 (100 results total).
//
for ( var i = 0; i <= 10; i += 1 ) {
  console.log(i * 9);
};

//Bonus loop
for ( var i = 1; i <= 10; i += 1 ) {
  for ( var j =1; j <= 10; j +=1 ) {
    console.log(i * j);
  }
};

// The Grade Assigner
//
// Check the results of assignGrade function from
// the conditionals exercise for every value from 60
// to 100 - so your log should show "For 89, you got a B.
// For 90, you got an A.", etc.

for ( var i = 60; i <= 100; i += 1) {
    if (i < 70) {
      console.log("For " + i + " you got a D");
    } else if (i < 80) {
      console.log("For " + i + " you got a C");
    } else if (i < 90) {
      console.log("For " + i + " you got a B");
    } else if (i <= 100) {
      console.log("For " + i + " you got an A!!");
    }
}

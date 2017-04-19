// Exercises: For loops

// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

  for (var i = 0; i <= 20; i += 1) {
    if ( i % 2 === 0 || i === 0 ) {
      console.log( i + " is even." );
    } else {
      console.log( i + " is odd.");
    }
  }

// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

  for (var i = 0; i <= 10; i += 1) {
      for (var num = 1; num <= 10; num += 1) {
        var multiply = i * num;
        console.log(num + " * " + i + " = " + multiply );
      }
  };

// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var assignGrade = function () {
  for (var grade = 60; grade <= 100; grade += 1) {
    if ( grade >= 90 ) {
      console.log("For " + grade + " You received an A! :D");
    } else if ( grade >= 80 ) {
      console.log("For " + grade + " You received a B :)" );
    } else if ( grade >= 70 ) {
      console.log("For " + grade + " You received a C :|" );
    } else if ( grade >= 60 ) {
      console.log("For " + grade + " You received a D :/" );
    } else {
      console.log("We don't currently have a grade for you.");
    }
  }
};

assignGrade();

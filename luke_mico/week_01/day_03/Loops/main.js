// The even/odd reporter
 // Write a for loop that will iterate from 0 to 20.

var i = 0;

// Write a for loop that will iterate from 0 to 20.
for (var i = 0; i <= 20; i++ ) {
  // For each iteration, it will check if the current number is even or odd,
  if (i % 2 === 0) {
  // and report that to the screen (e.g. "2 is even").
    console.log(i + ' is even');
} else {
    console.log(i + ' is odd');
  }
}


// Multiplication Tables
// Write a for loop that will iterate from 0 to 10.
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
// For each iteration of the for loop, it will multiply the number by 9
var result = multiplier * i;
    // and log the result (e.g. "2 * 9 = 18").
    console.log(multiplier + ' * ' + i + ' = ' + result);
  }
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// The Grade Assigner
  // Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100
  // so your log should show "For 89, you got a B. For 90, you got an A.", etc.

// Write a function that returns an If/else statement based on grades
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 80; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}








// The even/odd reporter
 // Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

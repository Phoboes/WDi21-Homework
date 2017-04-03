// The even/odd reporter
// Write a for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for ( var i = 0; i <= 20; i ++ ) { // Write a for loop that will iterate from 0 to 20.
  // Start needs to 0, End needs to be 20, Step needs to increment to either increase i by odd or even values.
  if ( i % 2 === 0 ) { //For each iteration, it will check if the current number is even or odd,
  console.log( i + " is even "); // and report that to the screen (e.g. "2 is even").
}
  else ( //For each iteration, it will check if the current number is even or odd,
  console.log( i + " is odd " ) // and report that to the screen (e.g. "1 is odd")
}



// Multiplication tables
// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
var multiplier = 9;
for (var i = 0; i <= 10; i++) { // Write a for loop that will iterate from 0 to 10.
    var result = multiplier * i; // For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
    console.log(multiplier + ' * ' + i + ' = ' + result); // and log the result (e.g. "2 * 9 = 18").
}

// Bonus - need to work through nexted loops at later stage.




// // The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 -
// so your log should show "For 89, you got a B. For 90, you got an A.", etc.

function assignGrade(score) { // Write a function for assignGrade to return a score for Assignment grades.
    if (score > 90) { // If the score is 90 or greater, the console.log will return 'A'.
        return 'A'; // If an input score is 90 or great, the return will display 'A'when the function is called.
    } else if (score > 80) { // If the score is 90 or greater, the console.log will return 'B' when the function is called.
        return 'B';
    } else if (score > 70) { // If the score is 90 or greater, the console.log will return 'C' when the function is called.
        return 'C';
    } else if (score > 65) { // If the score is 90 or greater, the console.log will return 'D' when the function is called.
        return 'D';
    } else {
        return 'F'; // If the score is any other result, the console.log will return 'F' when the function is called.
    }
}

for ( var i = 60; i <= 100; i++ ) { //
  console.log('For ' + i + ', you got a ' + ' score ' ); // I've included a log, but can't seem to get the individual result. I think I may have missed a value...
}

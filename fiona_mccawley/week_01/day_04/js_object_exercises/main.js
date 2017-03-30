// console.log("Boooooom tish");

// Exercises: Objects
//
// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite
// recipe. It should have properties for title (a string),
// servings (a number), and ingredients (an array of strings).
//
var faveRecipe = {
  title: "Mole",
  serves: 2,
  ingredients: [
    "cinnamon",
    "cumin",
    "cocoa"
  ]
};

// On separate lines (one console.log statement for each),
// log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

console.log(faveRecipe.title);
console.log(faveRecipe.serves);
console.log("ingredients:");
console.log(faveRecipe.ingredients[0]);
console.log(faveRecipe.ingredients[1]);
console.log(faveRecipe.ingredients[2]);



// The Reading List
//
// Keep track of which books you read and
// which books you want to read!
//
// Create an array of objects,
// where each object describes a book and has properties
// for the title (a string),
// author (a string),
// and alreadyRead (a boolean indicating if you read it yet).
var myBooks = [
  { title: "Sarah", author: "JT Leroy", read: true },
  { title: "About Grace", author: "Anthony Doerr", read: false },
  { title: "Invisible Monsters", author: "Chuck Palahniuk", read: true },
  { title: "Norwegian Wood", author: "Haruki Murakami", read: true },
  { title: "American Gods", author: "Neil Gaiman", read: false }
];

// Iterate through the array of books.
// For each book,
// log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
  for (var i = 0; i < myBooks.length; i += 1) {
    var book = myBooks[i];
    var title = book.title;
    var author = book.author;
    // Now use an if/else statement
    // to change the output depending on whether you read it yet or not.
    // If you read it, log a string like 'You already read
    // "The Hobbit" by J.R.R. Tolkien',
    // and if not, log a string like 'You still need to read
    // "The Lord of the Rings" by J.R.R. Tolkien.'
    if ( book.read === true ) {
      console.log("You already read " + title + " by " + author);
    } else {
      console.log("You still need to read " + title + " by " + author);
    }
  };

// The Movie Database
//
// It's like IMDB, but much much smaller!
//
//   Create an object to store the following information about your favorite movie:
//   title (a string), duration (a number), and stars (an array of strings).
//
var faveMovie = {
  title: "Clerks",
  duration: 92,
  stars: [
    "Kevin Smith ",
    "Jason Mewes ",
    "Brian O'Halloran ",
    "Jeff Anderson"
  ]
};
// Create a function to print out the movie information like so:
//  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
var movieInfo = function () {
  var movieTitle = faveMovie.title;
  var duration = faveMovie.duration;
  var stars = faveMovie.stars;
  console.log(movieTitle + " lasts for " + duration + " minutes. " + "Stars: " + stars.join(''));
};
movieInfo();

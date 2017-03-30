// Exercises: Objects
//
// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
  title: "mole",
  servings: 2,
  ingredients: [
    "cinnamon",
    "cumin",
    "cocoa"
  ]
};

var title = recipe.title;
  console.log("title:", title);

var servings = recipe.servings;
  console.log("servings:", servings);

var ingredients = recipe.ingredients;
console.log("ingredients:"); // Print heading ingredients separately from the list of ingredients

for (var i = 0; i < ingredients.length; i++) { // show array on separate lines - use for loop starting at index ingredients; finishing at last item of ingredients; increasing by 1 ingredient
  var ingredientsList = ingredients[i];
  console.log(ingredientsList);
};



// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


var bookOne = { // Object
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  read: true
};

var bookTwo = { // Object
  title: "Moby-Dick",
  author: "Herman Melville",
  read: false
};

var bookThree = { // Object
  title: "Pride and Prejudice",
  author: "Jane Austen",
  read: true
};

var bookFour = { // Object
  title: "Madame Bovary",
  author: "Gustave Flaubert",
  read: false
};

var infoBookOne = (bookOne.title + " by " + bookOne.author); // logs info of book description for each object
var infoBookTwo = (bookTwo.title + " by " + bookTwo.author);
var infoBookThree = (bookThree.title + " by " + bookThree.author);
var infoBookFour = (bookFour.title + " by " + bookFour.author);

var objects = [ // An Array of Objects using logged info above
  infoBookOne,
  infoBookTwo,
  infoBookThree,
  infoBookFour
];

for (var i = 0; i < objects.length; i++) { // Loop to iterate each line per book using logged info above
  var library = objects[i]
  console.log(library);
}

// TEST
// if (bookFour.read === true) {
//   console.log("You already read " + infoBookFour);
// } else {
//   console.log("You still need to read " + infoBookFour);
// }

var readBookOne = bookOne.read;
var readBookTwo = bookTwo.read;
var readBookThree = bookThree.read;
var readBookFour = bookFour.read;

var objectsTwo = [ // An Array of Objects using logged read status above
  readBookOne,
  readBookTwo,
  readBookThree,
  readBookFour
];

for (var i = 0; i < objectsTwo.length; i++) { // Loop to iterate each line per book using logged info above
  var readList = objectsTwo[i]

  if (objectsTwo[i] === true) { // if else statement to print if book has been read
    console.log("You already read " + objects[i]);
  } else {
    console.log("You still need to read " + objects[i]);
  }
}


// The Movie Database

// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: [
    "Puff",
    "Jackie",
    "Living Sneezes"
  ]
}

// console.log(favMovie.title + " lasts " + favMovie.duration + " minutes. Stars: " + favMovie.stars);

var infoMovie = function (movieTile, movieDuration, movieStars) {
  console.log(movieTile + " lasts " + movieDuration + " minutes. Stars: " + movieStars);
}

var movieTile = favMovie.title;
var movieDuration = favMovie.duration;
var movieStars = favMovie.stars; ///// QUESTION: why does this not print with spaces between each star? //////

infoMovie(movieTile, movieDuration, movieStars);

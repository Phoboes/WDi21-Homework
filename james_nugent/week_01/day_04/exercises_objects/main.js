// Exercises: Objects
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

var favouriteRecipe = {
  title: "Mole",
  servings: 2,
  ingredients: [ "cinnamon", "cumin", "cocoa"]
};
console.log(favouriteRecipe.title);
console.log("Serves: ", favouriteRecipe.servings);
console.log("Ingredients: ");
console.log(favouriteRecipe.ingredients[0]);
console.log(favouriteRecipe.ingredients[1]);
console.log(favouriteRecipe.ingredients[2]);

// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var arrayOfBooks = [
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  {
    title: "Outliers",
    author: "Malcolm Gladwell",
    alreadyRead: true
  },
  {
    title: "The Rise Of Robots",
    author: "Martin Ford",
    alreadyRead: false
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    alreadyRead: true
  },
  {
    title: "Julius Caesar",
    author: "William Shakespeare",
    alreadyRead: true
  }
];

for (var i = 0; i < arrayOfBooks.length; i += 1) {
  var description = arrayOfBooks[ i ];

  if (description.alreadyRead === true) {
    console.log("You already read '" + description.title + "' by " + description.author);
  } else {
    console.log("You still need to read '" + description.title + "' by " + description.author);
  }
}

// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
  title: "Pineapple Express",
  duration: 117,
  stars: [" Seth Rogen", " James Franco", " Danny McBride"]
};

var whatMovie = function() {
  console.log(favMovie.title + " lasts for " + favMovie.duration + " minutes. Stars" + favMovie.stars +  ".");
};

whatMovie();

//

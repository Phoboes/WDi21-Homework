console.log("Loaded");

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
    title: "Pizza",
    ingredients: ["Pepperoni", "Capsicum", "Cheese", "Tomatoes"],
    servings: 5

}

var menu = recipe.title;
var ingredients = recipe.ingredients;
var servings = recipe.servings;

stringOutput = menu + "\nServes: " + servings + "\nIngredients: " + ingredients;


console.log(stringOutput);






// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

//



var readingList = [
  { title: "Macbeth", author: "William Shakespear", alreadyRead: true },
  { title: "Alice in wonderland", author: "Lewis Carol", alreadyRead:false },
  { title: "My Life", author: "Bijay Panthi", alreadyRead: false },
  { title: "Macbeth1", author: "William Shakespear", alreadyRead: true },
  { title: "wonderland", author: "Lewis-Carol", alreadyRead:false },
  { title: "My Life", author: "Bijay Panthi", alreadyRead: false },
];

for (var i = 0; i < readingList.length; i++ )
{

  if (readingList[i].alreadyRead === true){
    console.log("You already read " + readingList[i].title +" by " + readingList[i].author);
  } else {
    console.log("You still need to read " + readingList[i].title +" by " + readingList[i].author );
  }
}



// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favouriteMovie = {
    title: "Fast and Furious 7",
    duration: 450,
    stars:["The Rock", "Vin Diesel", "Not Me", "And will Never Be"]
}

var printMovieDetails = function()
{
  var movieDetails = favouriteMovie.title + " last for " + favouriteMovie.duration + ". Stars: " + favouriteMovie.stars;
  return movieDetails;
}
console.log(printMovieDetails());

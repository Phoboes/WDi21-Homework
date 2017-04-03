// Exercises: Objects

// The Recipe Card
// Never forget another recipe!

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


// Create an object to hold information on your favorite recipe.
var recipe = { // It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
  title: "Cinnamon Cake", // It should have properties for title (a string),
  servings: "4", // It should have properties for servings (a number),
  ingredients: [ // It should have properties for ingredients (an array of strings).
    "Cinnamon",
    "Cumin",
    'Cocoa'
  ]
};

console.log(recipe.title) // On separate lines (one console.log statement for each), log the recipe information so it looks like:
console.log( "Serves" + recipe.servings ) // On separate lines (one console.log statement for each), log the recipe information so it looks like:
console.log(recipe.ingredients) // On separate lines (one console.log statement for each), log the recipe information so it looks like:




// The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


// Create an array of objects,
var books = [
  { title: 'One Hundred Years Of Solititude', // Create an array of objects (book properties),
    author: 'Gabriel Garcia Marquez'
    alreadyRead: false // boolean true or false confirms status of books read or not.
  }, title: 'Middlemarch', // Create an array of objects (book properties),
    author: 'George Eliot'
    alreadyRead: true // boolean true or false confirms status of books read or not.
  }, title: 'Lolita', // Create an array of objects (book properties),
    author: 'Vladmir Nabokov'
    alreadyRead: false // boolean true or false confirms status of books read or not.
}];

for (var i = 0, tbc, tbc) // Iterate through the array of books. I'm having trouble working through End and Step for this.
var book = books(i);
var bookDetails = book.title + ' by ' book.author; // For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
if (book.alreadyRead)   { // Now use an if/else statement to change the output depending on whether you read it yet or not.
  console.log('You already "' + bookDetails); //If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
  else  {
    console.log('You still need to read "' + bookDetails) //and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
  }
}




// // The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movie = { // Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
  title: 'Puff the Magic Dragon', // title (a string),
  duration: 58, //duration (a number),
  stars: [ // and stars (an array of strings).
    'Jackie Chan',
    'Puffy',
    'Snoopy'
  ]
};

function movieInfo(movie) { // Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
  console.log(movie.title + ' lasts for ' movie.duration + ' minutes. ' + ' Stars: ' movie.stars )); // I'm getting a Syntax error for Line 88. Missing ) which i'm not sure what is going wrong...
}































//
// // console.log ("test");// //
// // var movie = {
// //     title: "Satantango",
// // //     director: "Bela Tarr",
// // //     duration: 432
// // };
// //
// // undefined
// // movie
// // Object {title: "Satantango", director: "Bela Tarr", duration: 432}
// // movie.title
// // "Satantango"
// // // movie.duration
// // // 432
// // // movie.director
// // // "Bela Tarr"
// //
// // var emptyObject = {};
// //
// // var movie = {
// //   title: "Satantango",
// //   director: "Bela Tarr",
// //   duration: 432
// // };
// //
// // console.log( movie );
// // //
// // // var title = movie.title;
// // // var director = movie.director;
// // // var duration = movie.duration;
// // // //
// // //
// // // // Reassigning values
// // // var movie = {
// // //   title: "Satantango",
// // //   director: "Bela Tarr",
// // //   duration: 432
// // // };
// //
// // // movie.name = 'SATANTANGO',
// // // movie["title"] = "SATANTANGO!";
// // //
// // // console.log(movie.name);
// //
// // // Adding Values
// // // movie.language = "Hungarian";
// // // movie.parts = 12;
// // // // console.log(movie);
// // //
// // // // Destroying Properties
// // // var bestCamera = {
// // //   brand: "Leica",
// // //   model: "M3",
// // // //   memoryCard: "SD",
// // // // };
// // // //
// // // // console.log(bestCamera);
// // // // delete bestCamera.memoryCard;
// // // // console.log(bestCamera);
// // //
// // // var bookSeries = {
// // //     name: "In Search of Lost Time",
// // //     author: "Marcel Proust",
// // //     books: [
// // //         "Swann's Way",
// // //         "In the Shadow of Young Girls in Flower",
// // //         "The Guermantes Way",
// // //         "Sodom and Gomorrah",
// // //         "The Prisoner",
// // //         "The Fugitive",
// // //         "Time Regained"
// // //     ]
// // // };
// // //
// // // var seriesTitle = bookSeries.name;
// // // var author = bookSeries.author;
// // // var books = bookSeries.books;
// // //
// // // var firstBook = bookSeries.books[0];
// // // var lastBook = book = bookSeries.books[bookSeries.books.length - 1];
// // // console.log(lastBook);
// // //
// // // for ( var index = 0; index < bookSeries.books.length;
// // //   index += 1 ) {
// // //     console.log(index);
// // //   }
// // //
// // // var currentBook = bookSeries.books[index];
// // //   console.log(currentBook);
// // //
// // // var explorer = {
// // //   firstName: "Jacques",
// // //   lastName: "Cousteau",
// // //   birth: {
// // //     day: 11,
// // //     month: 6,
// // //     year: 1910,
// // //   }
// // // };
// // //
// // // // console.log(explorer);
// // //
// // // var fullName = explorer.firstName + " " + explorer.lastName;
// // //
// // // console.log(fullName);
// // //
// // // var birthYear = explorer.birth.year;
// // // console.log(birthYear);
// // //
// // // var marxFamily = [
// // //   { name: "Groucho", year: 1890 },
// // //   { name: "Harpo", year: 1888 },
// // //   { name: "Chico", year: 1887 },
// // //   { name: "Zeppo", year: 1901 },
// // //   { name: "Gummo", year: 1893 }
// // //  ];
// // //
// // // // "Groucho Marx was born in 1890"
// // // // "Harpo Marx was born 1888"
// // //
// // // // I need to loop through the marxFamily
// // //   // For each iteration of the loop
// // //     // I want to create a brother variable
// // //     // I want to access the name and the year
// // //       // I want to output some string with that date
// // //
// // // for ( i = 0; i < marxFamily.length; i += 1 ) {
// // //   var brother = marxFamily[i];
// // //   var name = brother.name; // marxFamily[i].name
// // //   var birthYear = brother.year;
// // //   var msg = name + " Marx was born in " + birthYear;
// // //   console.log(msg);
// // // }
// //
// // // Loops in JS Objects
// //
// // var movie = {
// //     title: "Satantango",
// //     director: "Bela Tarr",
// //     duration: 432
// // };
// //
// // movie.title;
// // movie["title"];
// // movie[titleKey];
// // movie.titleKey; // ==> undefined
// //
// // var arrayOfKeys = Object.keys(movie);
// //   for (var i = o, i < arrayOfKeys.length; i += 1 ) {
// //       var currentKey = arrayOfKeys[i];
// //       var currentValue = movie[currentKey];
// //       var msg = "The key is " + currentKey;
// //       msg += " and the value is " + currentValue;
// //       // console.log(i, currentKey, currentValue);
// //       console.log(i, arrayOfKeys);
// //   }
// //
// // The key ---- and the value is
// //
// // for ( var gobbledygook in movie ) {
// //     console.log( currentKey);
// //     msg += " Value: " + movie[currentKey];
// //     console.log(msg);
// // }
// //
// // console.clear();
// //
// // var explorer = {
// //     firstName: "Jacques",
// //     lastName: "Cousteau",
// //     displayPurpose: function () {
// //       alert("Hello World");
// //     }
// // };
// //
// // travel: function()  {
// //     console.log("I am going somewhere");
// // },
// //
// // sayHi: function ()  {
// //
// //
// //
// //
// // }
// //
// // More cmplicated methods
// //
// //   var explorer = {
// //       firstName: "Jacques",
// //       lastName: "Cousteau",
// //       occupation: "Explorer",
// //       status: "Legendary",
// //       displayFullName: function ()  {
// //         var fullName = this.firstName + " " +
// //         this.lastName;
// //         return fullName;
// //           // console.log(fullName);
// //       },
// //       displayOccupation: function ()  {
// //         // I am a legendary explorer
// //         var msg = "I am a " + this.status + " " +
// //         explorer.occupation;
// //         return occupation;
// //         // console.log(msg);
// //       },
// //       introduce: function () {
// //         var fullName = this.displayFullName();
// //         console.log(fullName, explorer.occupation);
// //         // Hi there, I am Jacques Cousteau. I am a Legendary Explorer.
// //         // Use the method we have already created.
// //           var msg = "Hi there," + fullName; msg +=  ". " + occupation;
// //             console.log(msg);
// //       }
// //     };
// //
// // this.introduce();

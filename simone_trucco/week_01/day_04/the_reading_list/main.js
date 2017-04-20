///////////////////////////////////////////////////////////////////////////////
// The Reading List
// Exercise Link: https://gist.github.com/ga-wolf/10181616b156eee0ea2303ba08e3f075#exercises-objects
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and
  //has properties for the title (a string),
  //author (a string),
  //and alreadyRead (a boolean indicating if you read it yet).

  var favBooks = [
      { title: "The Song of Achilles", author: "Madeline Miller", alreadyRead: true },
      { title: "Beautiful Creatures", author: "Kami Garcia", alreadyRead: true },
      { title: "Not My Fater's Son", author: "Alan Cummings", alreadyRead: false },
      { title: "The Den of Shadows", author: "Amelia Atwater-Rhodes", alreadyRead: false }
  ];

// Iterate through the array of books.
//For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
//If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
// and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

for ( i = 0; i < favBooks.length; i += 1 ) {
  var book = favBooks [ i ];
  var title = book.title;
  var author = book.author;
  var readOrNot = function () {
    if (book.alreadyRead === true) {
      console.log("You already read " + title + " by " + author + ".");
    } else {
      console.log("You still need to read " + title + " by " + author + ".");
    }
  }
}
readOrNot();
// check these values again... keep on assigning value 4 to the whole loop/function....
// debugged but can't seem to find the reason why...
// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var libraryOfBooks = [
  { title: "The Hobbit",
    author: "J.R.R Tolkien",
    alreadyRead: true },
  { title: "Harry Potter",
    author: "J.K Rowling",
    alreadyRead: true},
  { title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true },
  { title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    alreadyRead: false }
];

for ( var i = 0; i < libraryOfBooks.length; i++) {
  var book = libraryOfBooks[i];
  var title = book.title;
  var author = book.author;
<<<<<<< HEAD
  var msg = title + " by " + author + ".";
  console.log(msg);
};

//if already read is true og a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
=======
  //var msg = title + " by " + author + ".";
  //console.log(msg)

//if already read is true of a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
>>>>>>> b5fbf3809b5d48d640fea165fe5cd66c27c83178
// else log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
if ( book.alreadyRead === true) {
  console.log( "You already read " + title + " by " + author + "." );
} else {
  console.log( "You still need to read " + title + " by " + author + "." );
};
<<<<<<< HEAD
=======

};
>>>>>>> b5fbf3809b5d48d640fea165fe5cd66c27c83178

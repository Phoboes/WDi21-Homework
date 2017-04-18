var books = [ // ARRAY OF TWO OBJECTS
  { // OBJECT
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  { // OBJECT
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

  // Loop
    // var objectOne = books[0];
    // console.log(objectOne);
    // var objectTwo = books[1];
    // console.log(objectTwo);


  for (var i = 0; i < books.length; i++) {
    var object = books[i];
    var bookTitle = books[i].title;
    var bookAuthor = books[i].author;
    var bookRead = books[i].alreadyRead;

    var bookInfo = bookTitle + " by " + bookAuthor;
    // console.log(bookInfo);

  // Creates the elements
    var newParagraph = document.createElement("p"); // create new <p> tag
    var paragraphText = document.createTextNode(bookInfo); // insert bookInfo within the <p> tag

  // Puts elements on the page
    // newParagraph.appendChild(paragraphText);
    // document.body.appendChild(newParagraph);


// Bonus: Use a ul and li to display the books.
  ///// DON'T KNOW HOW TO ADD A UL WITH LI WITHIN IT? ONLY ABLE TO ADD THEM SEPARATELY

    var newUnorderedList = document.createElement("ul");
    var newUnorderedListText = document.createTextNode(bookInfo);

    newUnorderedList.appendChild(newUnorderedListText);
    document.body.appendChild(newUnorderedList);

// Creating DOM Nodes
  // Create, Manipulate, Inject

  var listItem = document.createElement("li");
  listItem.innerHTML = "Title: " + bookTitle;
  document.body.appendChild(listItem);

  var listItem2 = document.createElement("li");
  listItem2.innerHTML = "Author: " + bookAuthor;
  document.body.appendChild(listItem2);

  var listItem3 = document.createElement("li");
  listItem3.innerHTML = "Aready Read: " + bookRead;
  document.body.appendChild(listItem3);

// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.


// Bonus: Change the style of the book depending on whether you have read it or not.
if (bookRead === true) {
  // console.log(bookTitle); // Tested if statement to check if it works but then got lost
  var changeStyle = document.getElementsByTagName('li');
  changeStyle.style.color = "pink";
  changeStyle.style.fontStyle = "oblique";
}


}

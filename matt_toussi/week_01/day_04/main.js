console.log("-------------------------------------------------------")
console.log("The Recipe Card")
console.log("-------------------------------------------------------")
// ////////The Recipe Card////
var recipe = {
  title: "Guacamole Recipe",
  servings: 3,
  ingredients: [
    "* 2 Avocados",
    "* 1 tomamto",
    "* 1/2 of red onion",
    "* 3 red chilli",
    "* 2 teaspoon lime juice",
    "* 2 garlic",
    "* 1 teaspoon Black pepper",
    "* 1 teaspoon salt",
  ]
};
console.log(recipe.title);
console.log("servings: " + recipe.servings + " People");
console.log("ingredients:");
for (var i = 0; i < recipe.ingredients.length; i++) {
console.log(recipe.ingredients[i] );
}

console.log("-------------------------------------------------------")
console.log("The Reading List")
console.log("-------------------------------------------------------")

////The Reading List////
var books = [
  {title: 'Rich Dad , Poor Dad',
   author: 'Robert. kiosaki',
   alreadyRead: true
  },
  {title: 'The Game',
   author: 'Neil. Strauss',
   alreadyRead: false
  },
  {title: 'The Lean Startup',
  author: 'Eric. Ries',
  alreadyRead: true
  }];
for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookTag = book.title + " by " + book.author;
  if (book.alreadyRead) {
    console.log( "You already read " + bookTag);
  } else {
    console.log( "You still need to read " + bookTag);
  }
}

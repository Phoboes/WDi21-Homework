// OBJECT EXERCISES

// The recipe card
var recipeCard = {
    title: "Mole",
    servings: 2,
    ingredients: [
        "cinnamon",
        "cumin",
        "cocoa"
    ]
};

console.log(recipeCard.title, "\n", 
                "Serves: ", recipeCard.servings,"\n",
                "Ingredients:", "\n",
                recipeCard.ingredients[0], "\n",
                recipeCard.ingredients[1], "\n",
                recipeCard.ingredients[2]
);


// -----------------------------------------------------

// The reading list

var books = [
    { title: "Clean Code", author: "Robert C. Martin", isRead: false },
    { title: "Pragmatic Programmer", author: "Andy hunt and Dave Thomas", isRead: true },
    { title: "Design Patters", author: "The GoF", isRead: false },
];

for(var i=0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
    console.log(books[i].isRead === true ? 
                            "You already read " + "'" + books[i].title + "'" + 
                            " by " + books[i].author :
                            "You still need to read " + "'" + books[i].title + "'" + 
                            " by " + books[i].author
    );
}

// --------------------------------------------------------

// The Movie Database

var movies = {
    title: "Deadpool",
    duration: 108,
    stars: [
        "Ryan Reynolds",
        "Morena Baccarain",
        "Ed Skrein"
    ] 
};

function printMovies() {
    var title = movies.title;
    var duration = movies.duration;
    console.log(title + " lasts for " + duration + " minutes. Stars: " +
                    movies.stars[0]+ ", " + movies.stars[1] + ", " + 
                    movies.stars[2] + "."
    ); 
}
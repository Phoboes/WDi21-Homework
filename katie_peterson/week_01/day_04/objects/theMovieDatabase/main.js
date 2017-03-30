// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// // Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
//

var favouriteMovie = {
  title: "Inside out",
  duration: 94,
  stars: ["Joy", "sadness", "Riley"]
};

var printFavouriteMovie = function ( movie ) {

    var title = movie.title;
    var duration = movie.duration;
    var stars = movie.stars;

console.log( title + " lasts for " + duration + " minutes. Stars: " + stars.join(", "))

//The join() method joins the elements of an array into a string, and returns the string, seperated by a comma.
};

printFavouriteMovie(favouriteMovie);

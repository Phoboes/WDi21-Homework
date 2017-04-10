///////////////////////////////////////////////////////////////////////////////
// The Movie Database
// Exercise Link: https://gist.github.com/ga-wolf/10181616b156eee0ea2303ba08e3f075#exercises-objects
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie:
  //title (a string),
  //duration (a number),
  //and stars (an array of strings).

var favMovie = {
    mTitle: "The Devil Wears Prada",
    mLenght: 110,
    mCast: [
      "Meryl Streep",
      "Ann Hathaway",
      "Emily Blunt",
      "Stanley Tucci"
    ]
};

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var announceMovie = function () {
  var movieTitle = favMovie.mTitle;
  var movieLenght = favMovie.mLenght;
  var movieStarOne = favMovie.mCast[0];
  var movieStarTwo = favMovie.mCast[1];
  var movieStarThree = favMovie.mCast[2];
  console.log(movieTitle + " lasts for " + movieLenght + " minutes. Stars: " + movieStarOne + " " + movieStarTwo + " " + movieStarThree + ".");
}
announceMovie();

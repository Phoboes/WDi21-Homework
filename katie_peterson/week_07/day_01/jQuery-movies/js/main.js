// Displaying the data from an AJAX request.
  // Using this movie I would like to effect some of the elements on the page

var displayMovie = function (movie) {
  var title = movie.Title;
  var poster = movie.Poster;
  var plot = movie.Plot;

//selecting the elements with their IDs.
//Currently hard coded and then add the user interactions.

  $("img#poster").attr("src", poster);
  $("h2#title").text( title );
  $("p#plot").text( plot );
  $("body").css({
    backgroundImage: "url(" + poster + ")"
  });
};

// Make an AJAX request.
  //What URL or path?
  //What method? GET POST PATCH
  //What datatype?
  //Any parameters?

var searchOMDB = function ( query) {
  console.log( query );
  $.ajax ({
    url: "http://omdbapi.com",
    method: "GET",
    datatype: "JSON",
    data: {
      t: query,
      plot: "full"
    }
  }).done(function ( data ) {
    displayMovie ( data );
  });
};
// searchOMDB(); - delete to make it dynatnic

// Wait until the page has loaded - document.ready
// Add event handlers for submission of the form.

$(document).ready(function () {
  $("form").on('submit', function (event) {
    event.preventDefault();
    var title = $("#search").val()
    searchOMDB(title);
  });
});

// Wait until the pages has been loaded
// Add event handlers for submission of the form


var displayMovie = function ( movie ) {
  var title = movie.Title;
  var poster = movie.Poster;
  var plot = movie.Plot;

  $("img#poster").attr("src", poster );
  $("h2#title").text( title );
  $("p#plot").text( plot );

  $("body").css({
    backgroundImage: "url(" + poster + ")"
  });
};

// Make an AJAX request
  // What URL or path?
  // What method?
  // What am I requesting? (Data Type)
  // Any parameters?

var searchOMDB = function ( query ) {
  console.log( query );
  $.ajax({
    url: "http://omdbapi.com?t=Jaws&plot=full",
    method: "GET",
    dataType: "JSON",
    data: {
      t: query,
      plot: "full"
    } // These are the params (they will be added as a query string to the end
      // of the URL)
  }).done( function (data) {

    displayMovie( data );

  });
};

$(document).ready(function() {

  $("form").on("submit", function ( event ) {
    event.preventDefault();
    var title = $("#search").val();

    searchOMDB( title );
  });
});


// Displaying the data from an AJAX request
// Wait until the page has loaded
// Add event handlers for submission of the form

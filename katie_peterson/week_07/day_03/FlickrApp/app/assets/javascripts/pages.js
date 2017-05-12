// Read these...

// Flickr API Overview: https://www.flickr.com/services/api/misc.overview.html
// flickr.photos.search Overview:  https://www.flickr.com/services/api/flickr.photos.search.html
// Flickr and JSON: https://www.flickr.com/services/api/response.json.html

//Broad overview of my own code

  //We need functions to do a bunch of things:

    //Make a AJAX request to Flickr api
    //Iterate through a large amount of photos
    //Create an image URL using a single photo
    //Display a single photo
    //Handle user inputs

//Set up the important variables
  //UPPER_SNAKE_CASE to illustrate that these variables shouldn't change.
  //Base URLS
  //API keys
  //Important elements
  //Timers
  //Anything that you would like to be global

  var API_KEY = "2f5ac274ecfac5a455f38745704ad084";
  var FLICKR_BASE_URL = "https://api.flickr.com/services/rest";


  var generateImageURL = function ( photo ) {
    // "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg";
    var url = "https://farm" + photo.farm;
    url += ".staticflickr.com/";
    url += photo.server;
    url += "/";
    url += photo.id;
    url += "_";
    url += photo.secret;
    url += ".jpg";

    return url;
  };

  var displayPhoto = function ( photo ) {
    var url = generateImageURL( photo );

    var $newImg = $("<img>");
    $newImg.attr( "src", url );
    $newImg.appendTo( ".results" );
  };

  var handleSearchData = function ( photos ) {
    for ( var i = 0; i < photos.length; i += 1 ) {
      var currentPhoto = photos[i];
      displayPhoto( currentPhoto );
    }
  };

  var searchFlickr = function ( query ) {
    $.ajax({
      url: FLICKR_BASE_URL,
      method: "GET",
      dataType: "JSON",
      data: {
        method: "flickr.photos.search",
        api_key: API_KEY,
        text: query,
        format: "json",
        nojsoncallback: 1,
        pages: "89",
        perpage: "10"
      }
    }).done(function ( response ) {
      var allImages = response.photos.photo;
      handleSearchData( allImages );
    });
  };

  $(document).ready(function () {

    $("form").on("submit", function ( event ) {
      event.preventDefault();
      // Get the current text out of the input with the ID of searchFlickr
      var searchQuery = $("#searchFlickr").val();

      if ( searchQuery.length === 0 ) {
        $("#searchFlickr").css({
          border: "1px solid red"
        });
        alert("You need to type something!");
        return false;
      }

      // Make an AJAX request using that text as the query
      searchFlickr( searchQuery );
    });

  });

// var howFarIHaveScrolled = $(window).scrollTop();
// var browserWindowHeight = $(window).height();
// var entireDocumentHeight = $(document).height();


// HOMEWORK

//STEP ONE

//1. A button for next page (show more images)
  //Parameters: page and per_page

//2. Add some validations to the page
    //Show an error if there are no more photos to display.
    //Only show photos related to the current search.
      //clear div

//3. Infinite scroll
  //Page is 2000px
  //Ajax request for endless scroll
  //When I am 50/100 px away from the bottom make an ajax request.
  // var howFarIHaveScrolled = $(window).scrollTop();
  // var browserWindowHeight = $(window).height();  - height of browser
  // var entireDocumentHeight = $(document).height();  - height of entire webpage
  //If we know the scrolltop is 100, the window height is 300, we need to know where the bottom of the screen is.
    //Bottom = scrollTop + window.height
    //compare bottom of screen to webpage height.
  //$window.on("scroll", function () {...});

//4. Slider or lightbox
  //DON'T CREATE THIS, USE SOMETHING THAT ALREADY EXIST.

//5. Throttling or Debouncing
    //this function can only be called once a second
    //Stop the AJAX function from happening so regularly.

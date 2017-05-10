// Read these...
//
// Flickr API Overview: https://www.flickr.com/services/api/misc.overview.html
// flickr.photos.search Overview:  https://www.flickr.com/services/api/flickr.photos.search.html
// Flickr and JSON: https://www.flickr.com/services/api/response.json.html
//https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=Watermelon+Fail&format=json&nojsoncallback=1
// Broad Overview of my own code
//   We need functions to:
//
//     Make an AJAX request to the Flickr API
//     Iterate through a large amount of photos
//     Create an Image URL using a single photo
//     Display a single photo
//     Handle user inputs

// Set up the important variables
  // UPPER_SNAKE_CASE to illustrate that these variables shouldn't change
  // Base URL's
  // API keys var API_KEY = "3ab66c44737420e50ceaee170f6eb074";
  // Important Elements
  // Timers
  // Anything that you want to be global


var API_KEY = "3ab66c44737420e50ceaee170f6eb074";

var FLICKR_BASE_URL = "https://api.flickr.com/services/rest";


//Boiler plate for working with an image in FLICKR_BASE_URL
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
// When typing out a long url, we can separate it into different lines,like the below

var generateImageUrl = function (photo){
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
  var url = generateImageUrl( photo );
  var $newImg = $("<img>");
  $newImg.addClass("lightbox_trigger")
  $newImg.attr("src", url);
  $newImg.appendTo(".results");
};

var handleSearchData = function ( photos ){
  if ( photos.length < 10 ) {
    var $newPara = $("<p></p>");
    $newPara.text("No more pictures");
    $newPara.appendTo(".error");
  }
  for (var i = 0; i < photos.length; i++) {
    var currentPhoto = photos[i];
    displayPhoto( currentPhoto );
  }
};

var searchFlickr = function (query, perPage){ //removed pageCount argument, so I could do infinite scroll
  $.ajax({
    url: FLICKR_BASE_URL,
    method: "GET",
    dataType: "JSON",
    data: {
      method: "flickr.photos.search",
      api_key: API_KEY,
      text: query,
      format: "json",
      // page: pageCount, // this needs to be dynamic to add a count or minus to go forward/back
      per_page: perPage, // for page scrolling I need to add to this. So needs to be dynamic
      nojsoncallback: 1 // don't pass this into a function, pass it to a .done handler
    }
  }).done(function (response){
    $(".results").html('');
    var allImages = response.photos.photo;
    handleSearchData( allImages );
  });
};

$(document).ready(function(){
  var pageCount = 1;
  $("form").on("submit", function(event){
    event.preventDefault();
    var pageCount = 1;
    query = $("input#searchFlickr").val();
    if(query.length === 0){
      $("#searchFlickr").css({
          border: "1px solid red"
        });
      return false;
    }
    searchFlickr(query);
  });

   // make a variable for page count, and add to it on next page click
  $("#next").on("click", function(){
    pageCount += 1;
    query = $("input#searchFlickr").val();
    searchFlickr(query, pageCount);
  });

  $("#previous").on("click", function(){ // minue from page count on previous page click
    $(".error").html(''); //clear no more picture error message when going back a page
    pageCount -= 1;
    query = $("input#searchFlickr").val();
    searchFlickr(query, pageCount);
  });
  var perPage = 20;
  $(window).on("scroll", function(){
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();
    var bottom = windowHeight + scroll;
    var entireDocHeight = $(document).height();
    var total = entireDocHeight - bottom;
    query = $("input#searchFlickr").val();
    if( total < 1 ) {
      perPage += 20;
      searchFlickr(query, perPage);
    }
    // So if entireDocHeight - bottom = 100 - then run an ajax request to load 20 more pictures
  });

  //lightbox 
  $("img.lightbox_trigger").click(function(event){
    event.preventDefault();
    console.log('image was clicked');
  });

}); ///end of doc.ready

// Homework
  // 1. A button for next page (show more images)
    // Parameters: page and per_page
    // on click +1 to page value, or -1 to go to previous page. - DONE
  // 2. Add some validations to the page
    // SHow an error if there are no more photos to display - DONE
    // Only show photos related to the current search (make sure to only be showing cat images) - DONE

  // 3. Infinite scroll - DONE

    // Make a new ajax request and add more images to the page so it will keep scrolling like endless horse
    // Need to know how far down the page you are, i.e when you are 50px away from the bottom, make an ajax request.
    // We have information how far the top of the browser is and where you are on the page (.scrollTop())
      // $(window).scrollTop();
    // How high the browser is itself .height();
      // $(window).height();
    // How high the document is
      // Height on the document $(document.height();)
    // If we know what the scrolltop is, and the window height is
    // scrolltop = 100;
    // windowheight = 300;
    // bottom of screen = $(window).scrollTop(); + $(window).height();
    // bottom of screen = 400 compare that to the $(document.height()

    // var howFarIHaveScrolled = $(window).scrollTop();

    // var browserWindowHeight = $(window).height();

    // var entireDocHeight = $(document).height();

        // is that within 100 of the bottom of the screen
        // $window.on("scroll", function(){ })

  // 4. Slider (where you click left to right)or a Lightbox (where images comes forward)
    //Don't create this, use something that already exists
  // 5. Throttling or Debouncing
    // Is a way to stop the execution of a function happening regularly.
    // Stop the Ajax function from happening so regularly on scroll

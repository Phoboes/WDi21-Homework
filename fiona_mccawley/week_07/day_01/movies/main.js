console.log("this");
// Everything to do with XML HTTP Request comes back to the readyState
  // 0 - Request has been initialised, but has not been sent ( it is still sitting on the our computer)
  //1 - Server connection has been established (after the handshake)
  //2 - Request has been received by the server, and the server is processing it
  //3 - Processing response in the browser (the server has gien us some data, but we can't work with it yet)
  //4 - REsponse is ready to be worked with

// Make XMLHTTPRequest to OMDB API
  // var request = new XMLHttpRequest();
  //
  // request.onreadystatechange = function (){
  //   console.log( request.readyState);
  //   if (request.readyState < 4 ) {
  //     return false; // we don't want to do anything until we can work with the data
  //   }
  //   var data = request.responseText;
  //   var parsedData = JSON.parse( data );
  //   var title = parsedData["Title"];
  //   var poster = parsedData["Poster"]
  //   console.log(title, poster);
  // };
  //
  // request.open("GET", "http://omdbapi.com/?t=Jaws");
  //
  // request.send();

  var request = new XMLHttpRequest();
  console.log(request.readyState);
  // I need to be able to listen to clicks on the button
  window.onload = function () {
    // console.log("The page is loaded");

    $btn = $("button"); //could use jquery for this
    $btn.on("click", function (){
      $search = $("input.search").val();
      url = "http://omdbapi.com/?t=" + $search;

      request.onreadystatechange = function (){
        console.log( request.readyState );
        if ( request.readyState < 4 ) {
          return false;
        }
        var data = request.responseText;
        var parsedData = JSON.parse( data );
        // I want to get the poster value and add that to the src on an img on the index page
        var poster = parsedData["Poster"];
        $(".poster").attr("src", poster)
        console.log(poster);
      };

      request.open( "GET", url );

      request.send();


    });

  };

  // Find a way to make it dynamic

  // Get the inputs current value


  // Construct a URL using the value
  // http://omdbapi.com/?t=SOMETITLEHERE
  // Make the request
  // Once the data comes back
  // Parse it
    // Represent the movie on the page
    // Try and show the image
      // document.createElement ("img") or use Jquery
      //img.setAttribute( "src", _________ )

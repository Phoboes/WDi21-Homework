// console.log("this");

  var request = new XMLHttpRequest();
  // I need to be able to listen to clicks on the button
  window.onload = function () {
    //saved the class of button as a jquery variable
      $btn = $("button");
      $btn.on("click", function (){
        // Get the value of the input field and save as a variable
      $search = $("input.search").val();
      // Use s for omdb search to get a list of all matches to search keyword
      url = "http://omdbapi.com/?s=" + $search;

      request.onreadystatechange = function (){
        console.log( request.readyState);
        if (request.readyState < 4 ) {
          return false;
        }
        var data = request.responseText;
        var parsedData = JSON.parse( data );
        //save the result which is an object with objects as a variable so I can try loop through
        var search = parsedData["Search"];
        // loop through search so I can get the title, create a list to display
        var each = function ( collection, callback ) {
          for (var i = 0; i < search.length; i += 1) {
            var currentItem = collection [i];
            callback( currentItem );
          }
        };
        each(search, function ( movie ) {
        // console.log(movie["Title"]);
        $(".multiple ul").append('<li>' + movie["Title"] + '</li>');

        });

      };
      request.open("GET", url);

      request.send();
    });

  };





// Below code is to display movie poster, title, plot and release date - working ok
          // $search = $("input.search").val();
    // Use s for omdb search to get a list of all matches to search keyword
          // url = "http://omdbapi.com/?t=" + $search;
      // request.onreadystatechange = function (){
      //   console.log( request.readyState );
      //   if ( request.readyState < 4 ) {
      //     return false;
      //   }
      //   var data = request.responseText;
      //   var parsedData = JSON.parse( data );
      //   // I want to get the poster value and add that to the src on an img on the index page
      //   var poster = parsedData["Poster"];
      //   $(".poster").attr("src", poster);
      //   // Get the title and add that as a heading
      //   var title = parsedData["Title"];
      //   $(".title").html(title );
      //   // Get the plot and add that as a paragraph
      //   var plot = parsedData["Plot"];
      //   $(".plot").html("Plot: " + plot);
      //   var released = parsedData["Released"];
      //   $(".released").html("Release Date: " + released)
      // };
      //
      // request.open( "GET", url );
      //
      // request.send();

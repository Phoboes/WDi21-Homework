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
      //Send XHR request
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
          // $(".multiple ul").append('<li><a href=' + movie["Poster"] + '>' + movie["Title"] + '</a></li>');
          $(".multiple ul").append('<li><a class= "link" href= "#">' + movie["Title"] + '</a></li>');
        });

      };
      request.open("GET", url);

      request.send();
    });
    //on click of movie link, I want to run another xhr request with the movie title to get the details of the poster, release date etc and display like in the first part of the homework, using the code below

    //On click event of the anchor in the div with the multiple class, I want to get the html (movie title), capture that as a variable. Then use that for the second xhr request.
    $(".multiple").on('click', 'a', function (){
      $movieselect = $(this).html();
      console.log($movieselect);
      url = "http://omdbapi.com/?t=" + $movieselect;

      request.onreadystatechange = function (){
        console.log( request.readyState );
        if ( request.readyState < 4 ) {
          return false;
        }
        var data = request.responseText;
        var parsedData = JSON.parse( data );
        // I want to get the poster value and add that to the src on an img on the index page
        var poster = parsedData["Poster"];
        $(".poster").attr("src", poster);
        // Get the title and add that as a heading
        var title = parsedData["Title"];
        $(".title").html(title );
        // Get the plot and add that as a paragraph
        var plot = parsedData["Plot"];
        $(".plot").html("Plot: " + plot);
        var released = parsedData["Released"];
        $(".released").html("Release Date: " + released);
      };

      request.open( "GET", url );

      request.send();

      });
  };



// Below code is to display movie poster, title, plot and release date after searching - working ok
          // $search = $("input.search").val();
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

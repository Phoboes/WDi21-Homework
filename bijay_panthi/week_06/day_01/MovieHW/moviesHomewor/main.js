
window.onload = function(){
  var btn = document.querySelector("button");
  btn.addEventListener("click", function(){
    var textToSearch = document.getElementById("searchText").value;
    var textUrl = "http://omdbapi.com/?t=" + textToSearch;
    console.log(textUrl);
    var request = new XMLHttpRequest();
    request.open("GET", textUrl)
    console.log( request.readyState);
    request.send();
    request.onreadystatechange = function(){
      if(request.readyState !== 4){
        return false;
      }
      var data = request.responseText;
      var parseData = JSON.parse( data );
      var directorsName = document.getElementById("results");
      directorsName.innerHTML = "Director " + parseData["Director"];
      var posterImage = document.getElementById("img");
      posterImage.src = parseData["Poster"];
      var plot = document.getElementById("plot");
      plot.innerHTML = parseData["Plot"];

    };
  });
};

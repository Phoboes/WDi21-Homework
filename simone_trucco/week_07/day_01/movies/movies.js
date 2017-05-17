var request = new XMLHttpRequest();
  // console.log(request.readyState);

request.onreadystatechange = function () {
    console.log(request.readyState);
  if (request.readyState < 4) {
    return false;
  }

  window.onload = function () {
    var btn = document.querySelector("button");

    btn.addEventListener("click", function() {

    });
  };

};

request.open("GET", "http://omdbapi.com/?t=Jaws");
request.send();


// var data = request.responseText;
// var parsedData = JSON.parse( data );
//
// var title = parsedData["Title"];
// console.log(title);

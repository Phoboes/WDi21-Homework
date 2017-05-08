var request = new XMLHttpRequest();
  // console.log(request.readyState);

request.onreadystatechange = function () {
    console.log(request.readyState);
  if (request.readyState < 4) {
    return false;
  }

  var data = request.responseText;
  var parsedData = JSON.parse( data );

  var title = parsedData["Title"];
  console.log(title);
};

request.open("GET", "http://omdbapi.com/?t=Jaws");
request.send();

window.onload = function () {
  var btn = document.querySelector("button");
};

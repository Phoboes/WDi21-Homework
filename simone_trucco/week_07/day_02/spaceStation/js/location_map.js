var ISS_URL = "http://api.open-notify.org/iss-now.json";
var ISS_METHOD = "GET";
var ISS_DATA_TYPE = "JSONP";

var MAP_URL = "url";
var MAP_METHOD = "GET";
var MAP_DATA_TYPE = "JSON;";
var API_KEY = 023343423;

var displayPosition = function (data) {

  var lat = data.iss_position.latitude;
  var lon = data.iss_position.longitude;

  $(".latitude").text( lat );
  $(".longitude").text( lon );

//   var lat = data.iss_position.latitude;
//   var lon = data.iss_position.longitude;
//   var currentPosition = lat + lon;
//   var $newPosition = $("<p></p>");
//   $newPosition.text(currentPosition);
//   $newposition.appendTo( ".position" );
};

var issPosition = function (){
    $.ajax ({
      url: ISS_URL,
      method: ISS_METHOD,
      dataType: ISS_DATA_TYPE
  }).done(displayPosition);
};
issPosition();

$(document).ready(function () {
  issPosition();

  var ISS_POSITION = window.setInterval(function () {
    issPosition();
  }, 3000);
});

var issGeolocation = function () {
    $.ajax ({
      url: MAP_URL,
      method: MAP_METHOD,
      dataType: MAP_DATA_TYPE,
      data: {
        api_key: "key",
        latitude: "lat",
        longitude: "lon"
      }
    });
};

  // HOW DO I APPEND ONE LOCATION AFTER ANOTHER?!?!?!?!

  // $(".stop button").on("click", function () {
  //   window.clearInterval( CHUCK_TIMER );
  // });

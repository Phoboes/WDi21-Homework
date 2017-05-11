var LOCATION_BASE_URL = "http://api.open-notify.org/iss-now.json";
var LOCATION_HTTP_METHOD = "GET";
var LOCATION_DATA_TYPE = "JSONP";

//Displaying the location of ISS
var displayLocation = function(data){
    var lat = data.iss_position["latitude"];
    var long = data.iss_position["longitude"];

    $(".latitude").text(lat);
    $(".longitude").text(long);
};

var locationOfIss = function(){
  $.ajax({
    url: LOCATION_BASE_URL,
    method: LOCATION_HTTP_METHOD,
    dataType: LOCATION_DATA_TYPE
  }).done(displayLocation);
};
locationOfIss();

$(document).ready(function(){
  loactionOfIss();
  window.setInterval( function () {
    locationOfIss();
  }, 2000);
});

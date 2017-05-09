var LOCATION_BASE_URL = "http://api.open-notify.org/iss-now.json";
var LOCATION_HTTP_METHOD = "GET";
var LOCATION_DATA_TYPE = "JSON";

//Displaying the location of ISS
var displayLocation = function(data){
    var lat = data.latitude;
    var long = data.longitude;

    $(".latitude").text(lat);
    $(".longitude").text(long);
};

var locationOfIss = function(){
  $.ajax({
    url: "http://api.open-notify.org/iss-now.json",
    method: "GET",
    dataType: "JSONP",
  }).done(function (data) {
    console.log( data );
  });
};

$(document).ready(function(){
  $(".location button").on("click", function(){
    locationOfIss();
  });
});

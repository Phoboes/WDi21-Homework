var LOCATION_URL = "http://api.open-notify.org/iss-now.json";
var LOCATION_METHOD = "GET";
var LOCATION_TYPE = "JSON";

var displayLocationInfo = function ( data ) {
  var currentTime = data.timestamp;

  var currentPosition = data.iss_position;
  var latitude = currentPosition.latitude;
  var longitude = currentPosition.longitude;

  $(".timestamp").text(currentTime);
  $(".latitude").text(latitude);
  $(".longitude").text(longitude);
};

var getLocationInformation = function () {

  $.ajax({
    url: LOCATION_URL,
    method: LOCATION_METHOD,
    dataType: LOCATION_TYPE,
  }).done(displayLocationInfo);

};

$(document).ready(function () {
  getLocationInformation();

  var LOCATION_TIMER = window.setInterval(function () {
    getLocationInformation(); // calls 3 seconds after page loads
  }, 3000);
});


/// how to feed through dynamic data from above?
var initMap = function () {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};

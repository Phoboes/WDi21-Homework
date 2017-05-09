var LOCATION_URL = "http://api.open-notify.org/iss-now.json";
var LOCATION_METHOD = "GET";
var LOCATION_DATA_TYPE = "JSONP";


var displayPosition = function (data){
  var long = data.iss_position["longitude"];
  var lat = data.iss_position["latitude"];
  $(".longitude").text( long );
  $(".latitude").text( lat );

};

var issPosition = function (){
  $.ajax({
    url: LOCATION_URL,
    method: LOCATION_METHOD,
    dataType: LOCATION_DATA_TYPE
  }).done(displayPosition);
};
issPosition();

$(document).ready(function(){
  issPosition();
  window.setInterval( function (){
    issPosition();
  }, 3000);
});

////////Google maps

// var initMap = function() {
//   var uluru = {lat: long, lng: lat};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// };
// initMap();

// var mapOptions = {
//   center: new google.maps.LatLng(lat, long),
//   mapTypeId: google.maps.mapTypeId.ROADMAP
// };
// map = new google.maps.Map($("#map"), mapOptions);

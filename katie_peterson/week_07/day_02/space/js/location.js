var LOCATION_BASE_URL = "http://api.open-notify.org/iss-now.json";
var LOCATION_HTTP_METHOD = "GET";
var LOCATION_DATA_TYPE = "JSONP";

//Displaying the location of ISS
var displayLocation = function(data){
  var lat = data.iss_position["latitude"];
  var long = data.iss_position["longitude"];

  $(".latitude").text(lat);
  $(".longitude").text(long);
  long = parseFloat(long);
  lat = parseFloat(lat);
  initMap(lat,long);
};

var locationOfIss = function(){
  $.ajax({
    url: LOCATION_BASE_URL,
    method: LOCATION_HTTP_METHOD,
    dataType: LOCATION_DATA_TYPE
  }).done(displayLocation);
};

locationOfIss();


///GOOGLE MAPS API

  function initMap( lat, long) {
    var iss = {lat: lat, lng: long};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: iss
    });
    var marker = new google.maps.Marker({
      position: iss,
      map: map,
      icon: "images/alien.gif"
    });
  }

  $(document).ready(function(){
    locationOfIss();
    window.setInterval( function () {
      locationOfIss();
    }, 2000);
  });

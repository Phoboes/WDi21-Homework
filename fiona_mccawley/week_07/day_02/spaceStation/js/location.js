  var LOCATION_URL = "http://api.open-notify.org/iss-now.json";
  var LOCATION_METHOD = "GET";
  var LOCATION_DATA_TYPE = "JSONP";


  var displayPosition = function (data){
    var long = data.iss_position["longitude"];
    var lat = data.iss_position["latitude"];
    $(".longitude").text( long );
    $(".latitude").text( lat );
    long = parseFloat(long);
    lat = parseFloat(lat);
    initMap(lat, long);
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

function initMap(lat, long) {
   var iss = {lat: lat, lng: long};
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 4,
     center: iss
   });
   var marker = new google.maps.Marker({
     position: iss,
     map: map,
     icon: "images/astronaut_helmet-50.png"
   });
 }

var LOCATION_URL = "http://api.open-notify.org/iss-now.json";
var LOCATION_METHOD = "GET";
var LOCATION_DATA_TYPE = "JSONP";

var displayPosition = function (data){
  var long = data.iss_position["longitude"];
  var lat = data.iss_position["latitude"];
  $(".longitude").text( long );
  $(".latitude").text( lat );

};



var issPostion = function (){
  $.ajax({
    url: LOCATION_URL,
    method: LOCATION_METHOD,
    dataType: LOCATION_DATA_TYPE
  }).done(displayPosition);
};
issPostion();

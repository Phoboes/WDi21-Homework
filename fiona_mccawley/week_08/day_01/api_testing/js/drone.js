// console.log("testing");
// URL ? http://api.dronestre.am/data
// Method
//Data types - JSON

var DRONE_URL = "http://api.dronestre.am/data";
var DRONE_METHOD = "GET";
var DRONE_TYPE = "JSONP";


var getDroneStrikes = function(){
  $.ajax({
    url: DRONE_URL,
    method: DRONE_METHOD,
    dataType: DRONE_TYPE
  }).done(function(response){
    var strikes = response.strike;
    $.each(strikes, function (index){
      console.log(strikes[index]);
    });
  });
};
getDroneStrikes();



var ASTROS_URL = "http://api.open-notify.org/astros.json";
var ASTROS_METHOD = "GET";
var ASTROS_TYPE = "JSON";



var displayInfo = function ( data ) {

  var number = data.number;
  var people = data.people;

  var nameArr = [];
  for (var i = 0; i < people.length; i += 1) {
    var name = people[i].name;
    nameArr.push( " " + name );
  }

  $( ".number" ).text( number );
  $( ".name" ).text( nameArr );

};

var getAstrosInformation = function () {

  $.ajax({
    url: ASTROS_URL,
    method: ASTROS_METHOD,
    dataType: ASTROS_TYPE
  }).done( displayInfo );

};

getAstrosInformation();

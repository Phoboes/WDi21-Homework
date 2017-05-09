// We want to set our important variables
var ISS_URL = "http://api.open-notify.org/astros.json";
var ISS_METHOD = "GET";
var ISS_DATA_TYPE = "JSONP";

// We then need to display that
var displayPeople = function(data){
    var numOfPeople = data.number;
    var $newParagraph = $("<p></p>");
    $newParagraph.text("The number of people in space is " + numOfPeople);
    $newParagraph.prependTo(".content");
};

  var spacePeopleNames = function(data){
    var people = data.people;
    for (var i = 0; i < people.length; i++) {
      $(".content ul").append('<li> Craft ' + people[i].craft + " has " + people[i].name + ' onboard.</li>');
    }
  };

// We want to create the ajax request

var peopleInSpace = function (){
    $.ajax ({
      url: ISS_URL,
      method: ISS_METHOD,
      dataType: ISS_DATA_TYPE
  }).done(spacePeopleNames, displayPeople);
};
peopleInSpace();





// Select the right params

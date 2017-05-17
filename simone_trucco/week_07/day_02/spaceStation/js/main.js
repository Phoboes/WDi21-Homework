// We want to set our important variables
var ISS_URL = "http://api.open-notify.org/astros.json";
var ISS_METHOD = "GET";
var ISS_DATA_TYPE = "JSONP";

// We then need to display that
var displayPeople = function(data){
    var numOfPeople = data.number;
    var $newParagraph = $("<p></p>");
    $newParagraph.text("The number of People in space right now is: " + numOfPeople);
    $newParagraph.prependTo(".content");
};

var spacePeopleNames = function (data) {

  // console.log(name, craft);
  var people = data.people;
    for (var i = 0; i < people.length; i++) {
      var name = data.people[i].name;
      var craft = data.people[i].craft;
      $(".content ul").append("<li>" + "The astronaut: " + name + " is on the: " + craft + "</li>");
    }
};
  // var astronautOne = peopleName.name[0];
  // var $newParagraph = $("<p></p>");
  // $newParagraph.text("The number of People in space right now is: " + numOfPeople);
  // $newParagraph.appendTo(".content");


// We want to create the ajax request

var peopleInSpace = function (){
    $.ajax ({
      url: ISS_URL,
      method: ISS_METHOD,
      dataType: ISS_DATA_TYPE
  }).done(displayPeople, spacePeopleNames);
};
peopleInSpace();

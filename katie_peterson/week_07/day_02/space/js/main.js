// Show the number of people in space
// As well as their names

// What url?
var SPACE_BASE_URL = "http://api.open-notify.org/astros.json";

// What method?
var SPACE_HTTP_METHOD = "GET";
// What dataType?
var SPACE_DATA_TYPE = "JSON";
// What parameters? (If any)

//Displaying the number of people in space and their names
var displayPeople = function(data){
  var number = data.number;
  var people = data.people;

  var $number = $("<div class='number'>").html(data.number);
    $(".people").append($number);

  people.forEach(function(data){
    var $name = $("<div class='name'>").html(data.name);
  $(".people").append($name);
  });

};

var peopleInSpace = function () {
  $.ajax({
    url: "http://api.open-notify.org/astros.json",
    method: "GET",
    dataType: "JSONP",
  }).done(displayPeople);
};


$(document).ready(function(){
  $(".people button").on("click", function(){
    peopleInSpace();
  });
});

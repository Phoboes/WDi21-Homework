var BASE_SPACE_URL = "http://api.open-notify.org/astros.json";

var displayAstronautInfo = function (data) {
var number = data.number;
var name = data.people
var craft = data.people.craft;
$(".number").text(number);

name.forEach(function(data) {
  var $newParagraph = $("<p></p>");
    $newParagraph.text(name);
    $newParagraph.prependTo(".name");
  // $(".name").text(name);
});
};

var getAstronautInfo = function() {
  $.ajax({
    url: BASE_SPACE_URL,
    method: "GET",
    dataType: "JSON",
    data: {
      people:""
    }


  }).done(displayAstronautInfo);
};

getAstronautInfo();

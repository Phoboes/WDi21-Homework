$.ajax({
  url: "http://api.open-notify.org/astros.json",
  method: "GET",
  dataType: "JSONP",
}).done(function (data) {
  console.log( data.people );
});

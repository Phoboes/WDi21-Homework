// console.log("beer");

// URL - http://api.brewerydb.com/v2/1c
// Method - GET
// DataType - JSON
// data - key - API KEY
var BEER_URL = "http://api.brewerydb.com/v2/";
var BEER_METHOD = "GET";
var BEER_TYPE = "JSON";


var getBeer = function(){
  $.ajax({
    url: BEER_URL,
    method: BEER_METHOD,
    dataType: BEER_TYPE,
    data: {

    }
  });
};

getBeer();

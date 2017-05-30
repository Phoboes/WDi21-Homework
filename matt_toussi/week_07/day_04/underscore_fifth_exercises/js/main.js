var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "F", active: true,  age: 95, uid: 1000 }
];

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];



_.times( 30, function () {
  var betweenTwentyAndHundred = _.random( 20, 100);
  console.log( "\tBetween 20 and 100: ", betweenTwentyAndHundred );
} );


console.log( "" );
var createOnceCalledFunction = function () {
  console.log( "\tCreate Function called." );
};
var callOnce = _.once( createOnceCalledFunction );
callOnce(); // This will call
callOnce(); // This won't call
callOnce(); // This won't call





//var html = $.tmpl("<p> Hello ${username} ,you don't look a day over ${age}</p>", people);
//$("body").append(html);

var compiledTemplate = _.template("<p> Hello <%= username %> ,you don't look a day over <%= age %></p>");


 _.each(people, function(person){
   var html = compiledTemplate(person);
   $("body").append(html);
});



function capitalize(str){
  return str[0].toUpperCase() + str.slice(1);
}
var template = _.template("<%= firstName %> <%= lastName %> was born in <%= born %>.");

_.chain(startingData)
.map(function(item){
  return _.object(item[1],item[0]);
})
.map(function(item){
  item.firstName = capitalize(item.firstName);
  item.lastName = capitalize(item.lastName);
  item.born = item.born - 100;
  return item;
})
.each(function(item){
  var text = template(item);
  console.log(text);
});




// _.unzip([["groucho", "marx", 1990], ["firstName", "lastName", "born"]]);

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];


// Log out 30 random numbers between 20 and 100
var randomNum = _.random( 20, 100, 30 );
console.log(randomNum);

// Create a function that can only ever be called once

var createApplication = function () {
  console.log("Yo bro");
};
var initialize = _.once(createApplication);
initialize();
initialize();

// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>

var peopleLoop = _.each(people, function (person){
  // console.log("Current person is" + person["username"]);
  var paragraph = "<p>Hello <%=username%>, you don't look a day over 20 </p>";
  var addPara = _.template( paragraph );
  var currentUsername = person["username"];
  var completePara = addPara({username: currentUsername});
  console.log(completePara);
});

//GROUCHO


var restructuring = _.chain( startingData )
  .map(function (person) {
    return _.invert( _.object( _.unzip( person ) ) );
  });

  console.log(restructuring);

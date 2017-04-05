console.log ("Script running");

// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


// var numOfChildren = 5;
// var spouse = "Margarita";
// var location = "Sydney";
// var jobTitle = "WebDev";

var tellFortune = function (numOfChildren, spouse, location, jobTitle){

  console.log("You will be in " + jobTitle + " in " + location + ", and married to " + spouse +" with N kids." );

};

tellFortune(5, "Margarita", "Sydney", "Webdev");

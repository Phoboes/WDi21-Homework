var app = app || {};

app.Users = Backbone.Collection.extend({
  url: "/users",

  model: app.User,

  initialize: function(){
    console.log("A new collection of users has been made");
    this.on('add', function(){
      console.log("A new user has been added");
    });
  }
});

var usersCollection = new app.Users();
usersCollection.add({firstName: "Johnno", lastName: "Smithy"});

usersCollection.fetch().done(function(){
  usersCollection.each(function(user){
    var first = user.get("firstName");
    var last = user.get("lastName");
    console.log( "First name is " + first + " Last name is " + last );
  });
});

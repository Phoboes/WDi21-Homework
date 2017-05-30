var app = app || {};

app.Users = Backbone.Collection.extend({
  url: "/users",
  // When we call .fetch(), make a GET request asking for JSON from here
  // The URL property should be pointed at the index action of whatever controller (Posts, Users, Tweets etc.)

  model: app.User,

  initialize: function () {
    this.on("add", function ( user ) {
      var title = user.get("firstname");
    });
  }

});

var usersCollection = new app.Users();

usersCollection.fetch().done(function () {


  usersCollection.each(function ( user ) {
    var name = user.get("firstname");
    console.log( name );
  });

});

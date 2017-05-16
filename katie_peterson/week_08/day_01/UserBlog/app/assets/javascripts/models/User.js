var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: "/users",

  defaults: {
    firstname: 'Anonymous',
    lastname: 'Untitled',
    bio: '...'
  },

  initialize: function () {
    console.log( 'A new user was created' );

    this.on("change", function () {
      console.log("Something changed in an app.Post");
    });
  }
});

var u1 = new app.User();
console.log( u1.toJSON() );

var u2 = new app.User();
console.log( u2.toJSON() );

var u3 = new app.User({
  firstname: 'Bob',
  lastname: 'Murray',
  bio: '...'
});

u3.set({
  firstName: "Bill"
});
console.log( u3.toJSON() );

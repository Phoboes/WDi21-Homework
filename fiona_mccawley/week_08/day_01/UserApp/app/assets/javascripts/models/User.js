// console.log("hello world");
var app = app || {};

app.User = Backbone.Model.extend({

  urlRoot: "/users",

  defaults: {
    firstName: "Anonymous",
    lastName: "Anonymous",
    password: "chicken"
  },

  initialize: function(){
    console.log("A new user was created");
    this.on('change', function(){
      console.log("A users details were changed");
    });
  }
});

// test creating new users and changing details
//
// var u1 = new app.User();
// console.log(u1.toJSON());
//
// var u2 = new app.User({
//   firstName: "Fiona"
// });
//
//
// var u3 = new app.User({
//   firstName: "Thurston",
//   lastName: "Moore",
//   password: "chicken"
// });
// console.log(u3.toJSON());
//
// u2.set({lastName: "Mac"});
// console.log(u2.toJSON());

var newUser = new app.User({firstName: "Back", lastName: "Bone"});
// newUser.save();
// newUser.fetch();

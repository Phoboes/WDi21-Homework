// var planetAges = {
//   "Earth": 1,
//   "Mercury": 0.2408467,
//   "Venus": 0.61519726,
//   "Mars": 1.8808158,
//   "Jupiter": 11.862615,
//   "Saturn": 29.447498,
//   "Uranus": 84.016846,
//   "Neptune": 164.79132
// };

// var yearCalc = function( seconds, planet ){
//   var earthYear = seconds / 31557600;
//   return earthYear * planetAges[ planet ];
// };

// var spaceAges = function( seconds ){
//   console.log("Your age on Earth is: " + yearCalc( seconds, "Earth" ) + " years old." );
//   console.log("Your age on Mercury is: " + yearCalc( seconds, "Mercury" ) + " years old." );
//   console.log("Your age on Venus is: " + yearCalc( seconds, "Venus" ) + " years old." );
//   console.log("Your age on Mars is: " + yearCalc( seconds, "Mars" ) + " years old." );
//   console.log("Your age on Jupiter is: " + yearCalc( seconds, "Jupiter" ) + " years old." );
//   console.log("Your age on Saturn is: " + yearCalc( seconds, "Saturn" ) + " years old." );
//   console.log("Your age on Uranus is: " + yearCalc( seconds, "Uranus" ) + " years old." );
//   console.log("Your age on Neptune is: " + yearCalc( seconds, "Neptune" ) + " years old." );
// };

// Object version:

var spaceAge = {
  planetAges: {
    "Earth": 1,
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132
  },

  // 31557600 = 1 year on earth.

  singlePlanet: function( seconds, planet ){
    var earthYear = seconds / 31557600;
    return earthYear * this.planetAges[ planet ];
  },

  logObject: function( obj ){
    for( var key in obj ){
      console.log( "Your age on " + key + " is " + this.planetAges[ key ] );
    }
  },

  total: function( seconds ){

  // Using a function with a return value, when the object is made:
  // each key calls the 'singleplanet' function and stores its return as a key.

    var allAges = {
      Earth: this.singlePlanet( seconds, "Earth" ),
      Mercury: this.singlePlanet( seconds, "Mercury" ),
      Venus: this.singlePlanet( seconds, "Venus" ),
      Mars: this.singlePlanet( seconds, "Mars" ),
      Jupiter: this.singlePlanet( seconds, "Jupiter" ),
      Saturn: this.singlePlanet( seconds, "Saturn" ),
      Uranus: this.singlePlanet( seconds, "Uranus" ),
      Neptune: this.singlePlanet( seconds, "Neptune" )
    };

  // Rather than a big messy loop or block of console.logs here, I delegated my code to another fuction:
  // logObject handles the logging *exclusively*.

    this.logObject( allAges );
    return allAges;
  }
};
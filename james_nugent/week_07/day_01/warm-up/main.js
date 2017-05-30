console.log("hello world");




var allergens = {
  scorecard: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  },

  getKeys: function () {
    var keys = Object.keys( this.scorecard ).reverse();
    keys = keys.map(function( num ) {
      return parseInt( num );
    });
    return keys;
  },

  getList: function( score ){
    var keys = this.getKeys();
    var returnArr = [];

    for ( var i = 0; i < keys.length; i++ ){
      if( score >= keys[i] ){
        returnArr.push( this.scorecard[keys[i]]);

        score -= keys[i];
      }
    }
    return returnArr;
  },

  list: function( score ){
    var allergyList = this.getList( score );

    if(allergyList.length > 0){
      console.log("You are allergic to: " + allergyList.join(', '));
    }
  }

};

allergens.getList(100);

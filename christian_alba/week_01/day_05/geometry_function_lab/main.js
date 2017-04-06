//
// var DogFactory = function (name) {
//   var dog = {};
//
//     dog.name = name;
//     dog.alive = true;
//     dog.eat = function () {
//       console.log("I eat endlessly");
//     }
//
//     return dog;
// };
//
// var lab = DogFactory("Buddy");
// var tammy = DogFactory("Tammy");
//
// console.log( lab, tammy ); // => undefined

// Classroom , Boat
  // Two dynamic properties and one method

//   var BeachFactory = function ( name, color ) {
//     //Create something to house all properties and functionality
//       var beach = {};
//       beach.name = name;
//       beach.color = color;
//       beach.wavesBreaking = function () {
//         console.log("Swoooosh");
//       }
//
//       //Give the object back in case someone needs it
//       return beach;
//     };
//
// var Spring = BeachFactory("Spring", "white");
// var Whitehaven = BeachFactory("Whitehaven", "very white");
//
// console.log(Spring, Whitehaven);

// There should be Players
  // There should be Enemies
  // The enemies should inherit everything the Player has
  // The Allies should inherit everything the Player has

  //When I create a Player (I am going to use a PlayerFactory)
  //A Sword
  //Health Points
  //Score
  //Name

    var PlayerFactory = function ( name ) {
      var player = {};

      player.name = name;
      player.sword = "Sharp";
      player.hp = 100;
      player.score = 0;

      return player;
    };

    var olivia = PlayerFactory("Olivia");
    var charlotte = PlayerFactory("Charlotte");

    console.log(olivia, charlotte);

  //When I create an Enemy (I am going to use a EnemyFactory)
    // It has everything that a player has, plus:
    // illIntent
    //evilHeart

    var EnemyFactory = function ( name ) {
      //I know I can craete a generic Player
      var enemy = PlayerFactory( name );
      // An enemy is just a generic Player, but with illIntent and an
      //evilHeart

      enemy.illIntent = true;
      enemy.evilHeart = true;

      return enemy;
    };

    var scar = EnemyFactory("Scar");
    var subZero = EnemyFactory("SubZero");

    console.log(scar, subZero);






    // When I create an ally (I am going to use a AllyFactory)
    // It has everything that a player has, plus:
    //sharesABeer

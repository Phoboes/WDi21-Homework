$(document).ready( function(){

  // var onCardClick = function() {
  //   console.log('clicked!');
  // };
  // $('.square').on('click', onCardClick);

//  check the use of this and apply it to the function above!!
// var firstClick = function () {
//     console.log(this, ' got clicked');
//   };
// $('.square').on('click', firstClick);

                  // var firstClick = function () {
                  //   // console.log("I'm a cross");
                  //   $(".square").css({
                  //   backgroundImage: "url('images/cross.png')"
                  // });
                  // };
                  // $( '.square' ).on( 'click', firstClick);
// var cross = function () {
//   // console.log("I'm a cross");
//   $("#sqOne").css({
//   backgroundImage: "url('images/cross.png')"
// });
// };
// $( '.square' ).on( 'click', firstClick);

      // var circle = function () {
      //   $("#sqOne").css({
      //   backgroundImage: "url('images/circle.png')"
      // });
      // };
      // $( '#sqOne' ).on( 'click', circle);

// now i have a function that, on a click activates the ring on the first square.
// I need a new funtion that applies this rule to the whole grid. square by square.

              // var circle = function () {
              //   $(this).css({
              //   backgroundImage: "url('images/circle.png')"
              // });
              // };
              // $('.square').on( 'click', playMove);
              //
              // var cross = function () {
              //   $(this).css({
              //   backgroundImage: "url('images/cross.png')"
              // });
              // };
              // $('.square').on( 'click', cross);

// Now I need another function that alternates the crosses and the circles
// to run that function i need an array (or object?) with all the cards id
// the function will include a series of if else statements that will try to verify which player is playing at that paticular time

// if cross === true {
//   next click applies var circle
// } else {
//   next click applies var cross
// }


// $('.square').on( 'click', playMove);


var cross = function ( element ) {
  $(element).css({
    backgroundImage: "url('images/cross.png')"
  });
};
var circle = function ( element ) {
  $(element).css({
    backgroundImage: "url('images/circle.png')"
  });
};

var clickCount = 1;

var playMove = function (){
  // console.log("????");
  // debugger
  if (clickCount % 2 === 0) {
          cross( this );
          } else {            // instead of 2 I want odd numbers
          circle( this );
          }
  clickCount +=1 ;
};

$('.square').on("click", playMove );


}); // End of docReady!!

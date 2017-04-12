$(document).ready( function(){

var cross = function ( element ) {
  $(element).addClass('cross');
};

var circle = function ( element ) {
  $(element).addClass('circle');
};

  var clickCount = 1;

    var playMove = function (){
      if (clickCount % 2 === 0) {
            cross( this );
      } else {
            circle( this );
      }
      clickCount +=1 ;
    };

    $('.square').one("click", playMove );


$('.square').on('click', function (){

  //circle wins
if ( $('#sqOne').hasClass('circle') && $('#sqTwo').hasClass('circle') && $('#sqThree').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500); //line1

  } else if ( $('#sqFour').hasClass('circle') && $('#sqFive').hasClass('circle') && $('#sqSix').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //line2

  } else if ( $('#sqSeven').hasClass('circle') && $('#sqEight').hasClass('circle') && $('#sqNine').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //line3

  } if ( $('#sqOne').hasClass('circle') && $('#sqFour').hasClass('circle') && $('#sqSeven').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //column1

  } else if ( $('#sqTwo').hasClass('circle') && $('#sqFive').hasClass('circle') && $('#sqEight').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //column2

  } else if ( $('#sqThree').hasClass('circle') && $('#sqSix').hasClass('circle') && $('#sqNine').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //column3

  } else if ( $('#sqOne').hasClass('circle') && $('#sqFive').hasClass('circle') && $('#sqNine').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //across1

  } else if ( $('#sqThree').hasClass('circle') && $('#sqFive').hasClass('circle') && $('#sqSeven').hasClass('circle') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //across2


  //cross wins
} else if ( $('#sqOne').hasClass('cross') && $('#sqTwo').hasClass('cross') && $('#sqThree').hasClass('cross') ){
  setTimeout(function() {
    swal({
      title: "YOU WON!!!",
      text: "Wanna play again?!",
      type: "success",
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
    },
    function(){
      setTimeout(function(){
        location.reload();
      }, 1000);
    });
  }, 500);  //line1

  } else if ( $('#sqFour').hasClass('cross') && $('#sqFive').hasClass('cross') && $('#sqSix').hasClass('cross') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //line2

  } else if ( $('#sqSeven').hasClass('cross') && $('#sqEight').hasClass('cross') && $('#sqNine').hasClass('cross') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //line3

  } if ( $('#sqOne').hasClass('cross') && $('#sqFour').hasClass('cross') && $('#sqSeven').hasClass('cross') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //column1

  } else if ( $('#sqTwo').hasClass('cross') && $('#sqFive').hasClass('cross') && $('#sqEight').hasClass('cross') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //column2

  } else if ( $('#sqThree').hasClass('cross') && $('#sqSix').hasClass('cross') && $('#sqNine').hasClass('cross') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //column3

  } else if ( $('#sqOne').hasClass('cross') && $('#sqFive').hasClass('cross') && $('#sqNine').hasClass('cross') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //across1

  } else if ( $('#sqThree').hasClass('cross') && $('#sqFive').hasClass('cross') && $('#sqSeven').hasClass('cross') ){
    setTimeout(function() {
      swal({
        title: "YOU WON!!!",
        text: "Wanna play again?!",
        type: "success",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },
      function(){
        setTimeout(function(){
          location.reload();
        }, 1000);
      });
    }, 500);  //across2
  } else {
  }
});



////////////////////////////////////////////////////////////////////////////////
}); // End of docReady!!











////////////////////////////////////////////////////////////////////////////
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

          /// keep in mind that you can use toggleClass at some point in the previous function
            // it could be that you can toggle a specific action ( if x appears toggleClass a point to player X and viceversa)
            // see the page of codeacademy for reference
            //filter

// if (this === $('#sqOne') && this === $('#sqTwo') && this === $('#sqThree')) {
//    console.log("Player Circle wins!");
// } else if (this === $('#sqOne') && this === $('#sqTwo') && this === $('#sqThree'))
//    console.log("Player Circle wins!");

//} else if (circle === 1 && circle === 2 && circle === 3) {
//    console.log("Player Circle wins!");
//}
          // var assignPoint = function () {  // should I assign click as a parameter?
          //   if ( $('#sqOne') === circle && $('#sqTwo') === circle && $('#sqThree') === circle) {
          //     console.log('circle wins!');
          //   } else {
          //
          //   }
          // };
          // assignPoint();

// I want an event listener that listens to every change on the board
  // when a div(.square) turns into a circle
    // it assigns a value (point) to FIRST player
  // when a div(.square) turns into a cross
    // it assigns a value (point) to SECOND player
///////////////////////////////////////////////////////////////////////////////

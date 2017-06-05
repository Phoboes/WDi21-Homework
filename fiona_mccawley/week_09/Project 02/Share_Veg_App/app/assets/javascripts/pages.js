console.log("eat vegetables");
// console.log(currentUser);
var youveGotMail = function (){
  $("#megryan").css({
    color: "red"
  });
};



var getMessages = function (currentUser){
  // console.log(currentUser);
  $.ajax({
    url: '/users/' + currentUser + '/notifications',
    method: 'GET',
    dataType: 'JSON'
  }).done( function ( response ){
    var emptyArr = [];
    for (var i = 0; i < response.length; i++) {
      if ( response[i].user_id !== currentUser ) {
          console.log(response[i]);
          emptyArr.push(response[i]);
      }
    }
    console.log(emptyArr.length);
    if (emptyArr.length > 0){
      youveGotMail();
    }

  });
};
//
// $(document).ready(function(){
//   getMessages();
//   // var MESSAGE_TIMER = window.setInterval(function(){
//   //   getMessages();
//   // });
// });

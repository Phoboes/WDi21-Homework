console.log("woof");

var $playerOneIndex = [];
var $playerTwoIndex = [];

var $success = [[0,1,2],[3, 4, 5],[6,7,8],[0,3,6],[1,4,7], [2,5,8],[0,4,8],[6,4,2]];
// Array indicating successful combinations for either player.

$(".square2").show();
setTimeout(function() {$(".square2").fadeOut();},3500);
// Divs with "tic tac toe" text dissapear after 3.5 seconds

$(".square").one("click",function () {

      if ( $(".toggleswitch")[0].checked ){

        $(this).text('O');
        $(this).css("color", "#8ce196");
        $(this).css("border", "5px solid #8ce196");
        console.log($(this).attr("id"));
        $playerOneIndex.push($(this).index(".square"));
        for ( var i = 0; i < $success.length; i ++ ) {
          var currentWinningCombo = $success[i];
          if ($playerOneIndex.includes(currentWinningCombo[0]) && ($playerOneIndex.includes(currentWinningCombo[1]) && ($playerOneIndex.includes(currentWinningCombo[2])  )))
          {
            $(".square").css("border", "5px solid #8ce196");
            return;
            // Success conditions for player O
            }
          }
        }

  else if  (!$(".toggleswitch")[0].checked ) {
        $(this).text('X');
        $(this).css("color", "#a0e5e2");
        $(this).css("border", "5px solid #a0e5e2");
        $playerTwoIndex.push($(this).index(".square"));
        for ( var i = 0; i < $success.length; i ++ ) {
          var currentWinningCombo2 = $success[i];
          if ($playerTwoIndex.includes(currentWinningCombo2[0]) && ($playerTwoIndex.includes(currentWinningCombo2[1]) && ($playerTwoIndex.includes(currentWinningCombo2[2]) )))

        {
          $(".square").css("border", "5px solid #a0e5e2");

          return;
          // Success conditions for player X
          }
        }
      }
     if (($playerOneIndex.length + $playerTwoIndex.length) === 9) {
    $(".square").css("color", "#ffc44f");
    $(".square").css("border", "5px solid #ffc44f");
    // Conditions for "draw".  All 9 boxes have to be selected for the draw/orange outcome to be successful.
  }

$(".button").on("click",function () {
location.reload();
// Reloads game.  As their is no score count, there is no issue with reloading.
});
});

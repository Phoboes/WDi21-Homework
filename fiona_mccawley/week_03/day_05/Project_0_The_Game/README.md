# Project_0_The_Game
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/////////////////CLINTON VS CHEETO TIC TAC TOE//////////////////////
////////////////////////////////////////////////////////////////////
//////////////////////////////by Fiona McCawley/////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
Technologies used:
  -html5
  -css3
  -Javascript
  -jQuery
  -animate.css

Instructions:
2 player game
Clinton always goes first
Use the mouse to take turns clicking one square.
Match 3 of your players in a row, column or diagonally.
Once game is completed
  - Click continue to play again in the same session, which will
    keep score.
  - If you want to finish the session, click I Quit.

Approach taken:-
Before creating anything, I worked out a plan on paper. Although as I worked
on the game, things changed. Initially I wanted to drag tokens over to
the gameboard, to put into place. I was making it more complex than it needed
to be. I had a really ordinary background of a white house. Once I started
typing pseudocode, it made it clear how complicated tic tac toe is to code.

I started off with what Data was involved.
  - I needed a token/marker for each player (2)
  - To be able to keep track and know where a token has been added/placed
  - Map out what the winning combinations are
  - I need to be able to switch from player one to player two
  - I need to keep track for the number of turns, so if there isn't a match
    after 9 turns, then it will be a tie.
  - I need something to check whether a win/match has taken place
  - I need something to indicate that this has happened

Presentation/Style
  - Use one main div, with multiple divs inside it
  - I'm going to have the squares flip to either a clinton face or trump face
  - American colors as the theme red/white/blue
  - When match happens, a winning theme triggered. Or when tie happens a tie theme.

DOM manipulation
  - Use jQuery to flip between background image and face, using a click function
  - For animations for winning theme and buttons to restart game
///////////////////////////////////////////////////////////////
First stage actually doing stuff
  - I created basic html, and css for the gameboard. Separate divs, with
    a background image. The divs had 2 classes, square plus the number square.
  - I then worked out how to flip a specified square to show a particular image, by
    selecting the square element using jQuery, then using the .on(click) with the function
    to update the css using the .css, to change the background image url to the image I wanted.
  - To make it dynamic, I used the 'this' word on the jquery selector for .square
    I was then able to click on any square to show an image. Although, it was
    showing the same image. It was not switching between players.
Second stage
  - Created a variable for player that was === to 1. Created an if else statement
    so that I could say, if player === 1 then on click do this, otherwise if not 1 then
    on click show the other image. This was still hardcoded, but I could see if I changed
    the variable from 1 to 2 I could get the squares showing different images depending on player.
  - To solve this, after changing the background image, I made the player variable === to the other player. So
    at the end of player 1's click event, the variable would be changed to 2, on the next click event, as player
    did not === 1 it would then switch player 2's image.
  - I need to be able to track which squares player one had clicked, and which squares player two had clicked.
  - I initially tried doing that by getting the attribute of the squares, I was thinking if I could find out what
    the url was on each square, I could match that up with the winning combos. I couldn't get this working.
  - So I tried adding a css class of player one or player two to the square on the click event, again utilising the $(this) keyword, and using .addClass.
  - I could then use the hasClass(), to check what squares each player had, then match that against the 8 winning combos
    for each player. I used console log to confirm that the matches were happening.
Third stage
  - I added a flip square animation that we learnt in Kane's animations session, using animate.css and the flipInX animation. I wanted the gameboard to explode when a win happened, so used the animate function in jQuery to move each square off the screen.
  - While testing this out I realised I hadn't added in a check to indicate if a tie had happened. The logic would be
    if 9 goes have occurred and no matches had happened, then it would be a tie. I created a variable for number of turns, then added into each players click event a += 1 to increase that by 1 every go. I added in another else if statement
    to check if number of turns was equal to 9. This would mean that if it had gone through the checks, and there was no match, and the number of turns was equal to 9, then return that it's a tie.
  - I then worked on adding other features, firstly the score count. I did this by adding a variable for each player that captured a +=1 for a win from each player.
  - I added html/css to the columns to add a tiny scoreboard to each player, with a separate class added. I used jQuery to .text, to push the variable value to each player.
  - So the score count did not refresh, I created a continue button to the winning/tie themes and used jQuery to create a
    function that would reset the css (bring squares back in from explosion), Reset the turn counter, and player to 1, remove all classes, including the flipInX classes that were added. I realised after testing that even though the css had reset, the flipInX function didn't work again. If I removed it then when it got added back again on the click function it worked.
  - The issue I found though, was I couldn't reset the .one click function. So none of the squares would click again after the refresh. I changed the .one to .on, but this would mean that during the game, a player could click twice on the same square. I tried to fix this with the jQUery .load() function. Using the jQuery selector to select the class of the button, and then reload index.html. But I got an error saying that the reload file is not the right protocol. It needed to be http:// not file/////. I googled and found an article about using python to make the folder a local server, and then using the url  http://localhost:8000/ then the file path. I still received the cross origin error.

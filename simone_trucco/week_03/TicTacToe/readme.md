12 - 04 - 2017
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          --------------------------------------------------------INDEX.HTML--------------------------------------------------------
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
The approach to index.html has been pretty easy since the project didn't require a big HTML structure.

I created the boiler-plate and added a div for every square of the game board, giving it a common class with each other (square) and a single id ('sqOne', 'sqTwo', etc.) so that I could easily work with the divs both in CSS and JS.

I then linked style.css, jQuery.js and main.js as usual.

Later on during the refinement of the visual side of the project I added the font family link and the sweet-alert link so that I could customise the body font and the alerts.


          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ---------------------------------------------------------STYLE.CSS--------------------------------------------------------
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
The approach to the css file it wasn't as easy as the html to finalise.

The first part was actually easy but when I wanted more and more customisations and elements things started to get messy.
Elements tend to clash with each other on position, floating, and width and height.

As soon as I started the project I thought to start with html, then move to css and then move to JS.
After giving it a bit of extra thought and after discussing the project with my classmates I decided to move on to JS and get back to it once the "brain" of the game was set up and running properly.

The idea behind the layout is simplicity, playing around with depth and shadows (of course very simplified).

In order to do that I used fade ins and keyframes.

I also tried to modify the CSS for the sweet-alert CSS file but I had to give up at some stage since it's really tricky.

          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ---------------------------------------------------------MAIN.JS---------------------------------------------------------
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
This was, of course, the hardest part.

It took me a while to figure out the various steps, and I got lost a couple of times.
The main difference I notice since the MTA is the fact that somehow some processes look a bit clearer even though there still seem to be a little gap between the pseudo code and the actual code.

For this project I used jQuery and worked around the css elements interactions on the board:
. on a click an image appears and when it does it triggers a function that check for a winning combination that keeps on going until it finds it.

The code look still quite repetitive to me, and I am sure there is a simplified way to write but I am happy with the result.

I used sweet-alert for the first time and I liked having an interaction so easily set but much more appealing that the normal alert.
I also attached the .reload() method to refresh the page and start the game over.


Overall it was a very challenging project. But I loved it. And I got to learn so much and got the chance to practice a lot (really a lot) on JS & JQUERY, CSS and HTML.

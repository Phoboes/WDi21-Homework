var $canvas = document.querySelector("canvas");
var context = $canvas.getContext("2d");

var app = {};

// I am using he app object for the entire storage of my entire application.

// The benefit of this is that I preserve the global namespace. My JS file's global variables only contain $canvas, context and app.



// From there, I've further confined vaiables within app to reference information specific to those things, for instance, app.food has a location and a create function.

// The overall structure of the program at this point looks like:
// app {
//   food: {
//     location: {},
//     create: function(){}
//   }
// }

// Anything preceeded by the 'app.' variable is just extending the app object.

app.food = {
  location: {},
  create: function(){
    this.location.x = parseInt( Math.random() * 290 );
    this.location.y = parseInt( Math.random() * 290 );
    app.movement.render( this.location, "red" );
  }
}; // End food

app.snake = {
  body: {
    direction: "up",
    size: 10,
    segments: [{ x: 150, y: 150 },{ x: 150, y: 160 },{ x: 150, y: 170 }],
    alive: true,
    hue: 0
  },

  grow: function(){
    // This is a really annoying fix for an issue with objects in JS.
    // if I have an object: segment = { x: 150 }
    // And I try to duplicate it: secondSegment = segment

    // secondSegment is not actually a new object -- it directly refers to segment.
    // secondSegment.x = 200 will also make segment's x 200.

    // To get around this, I'm turning the object to a string, then back to an object, which is not connected.
    var head = JSON.parse(JSON.stringify( app.snake.body.segments[0] ));
    app.snake.body.segments.unshift( app.movement.directionStep( head ) );
  }
}; // End snake

app.movement = {

  changeDirection: function( e ){
    if( e.key === "w" && app.snake.body.direction !== "down" ){
      app.snake.body.direction = "up";
    } else if ( e.key === "a" && app.snake.body.direction !== "right" ){
      app.snake.body.direction = "left";
    } else if ( e.key === "s" && app.snake.body.direction !== "up" ){
      app.snake.body.direction = "down";
    } else if ( e.key === "d" && app.snake.body.direction !== "left" ){
      app.snake.body.direction = "right";
    }
  },

  directionStep: function( segment ){
    if( app.snake.body.direction === "up" ){
      segment.y -= 10;
    } else if ( app.snake.body.direction === "down" ){
      segment.y += 10;
    } else if ( app.snake.body.direction === "left" ){
      segment.x -= 10;
    } else {
      segment.x += 10;
    }
    return segment;
  },

  // I've designed render to be reuseable, it will take any object with an X and Y, which means it can also be used to place and draw the food items (along with snake segments)
  render: function( segment, color ){
      context.fillStyle = color;
      context.strokeRect( segment.x, segment.y, app.snake.body.size, app.snake.body.size );
      context.fillRect( segment.x, segment.y, app.snake.body.size, app.snake.body.size );
  },

  // The -1 is to offset the snake's individual segments from causing death by touching eachother (since they are side by side with 0 gap.)
  intersection: function( head, item ) {
    return !(item.x > head.x + app.snake.body.size - 1 ||
             item.x + app.snake.body.size - 1 < head.x ||
             item.y > head.y + app.snake.body.size - 1 ||
             item.y + app.snake.body.size - 1 < head.y);
  },

  checkBounds: function(){
    var head = app.snake.body.segments[0];
    // Check whether the head of the snake has escaped the canvas
    if( head.x < 0 || head.x > 290 || head.y < 0 || head.y > 290 ){
      app.snake.body.alive = false;
      // If this happens -- return. Don't run the more intensive functions - snek is dead.
      return;
    }

    // Loop throughall the segments, check if the snake has bitten itself.
    for( var i = 1; i < app.snake.body.segments.length; i++ ){
      if( this.intersection( head, app.snake.body.segments[i] ) ){
        app.snake.body.alive = false;
        return;
      }
    }
    // Lastly, if the snake hasn't died, see if it's touching food. If it does, the snake gets bigger, and the food gets randomly placed elsewhere.
    if( this.intersection( head, app.food.location ) ){
      app.snake.grow();
      app.food.create();
      app.score.currentScore += 1;
    }
  },


  // Step refers to a step of the game's animation state -- I am stepping through states.
  step: function(){
    // Clear old images on the canvas
    context.clearRect( 0, 0, 300, 300 );
    // Draw the score
    app.score.render();
    // Draw the food item
    app.movement.render( app.food.location, "red" );

    // The snake 'animates' by stepping the head forward by one space, and removing the tail segment.
    // Grow is a multi-use function -- It draws a new head, or can extend the snake if it hits food. In this case, it is used to step the head forward.
    app.snake.grow();
    app.snake.body.segments.pop();


    // Loop through all the snake's segments and render them to the canvas.
    app.snake.body.segments.forEach( function( segment ){
      // This hue change is just to get the rainbow effect on the snake.
      app.snake.body.hue += 1;
      var currentColor = "hsl( " + app.snake.body.hue + ", 100%, 50%)";
      app.movement.render( segment, currentColor );
    });
  }
}; // End movement


// Score is again its own self contained component. It tracks the user's progress and also handles its own rendering.

// This object notation is convenient for things like this, I don't need different variable names like app.movementRender() or app.textRender(), because they are their own objects. They both have a .render() that is unique to them -- naming is consistent *without* polluting the global namespace.
app.score = {
  currentScore: 0,
  render: function(){
    context.fillStyle = "black";
    context.font = "15px Arial";
    context.fillText( "Score: " + this.currentScore, 20, 20 );
  }
}

// Init doubles as a reset; it makes sure everything is in the right place and clears the timers responsible for animating the snake.
app.init = function(){
  app.score.currentScore = 0;
  app.food.create();
  app.snake.body.direction = "up";
  app.snake.body.alive = true;
  app.snake.body.segments = [{ x: 150, y: 150 },{ x: 150, y: 160 },{ x: 150, y: 170 }];
  clearInterval( app.counter );
  app.startMovement();
};

app.paused = false;

app.startMovement = function(){
  app.counter = window.setInterval( function(){
    if( app.snake.body.alive ){
        app.movement.step();
        app.movement.checkBounds();
      } else {
      clearInterval( app.counter );
    }
  }, 100 );
}

// ----------------------------------------------------------------
//                        Document event listeners
// ----------------------------------------------------------------


// Listen for keypresses, pass that key to the changeDirection function
window.onkeypress = function( event ){ 
  app.movement.changeDirection( event );
};

window.onload = function(){
  app.init();
}

// ----------------------------------------------------------------
//  Buttons:
// ----------------------------------------------------------------

document.querySelector( '#reset' ).onclick = function(){
  app.init();
};

// The pause button freezes the game state by clearing the interval on startMovement. To begin again, it's just a matter of setting that timer going again.

document.querySelector( '#pause' ).onclick = function(){
  if( app.paused ){
    app.startMovement();
    app.paused = false;
    this.innerText = "Pause";
  } else {
    clearInterval( app.counter );
    app.paused = true;
    this.innerText = "Start";
  }
};
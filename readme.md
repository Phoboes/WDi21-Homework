## Snek

#### The good news:
- I've done a lot of it for you.
- All that is required is to plug in some extra bits and bobs that you have already seen before, or to reuse content that is already there.

#### The bad news:
- I've done a lot of it for you.
- Reading code is often *harder* than writing it -- and I haven't annotated this at all (yet). Spend a little bit of time trying to understand roughly what is happening, and how things are separated (objects within objects). Calling the `app` variable in the console may help with this.

This warm-up was inspired by my etch-a-sketch warmup from the other day. There is nothing in here that you haven't seen before; there's just a bit more logic behind the scenes.

____

#### The code: [Clone this repository.](https://github.com/Phoboes/sssnek)

____
#### Tasks

- 1: Currently, our poor snek is blind. As you can see, as soon as we begin our program, he careens off into a wall and dies. Modify the code to accept a user's input (WASD) to guide snek away from walls and self harm, to the loving embrace of junk food (and inevitable death). 
  
- 2: If snek dies, there is currently no way to reset the game. Add a reset button.

- 3: Snek is now on a diet. Add a score so it can keep track of how many things it's eaten.

Tips:
- Task 1: Look at the etch-a-sketch code if you've forgotten how I wrote key detection. Feel free to steal it. To see what you should be changing, look at both the snake object and the `directionStep` function.

- Task 2: The code for this is already there. Have a look for something that is already resetting things -- then tie it to an HTML button or something.

- Task 3: I've coded none of this -- you are on your own.
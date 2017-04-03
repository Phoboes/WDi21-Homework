// Serge Says
// -------------------------------------------------------
// Serge answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.

// Create a function that takes an input and returns Serge's response.

// -------------------------------------------------------


var sergeSays = function( input ){

  // We need to check for undefined before our other conditions, otherwise lines like "input[ input.length - 1 ]" will throw an error before it ever gets checked.
  // (you can't call .length on undefined)

  if( input === undefined || input === '' ){
    console.log( "Fine, be that way!" );

  // We use "input.length - 1" because we need to be 1 character 
  // shorter than our input (because arrays start from 0).

  } else if ( input[ input.length - 1 ] === "?" ){
    console.log( "Sure." );

  // Lastly, we check if the input is equal to the input if it was in all caps.
  // Note: things like " '', '?', '1'" can't be capitalised, so they will always evaluate true.
    // "?" === "?" 
    //  => true. 

  } else if ( input === input.toUpperCase() ){
    console.log( "Whoa, chill out." );
  } else {
    console.log("Whatever.");
  }
};

sergeSays();
sergeSays( "" );

sergeSays( "Hey, are you Serge?" );
sergeSays( "I SAID, 'ARE YOU SERGE'!" );
sergeSays( "God, stop being so evasive, Serge." );
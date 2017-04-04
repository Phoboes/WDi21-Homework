// Serge Says
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

// var answer = ["Sure", "Woah, chill out!", "Fine. Be that way!", "Whatever."];
//
// // function question1(question, answer1) {
// //   return question + answer1;
// //   console.log(answer1);
// // }
//    if ( question = true ) {
//      console.log( answer[0]);
//       return answer1;
//    }
// // } else if () {
// //   console.log( "Woah, chill out!");
// // } else if () {
// //   console.log( "Fine, be that way!");
// // } else if () {
// //   console.log( "Whatever. ");
// // }

//KANES VERSION OF WARMUP

var sergeSays = function (input) {

  if (input === '' || input === undefined ){
    console.log( "Fine, be that way!" );
  }
  else if (input === input.toUppercase() ) {
    console.log( "Whoa, chill out");
  }
  else if (input [input.length - 1] === '?' ){
    console.log( "Sure.");
  } else {
    console.log( "Whatever, Trevor.");
  }
};

sergeSays();
sergeSays('');
sergeSays('test?');
sergeSays('TEST');
sergeSays('Columbian beans');


// var string = "hey?";

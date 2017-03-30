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

var sergeSays = function (string) {
  if (typeof string !== "string") {
    console.log("Whatever.");
  } else if (string.indexOf("?") !== 0 && string === string.toUpperCase() && string !== "") {
    console.log("Woah, chill out! Sure.");
  } else if (string.indexOf("?") !== -1) {
    console.log("Sure.");
  } else if (string === string.toUpperCase() && string !== "") {
    console.log("Woah, chill out!");
  } else if (string === "Serge" || string === "serge") {
    console.log("Fine. Be that way!");
  } else {
    console.log("Whatever.");
  }
};

sergeSays("SERGE?");

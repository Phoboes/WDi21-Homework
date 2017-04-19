////////////////////////////////////////////////////////////////////////////////
// The Recipe Card
// Exercise Link: https://gist.github.com/ga-wolf/10181616b156eee0ea2303ba08e3f075#exercises-objects
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe.
  //It should have properties for title (a string),
  //servings (a number),
  //and ingredients (an array of strings).

var recipe = {
  recipeTitle: "Mole",
  serves: 2,
  ingredients: [
  "cinnamon",
  "cumin",
  "cocoa"
  ]
};

//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var recipeTitle = recipe.recipeTitle;
  console.log(recipeTitle);
var serves = recipe.serves;
  console.log(serves);
var ingredientOne = recipe.ingredients[0];
  console.log(ingredientOne);
  var ingredientTwo = recipe.ingredients[1];
    console.log(ingredientTwo);
    var ingredientThree = recipe.ingredients[2];
      console.log(ingredientThree);

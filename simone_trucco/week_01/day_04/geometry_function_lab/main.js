// Geometry Function Lab
// Exercise Link: https://gist.github.com/wofockham/dacf2da17c743afb2b17
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//

var rectangle = {
  length: 4,
  width: 4
};


// isSquare - Returns whether the rectangle is a square or not

  var isSquare = function () {
    if ( rectangle.length === rectangle.width ) {
      console.log("Is Square!");
    } else {
      console.log("It's not square!");
    }
  };
isSquare();


// area - Returns the area of the rectangle

var area = function () {
  console.log( rectangle.length * rectangle.width );
}
area();

// perimeter - Returns the perimeter of the rectangle

var perimeter = function () {
  console.log( ( rectangle.length * 2 );
}
perimeter();


////////////////////////////////////////////////////////////
// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function () {
  if ( sideA === sideB && sideB === sideC ) {
    console.log("The triangle is EQUILATERAL");
  } else if (sideA === sideB && sideB ) {

  }

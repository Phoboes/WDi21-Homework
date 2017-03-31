// Geometry Function Lab
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


var rectangle = {
  length: 4,
  width: 4
};

//isSquare function
  //if length === width
    //output square
    //else - not square
var isSquare = function() {
  if (rectangle.length === rectangle.width) {
    console.log("The rectangle is a square.");
  } else {
    console.log("The rectangle is not square.");
  }
};
//call the isSquare function
isSquare();


//area function
  //multiply length * width
  //output result
var area = function() {
  var result = rectangle.length * rectangle.width;
  console.log("The area of the rectangle is: " + result + " units squared.");
};
//Call the area function
area();


// Perimeter function
  // (length * 2) + (width * 2)
    // output result
var perimeter = function() {
  var result = (rectangle.length * 2) + (rectangle.width * 2);
  console.log("The perimeter of the rectangle is: " + result + " units.");
};
// Call the perimter function
perimeter();


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 6,
  sideB: 6,
  sideC: 6
};

//isEquilateral function
  // Test if all sides are equal
    // If true, output equilateral
    // Else - not equilateral
var isEquilateral = function() {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    console.log("The triangle is equilateral");
  } else {
    console.log("The triangle is not equilateral");
  }
};
//call the function
isEquilateral();


//isIsosceles function
  //use if statements to check which if only 2 sides are equal and one is not.
    //if true, output is isosceles
    //else - not isosceles
var isIsosceles = function () {
  if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC) {
    console.log("The triangle is isosceles");
  } else if (triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB) {
      console.log("The triangle is isosceles");
  } else if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) {
      console.log("The triangle is isosceles");
  } else {
    console.log("The triangle is not isosceles");
  }
};
//Call the function
isIsosceles();

// area function
// use heron's formula - create var halfPerimeter then math.sqrt to output value
var areaTri = function() {
  var halfPer = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  var result = Math.sqrt(halfPer * (halfPer - triangle.sideA) * (halfPer - triangle.sideB) * (halfPer - triangle.sideC));
  result = result.toFixed(2);
  console.log("The area of the triangle is " + result + " units squared.");
}
// Call the function
areaTri();


//is obtuse function
  //Need to work out how to use the acos method in JS
console.log(Math.acos(0.25));

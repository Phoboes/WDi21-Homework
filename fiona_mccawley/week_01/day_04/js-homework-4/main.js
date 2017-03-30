// console.log("boing");


// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below,
// write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
var isSquare = function (length, width) {
  if (length === width) {
    console.log("It's a square");
  } else {
    console.log("It's a rectangle");
  }
};

isSquare(10, 11);
// area - Returns the area of the rectangle

var rectangleArea = function (length, width) {
  area = length * width;
  console.log(area);
  return area;
};

rectangleArea(4, 11);

// perimeter - Returns the perimeter of the rectangle

var perimeterOfRectangle = function (length, width) {
  perimeter = (length * 2) + (width * 2);
  console.log(perimeter);
  return perimeter;
};

perimeterOfRectangle(3, 20);


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not

var isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    console.log("This is an equilateral triangle");
  } else {
    console.log("This is not an equilateral triangle");
  }
};
isEquilateral(4, 4, 4);

// isIsosceles - Returns whether the triangle is isosceles or not

var isIsosceles = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideA !== sideC) {
    console.log("This is an isosceles triangle");
  } else if (sideA === sideC && sideA !== sideB) {
    console.log("This is an isosceles triangle");
  } else if (sideB === sideC && sideB !== sideA) {
    console.log("This is an isosceles triangle");
  } else {
    console.log("this is not an isosceles triangle");
  }
};

isIsosceles(2, 2, 3)

// area - Returns the area of the Triangle

var triangleArea = function (sideA, sideB, sideC) {
  var p = (sideA + sideB + sideC) / 2;
  console.log(p);
  var y = p * (p - sideA) * (p - sideB) * (p - sideC);
  var area = Math.sqrt(y);
  console.log(area);
  return area;
}
triangleArea(3, 4, 5)

// isObtuse - Returns whether the triangle is obtuse or not
//Pythagorean theory
// sideA squared + sideB squared < sideC squared = obtuse

var isObtuse = function (sideA, sideB, sideC) {
  
}

// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

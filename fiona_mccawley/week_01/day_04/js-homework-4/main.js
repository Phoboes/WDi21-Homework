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

isIsosceles(2, 2, 3);

// area - Returns the area of the Triangle
// area of a triangle
//find half of the perimeter assign that as a variable, so
// add the 3 sides and divide by 2.
// Then minus each side from the permiter and multiply that as well as x p, i'll
//assign that to a variable.
// Then find the square root of that

var triangleArea = function (sideA, sideB, sideC) {
  var p = (sideA + sideB + sideC) / 2;
  console.log(p);
  var y = p * (p - sideA) * (p - sideB) * (p - sideC);
  var area = Math.sqrt(y);
  console.log(area);
  return area;
}
triangleArea(3, 4, 5);

// isObtuse - Returns whether the triangle is obtuse or not
//Pythagorean theory
// sideA squared + sideB squared < sideC squared = obtuse

var isObtuse = function (sideA, sideB, sideC) {
  var x = Math.pow(sideA, 2);
  var y = Math.pow(sideB, 2);
  var z = Math.pow(sideC, 2);
  if (x + y < z) {
    console.log("This triangle is obtuse");
  } else {
    console.log("This triangle is not obtuse");
  }
}

isObtuse(3, 2, 2);

// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };



// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.
// Example
//
// // Input
// var cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//create a function for total shop cost
var totalShopCost = function () {
//create a undefined variable, to capture the amounts that are returned with
//each iteration
  var retNum = '';
//I want to create a loop to go through each object property
  for (var i = 0;  i < cartForParty.length; i += 1) {
//I want to store the value returned into the undefined variable
    retNum += cartForParty[i];
//log that total
    console.log(retNum);
  }
}
totalShopCost();

// How to iterate through an object
//
// Object.keys(newObject); // Returns an array of all the keys in the specified object.
// Object.getOwnPropertyNames(newObject); // So does this
//
// var obj = {
// a: 1,
// b: 2,
// c: 3
// };
//
// for (var prop in obj) {
// console.log( "o." + prop + " = " + obj[prop] );
// }



// Credit Card Validation
//
// You're starting your own credit card business.
// You've come up with a new way to validate credit cards
// with a simple function called validateCreditCard that returns true or false.

// var validateCreditCard = function (cardNumber) {
//   var cardMinusDash = cardNumber.slice  ("-", "");
//   console.log(cardMinusDash);
//   var num = parseInt(cardNumber);
//   console.log(num);
// };
// validateCreditCard("9999-9999-8888-0000")

// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666

// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking
// if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced!
// What are the rules, and what are some numbers that pass or fail?
// Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

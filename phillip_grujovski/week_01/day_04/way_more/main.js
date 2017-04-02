// GEOMETRY FUNCTION LAB

// Part 1, Rectangle
var rectangle = {
    length: 4,
    width: 4
};

var l = rectangle.length;
var w = rectangle.width;

function isSquare() {
    return l === w ? "Is a square." : "Not a square";
}

function area() {
    return l * w;
}

function perimeter() {
    return 2 * (l + w);
}

// Part 2, Triangle

var triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

var sA = triangle.sideA;
var sB = triangle.sideB;
var sC = triangle.sideC;

function isEquilateral() {
    return (sA === sB) && (sA === sC) ? "This is an Equilateral triangle!" : "This is not an Equilateral triangle.";
}

function isIsosceles() {
    return (sA === sA) || (sA === sC) || (sB === sC) ? "Is isosceles" : "Not an isosceles";
}

function area() {
    var p = (sA + sB + sC)/2;
    return Math.sqrt(p*(p-sA)*(p-sB)*(p-sC));
}

function isObtuse() {
    var x = Math.pow(sA, 2) + Math.pow(sB, 2);
    var y = Math.pow(sC, 2);
    return x < y ? "This is an obtuse triangle" : "Not an obtuse triangle";
}

// ---------------------------------------------------------

// The Cash Register

var compParts = {
    cpu: 500.00,
    gpu: 1100.00,
    mobo: 650.00,
    ram: 300.00,
    ssd: 2100
};

function cashRegister(arr) {
    var total = 0;
    for (var key in arr) {
        total += arr[key];
    }
    return total;
}

// -----------------------------------------------------------

// Credit Card Validation
    // TODO

// -----------------------------------------------------------

// JavaScript Bank
    // TODO
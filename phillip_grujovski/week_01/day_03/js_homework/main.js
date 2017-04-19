// The Calculator

// PART 1
function squareNumber(num) {
    console.log("The result of squaring the number " + num + " is " + Math.pow(num, 2));
    return Math.pow(num, 2);
}

function halfNumber(num) {
    console.log("Half of " + num + " is " + num / 2);
    return num / 2;
}

function percentOf(num1, num2) {
    console.log(num1 + " is " + ((num1 / num2) * 100).toFixed(2) + "% of " + num2);
    return ((num1 / num2) * 100).toFixed(2);
}

function areaOfCircle(radius) {
    console.log("The area for a circle with a radius of " + radius + " is " + (Math.PI * Math.pow(radius, 2)).toFixed(2));
    return (Math.PI * Math.pow(radius, 2)).toFixed(2);
}

// PART 2

function calculator(num){
    var half = halfNumber(num);
    var square = squareNumber(half);
    var area = areaOfCircle(square);
    percentOf(square, area);
    return "Calculator finished!";
}

// ---------------------------------------------------------------------------------

// STRINGS

// DrEvil
function drEvil(amount) {
    return amount === 1000000 ? amount + " dollars (pinky)" : amount + " dollars";
}

// ----------------------------------------------------------------------------------

// MIX UP
function mixUp(str1, str2) {
    return str1.replace(str1.slice(0,2), str2.slice(0,2)) + " " + 
            str2.replace(str2.slice(0,2), str1.slice(0,2));
}

// ------------------------------------------------------------------------------------

// FixStart
function fixStart(str) {
    var cArray = str.toLowerCase().split('');
    for (var i = 1; i < cArray.length; i++) {
        if (cArray[i] === cArray[0]) {
            cArray[i] = "*";
        }
    }
    return cArray.join('');
}

// ----------------------------------------------------------------------------------------

// Verbing
function verbing(str) {
    if (str.length >= 3) {
        if(str.substring(str.length-3, str.length) === "ing") {
            return str + "ly";
        }
        return str + "ing";
    }
    else {
        return str;
    }
}

// -------------------------------------------------------------------------------------

// Not Bad
function notBad(str) {
    var n = str.indexOf("not");
    var b = str.indexOf("bad");
    if ( b < n || b == -1 || n == -1) {
        return str;
    }
    var x = str.slice(0, n);
    var y = str.slice(b + 3);
    return x + "good" + y;
}
// ARRAY AND FUNCTIONS BONUS MATERIAL

// 1.
function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 2.
function maxOfThree(num1, num2, num3) {
    var array = [num1, num2, num3];
    return array.sort(function(a,b) {return a > b}).pop();
}

// 3.
function isVowel(c) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(c) !== -1 ? true : false;
}

// 4.
function sumArray(arr) {
    return arr.reduce(function(a,b) {return a + b}, 0);
    // OR
    // var total = 0;
    // for(var i in arr) {
    //     console.log(total += arr[i]);
    // }
}

function multiplyArray(arr) {
    return arr.reduce(function(a,b) {return a * b}, 1);
}

// 5.
function reverseString(str) {
    var split = str.split('');
    var reverse = split.reverse()
    var join = reverse.join('');
    return join;

}

// 6.
function longestWord(str) {
    return str.split(' ').sort(function(a,b) { return a.length - b.length;}).pop();
}

// 7.
function filterLongWords(str, n) {
    var split = str.split(" ");
    var arr = [];
    for(var i=0; i<split.length; i++) {
        if(split[i].length > n) {
            arr.push(split[i]);
        }
    }
    return arr;
}

// -------------------------------------------------------

// HOMEWORK: THE WORD GUESSER

var word = ["F", "O", "X"];
var guessed = ["_", "_", "_"];

function guessLetter(c) {
    var isCorrectGuess = false;
    var isFinished = false;
    for (var i = 0; i < word.length; i++) {
        if(word[i] === c) {
            guessed[i] = c;
            isCorrectGuess = true;
        }
        if(guessed[i] === '_') {
            isFinished = true;
        }
    }
    if(isCorrectGuess === true){
        console.log("You found a letter.", "\n", guessed.join(''));
        if(isFinished === false) {
            console.log("You win.");
        }
    } else {
        console.log("Incorrect guess.");
    }
}

// Bonus: Wheel of fortune
    // TODO

// Bonus: Hangman
    // TODO

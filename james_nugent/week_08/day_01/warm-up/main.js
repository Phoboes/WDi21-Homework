// The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
//
// An Atbash cipher for the Latin alphabet would be as follows:
//
// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
//
// Examples
//
// Encoding "test" gives "gvhg"
// Decoding "gvhg" gives "test"

var plain = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's','t', 'u',
            'v', 'w', 'x', 'y', 'z'];

var cipher = ['z', 'y', 'x', 'w', 'v', 'u', 't',
            's', 'r', 'q', 'p', 'o', 'n', 'm',
            'l', 'k', 'j', 'i', 'h','g', 'f',
            'e', 'd', 'c', 'b', 'a'];

var cipherArray = [];
var code = "";

var encoder = function ( str ) {
            console.log( str );
            var input = str.split("");
            for (var i = 0; i < input.length; i++) {
                        var currentLetter = input[i];
                        var index = plain.indexOf(currentLetter);
                        cipherArray.push(cipher[index]);
            }
 code = cipherArray.join("");
};

encoder ("james");
console.log(code);

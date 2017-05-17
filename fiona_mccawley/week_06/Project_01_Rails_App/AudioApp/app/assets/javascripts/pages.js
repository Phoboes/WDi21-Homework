// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function () {
      // (function (window, document) {
            document.getElementById('toggle').addEventListener('click', function (e) {
                        // debugger
                e.preventDefault();
                $('#tuckedMenu').toggleClass('custom-menu-tucked');
                $('#toggle').toggleClass('x');
            });
      // })(this, this.document);

});

$('#idnameHere').toggleClass('class')
// console.log("Hello, world")

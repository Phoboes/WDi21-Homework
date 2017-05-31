// Make sure that all of the elements have loaded
// Find the range input
// Everytime hat input changes values
  // We want to get the current values
  // We want to change the base font size for the page

window.onload = function() {

  var rangeSlider = document.querySelector("input");
  var htmlEL = document.querySelector("html");
  var onSlide = function() {

    var currentValue = rangeSlider.value;
    htmlEL.style.fontsize = currentValue + px;

  };

rangeSlider.addEventListener( "change", onSlide );

};

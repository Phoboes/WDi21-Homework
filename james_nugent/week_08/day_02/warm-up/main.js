//Chess vs Grain

var grainCount = [];

var sum = 0;

var firstSquare = 1;

var counter = function(num) {

  grainCount.push(firstSquare);

  for (var i = 2; i <= num; i++) {
    var numberOfGrain = _.last(grainCount) * 2;
    grainCount.push(numberOfGrain);
  }
  for (var s = 0; s < grainCount.length; s++) {
    sum += grainCount[s];
  }
};

counter(64);
console.log(grainCount);
console.log(sum);

s1 = function ( num ) {
  if (num % 2 === 0) {
    console.log(0);
  } else {
    console.log(1);
  }
};

s1(3);


var nums = [];
var sum = 0;

s2 = function ( count ) {
  for ( var n = 1; n < count + 1; n++ ) {
    nums.push(n);
  }
  for (var s = 0; s < nums.length; s++) {
    sum += nums[s];
  }
  console.log(sum);
};

s2(2);

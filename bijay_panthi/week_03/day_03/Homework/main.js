// console.log("Loaded");
//
//
// // var bill = document.querySelector("#bill");
// var cat = document.querySelector("#img");
// console.log(cat);
//
// cat.style.opacity=1.0;
//
// var makeCatFade = function(){
//   cat.style.opacity -=0.01;
//
// };
//
// var moveCat = function(){
//   var currentLeft = parseInt(cat.style.left);
//   var desiredLeft = currentLeft +1;
//   cat.style.left = desiredLeft + "px";
// };
//
// window.setInterval(moveCat,30);
//
//
//
// // bill.style.opacity = 1.0;
// //
// // var makeBillFade = function () {
// //   bill.style.opacity -= 0.01;
// // };
// //
// //
// // var bill = document.querySelector("#bill");
// // bill.style.position = "absolute";
// // bill.style.top = "0px";
// // bill.style.left = "0px";
// //
// // var moveBill = function () {
// //   // "10px" --- > 10
// //   var currentLeft = parseInt( bill.style.left );
// //   var desiredLeft = currentLeft + 1;
// //
// //   bill.style.left = desiredLeft + "px";
// // };
// // // moveBill();
// //
// // window.setInterval( moveBill, 30 );
/*

var animate, left=0, imgObj=null;

function init(){

   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'absolute';
   imgObj.style.top = '240px';
   imgObj.style.left = '-300px';
   imgObj.style.visibility='hidden';

   moveRight();
}

function moveRight(){
    left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
        stop();
    }
    //f();
}

function stop(){
   clearTimeout(animate);
}

window.onload = function() {init();};


*/

//var animate, left=0, cat=null;

function init(){

   cat = document.querySelector('#catImage');
   cat.style.position= 'absolute';
   cat.style.top = '0px';
   cat.style.left = '5px';
   cat.style.right ='5px';
   //cat.style.visibility='hidden';

   moveRight();
   moveLeft();
}

function moveRight(){
    left = parseInt(cat.style.left, 10);


        cat.style.left = (left + 5) + 'px';
        cat.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec
}

window.onload = function() {init();};

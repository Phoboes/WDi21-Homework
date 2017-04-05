var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// var cats = {
//     flashingCat: document.querySelectorAll("img")[0],
//     staticCat: document.querySelectorAll("img")[1],
    
//     // FLASHING CAT
//     flashingCatSetup: {
//         setFlashingCatStartPosition: function() {
//             var cat = cats.flashingCat;
//             cat.style.position = "absolute";
//             cat.style.right = "0px";
//             cat.style.left = "0px";
//             cat.style.top = "40%";
//         },
//         walkFlashingCatForward: function() {
//             var currentLeft = parseInt(cats.flashingCat.style.left);
//             if(currentLeft < windowWidth) {           
//                 var desiredLeft = currentLeft + 150;
//                 cats.flashingCat.style.left = desiredLeft + "px";
//             }
//             else{
//                 clearInterval(f);
//                 window.setInterval(cats.flashingCatSetup.walkFlashingCatBackward, 100);
//             }
//         },
//         walkFlashingCatBackward: function() {    
//             if(currentLeft > windowWidth) {
//                 var currentLeft = parseInt(cats.flashingCat.style.left);
//                 var desiredLeft = currentLeft - 50;
//                 cats.flashingCat.style.left = desiredLeft + "px"; 
//             } else {
//                 this.fw;
//                 clearInterval(this.fb);
//                 return
//             }
//         }
//     },

//     // STATIC CAT
//     staticCatSetup: {
//         setStaticCatStartPosition: function() {
//             var cat = cats.staticCat;
//             cat.style.position = "absolute";
//             cat.style.right = "0px";
//             cat.style.top = "40%";
//         },
//         walkStaticCatForward: function() {
//             var currentRight = parseInt(cats.staticCat.style.right);
//             var desiredRight = currentRight + 10;
//             cats.staticCat.style.right = desiredRight + "px";
//         },
//         walkStaticCatBackwards: function() {
            
//         }
//     },
// };


// cats.flashingCatSetup.setFlashingCatStartPosition();
// var f = window.setInterval(cats.flashingCatSetup.walkFlashingCatForward, 100);



var body = document.body;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var walkRight;
var walkLeft;

var walkingCat = document.querySelector("img");
walkingCat.style.position = "absolute";
walkingCat.style.left = "0px";
walkingCat.style.top = "40%";

function walkCatRight() {
    var currentLeft = parseInt(walkingCat.style.left);
    var desiredLeft = currentLeft + 200;
    walkingCat.style.left = desiredLeft + "px";
    if(currentLeft > windowWidth) {
        clearInterval(walkRight);
        walkLeft = setInterval(walkCatLeft, 500);
    }
}

function walkCatLeft() {
    var currentLeft = parseInt(walkingCat.style.left);
    var desiredLeft = currentLeft - 200;
    walkingCat.style.left = desiredLeft + "px";
    if(currentLeft < 0) {
        clearInterval(walkLeft);
        walkRight = setInterval(walkRight, 500);
    }
}

function setIntervalAndExecute(func, t) {
    func();
    return(setInterval(func, t));
}


walkRight = setInterval(walkCatRight, 500);

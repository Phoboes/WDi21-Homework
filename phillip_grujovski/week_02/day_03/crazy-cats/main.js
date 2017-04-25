var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var flashingDelta = 10;
var staticDelta = 10;
var scaredDelta = 10;
var dogDelta = 10;


var flashingCat = document.querySelectorAll("img")[0];
flashingCat.style.position = "absolute";
flashingCat.style.left = "0px";
flashingCat.style.top = "40%";

var staticCat = document.querySelectorAll("img")[1];
staticCat.style.position = "absolute";
staticCat.style.right = "0px";
staticCat.style.top = "40%";

var scaredCat = document.querySelectorAll("img")[2];
scaredCat.style.position = "absolute";
scaredCat.style.right = "0px";
scaredCat.style.bottom = "0px";
scaredCat.style.width = "200px";

var breadDog = document.querySelectorAll("img")[3];
breadDog.style.position = "absolute";
breadDog.style.right = "0px";
breadDog.style.top = "0px";

var trumpo = document.querySelectorAll("img")[4];
trumpo.style.position = "absolute";
trumpo.style.left = "10%"
trumpo.style.top = "10%";
trumpo.style.width = "1200px";
trumpo.style.zIndex = "-1";
trumpo.style.visibility = "visible";


function walkFlashingCat() {
    var currentLeft = parseInt(flashingCat.style.left);
    var desiredLeft = currentLeft + flashingDelta;
    if(desiredLeft < windowWidth - 230) {
        if(desiredLeft < 0 ) {
            flashingDelta = 10;
        }
        flashingCat.style.left = desiredLeft + "px";
    } else {
        flashingDelta = -10;
    }
}

function walkStaticCat() {
    var currentRight = parseInt(staticCat.style.right);
    var desiredRight = currentRight +  staticDelta;
    if(desiredRight < windowWidth - 230 ) {
        if(desiredRight < 0) {
            staticDelta = 10;
        }
        staticCat.style.right = desiredRight + "px";
    } else {
        staticDelta = -10;
    }
}

function animateScaredCat() {
    var currentWidth = parseInt(scaredCat.style.width);
    var desiredWidth = currentWidth + scaredDelta;
    if(desiredWidth < 800) {
        if(desiredWidth === 0){
            scaredDelta = 10;
        }
        scaredCat.style.width = desiredWidth + "px";
    } else {
        scaredDelta = -10;
    }
}

function flashTrump() {
    if(trumpo.style.visibility === "hidden") {
        trumpo.style.visibility = "visible";
    } else {
        trumpo.style.visibility = "hidden";
    }
}

setInterval(flashTrump, 100);
setInterval(animateScaredCat, 1);
setInterval(walkStaticCat, 1);
setInterval(walkFlashingCat, 1);

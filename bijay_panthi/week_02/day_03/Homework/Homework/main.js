
    var img = document.getElementsByTagName('img')[0];
    img.style.left = '0px';
    var walkForwards = true;

    function catWalk() {
        var currentLeft = parseInt(img.style.left);

        if (walkForwards && (currentLeft > (window.innerWidth - img.width))) {
            walkForwards = false;

        }
        if (!walkForwards && (currentLeft <= 0)) {
            walkForwards = true;
        }

        if (walkForwards) {
            img.style.left = (currentLeft + 10) + 'px';
            img.style.transform = "rotateX(400deg)";
        } else {
            img.style.left = (currentLeft - 10) + 'px';
            img.style.transform = "rotateY(600deg)";
        }
        //if (setInterval < window.innerWidth){
        //img.style.visibility ="hidden";
    }
    window.setInterval(catWalk, 50);
    // setTimeout(function() {
    // document.querySelector('#img1').style.display='none'}, 2900);




// $(document).ready(function() {
//
//     function catLeft() {
//         $("#catImage").animate({left: "-=850"}, 3000, catRight);
//     }
//     function catRight() {
//         $("#catImage").animate({left: "+=850"}, 3000, catLeft);
//     }
//     catRight();
// });

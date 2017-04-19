var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
function catWalk() {
  img.style.left = (parseInt(img.style.left) + 10) + 'px';
}
window.setInterval(catWalk, 50);

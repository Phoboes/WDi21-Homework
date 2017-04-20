function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  var id2 = setInterval(frame,100);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos++;
      //elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

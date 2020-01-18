var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var position = 0;
setInterval(function() {
  /*1*/ ctx.clearRect(0, 0, 200, 200);

  /*2*/ ctx.fillRect(position, 0, 20, 20);

  /*3*/ position++;
  /*4*/ if (position > 200) {
    position = 0;
  }
  /*5*/
}, 30);

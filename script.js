var Ball = function(x, y, xSpeed, ySpeed) {
  this.x = x | 100;
  this.y = y | 100;
  this.xSpeed = xSpeed | -2;
  this.ySpeed = ySpeed | 3;
};
var circle = function(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};
Ball.prototype.draw = function() {
  circle(this.x, this.y, 3, true);
};
Ball.prototype.move = function() {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};
Ball.prototype.checkCollision = function() {
  if (this.x < 0 || this.x > 200) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < 0 || this.y > 200) {
    this.ySpeed = -this.ySpeed;
  }
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// for (var i = 0; i < 10; i++) {
//   ctx.fillCircle( i *10, i *10, 10,10)
// }
var balls = [
  new Ball(100, 100, 4, 6),
  new Ball(100, 100, -40, -6),
  new Ball(100, 30, -4, 30),
  new Ball(100, 100, -4, 2),
  new Ball(10, 100, 2, 6),
  new Ball(100, 120, 0, 6)
];

setInterval(function() {
  ctx.clearRect(0, 0, 200, 200);

  for (i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
  }

  ctx.strokeRect(0, 0, 200, 200);
}, 30);

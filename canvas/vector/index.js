let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('mycanvas'));
let ctx = canvas.getContext('2d');

let ww = (canvas.width = window.innerWidth);
let wh = (canvas.height = window.innerHeight);

function drawVector(v, trans) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.save();
  ctx.rotate(v.angle());
  ctx.fillText(v, v.length() / 2, 10);
  ctx.lineTo(v.length(), 0);
  ctx.lineTo(v.length() - 5, -4);
  ctx.lineTo(v.length() - 5, +4);
  ctx.lineTo(v.length(), 0);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;

  ctx.stroke();
  ctx.restore();

  if (trans) {
    ctx.translate(v.x, v.y);
  }
}
function draw() {
  ctx.clearRect(0, 0, ww, wh);
  let c = new Vector(ww / 2, wh / 2);
  ctx.restore();
  ctx.save();
  ctx.translate(ww / 2, wh / 2);

  drawVector(mousePos.sub(c).mul(100 / mousePos.sub(c).length()));
  ctx.restore();
}

setInterval(draw, 30);
let mousePos;

canvas.addEventListener('mousemove', e => {
  mousePos = new Vector(e.x, e.y);
});

console.clear();

let Vector = function(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  return this;
};

Vector.prototype.add = function(v) {
  return new Vector(this.x + v.x, this.y + v.y);
};

Vector.prototype.sub = function(v) {
  console.log('x', this.x, 'y', this.y);

  return new Vector(this.x - v.x, this.y - v.y);
};

Vector.prototype.toString = function(v) {
  return `(${this.x},${this.y})`;
};

Vector.prototype.mul = function(s) {
  this.x * s;
  this.y * s;
  return new Vector(this.x * s, this.y * s);
};

Vector.prototype.length = function() {
  let temp = Math.pow(this.x, 2) + Math.pow(this.y, 2);
  return Math.sqrt(temp);
};

Vector.prototype.set = function(x, y) {
  this.x = x;
  this.y = y;
  return this;
};

Vector.prototype.equal = function(v) {
  return this.x === v.x && this.y === v.y;
};

Vector.prototype.clone = function(v) {
  return new Vector(this.x, this.y);
};

Vector.prototype.angle = function() {
  return Math.atan2(this.y, this.x);
};

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

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('myCanvas'));
let ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
let ww = (canvas.width = window.innerWidth);
let wh = (canvas.height = window.innerHeight);

window.addEventListener('resize', () => {
  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;
});

var Ball = function() {
  this.p = new Vector(ww / 2, wh / 2);
  this.v = new Vector(5, 0);
  this.a = new Vector(0, 0.6);
  this.r = 50;
  this.dragging = false;
};

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.save();
  ctx.translate(this.p.x, this.p.y);
  ctx.arc(0, 0, this.r, 0, Math.PI * 2);
  ctx.fillStyle = controls.color;
  ctx.fill();
  ctx.restore();
};

Ball.prototype.drawV = function() {
  ctx.beginPath();
  ctx.save();
  ctx.translate(this.p.x, this.p.y);
  ctx.scale(3, 3);
  ctx.moveTo(0, 0);
  ctx.lineTo(this.v.x, this.v.y);
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(this.v.x, 0);
  ctx.strokeStyle = 'red';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, this.v.y);
  ctx.strokeStyle = 'green';
  ctx.stroke();
  ctx.restore();
};

Ball.prototype.update = function() {
  //更新位置
  this.p = this.p.add(this.v);
  //更新速度
  this.v = this.v.add(this.a);
  this.v = this.v.mul(controls.fade);

  this.checkBoundary();

  controls.vx = this.v.x;
  controls.vy = this.v.y;
  controls.ay = this.a.y;
};

Ball.prototype.checkBoundary = function() {
  if (this.p.x + this.r > ww) {
    this.v.x = -Math.abs(this.v.x);
  }
  if (this.p.x - this.r < 0) {
    this.v.x = Math.abs(this.v.x);
  }
  if (this.p.y + this.r > wh) {
    this.v.y = -Math.abs(this.v.y);
  }
  if (this.p.y - this.r < 0) {
    this.v.y = Math.abs(this.v.y);
  }
};

let controls = {
  vx: 0,
  vy: 0,
  ay: 0.6,
  fade: 0.99,
  update: true,
  color: '#fff',
  step: function() {
    ball.update();
  },
  FPS: 30
};

let gui = new dat.GUI();
gui
  .add(controls, 'vx', -50, 50)
  .listen()
  .onChange(value => {
    ball.v.x = value;
  });
gui
  .add(controls, 'vy', -50, 50)
  .listen()
  .onChange(value => {
    ball.v.y = value;
  });
gui
  .add(controls, 'ay', 0, 2)
  .listen()
  .onChange(value => {
    ball.a.y = value;
  });
gui
  .add(controls, 'fade', 0, 1)
  .step(0.01)
  .listen();
gui.add(controls, 'update');
gui.addColor(controls, 'color');
gui.add(controls, 'step');
gui.add(controls, 'FPS', 1, 120);

let ball;

function init() {
  ball = new Ball();
}
init();

function update() {
  if (controls.update) {
    if (!ball.dragging) {
      ball.update();
    }
  }
}
setInterval(update, 30);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.8)';
  ctx.fillRect(0, 0, ww, wh);

  ball.draw();
  ball.drawV();
  setTimeout(draw, 1000 / controls.FPS);
}

draw();

function getDistance(p1, p2) {
  let temp1 = p1.x - p2.x;
  let temp2 = p1.y - p2.y;
  let dist = Math.pow(temp1, 2) + Math.pow(temp2, 2);
  return Math.sqrt(dist);
}

let mousePos = { x: 0, y: 0 };
canvas.addEventListener('mousedown', e => {
  mousePos = new Vector(e.x, e.y);
  let dist = mousePos.sub(ball.p).length();
  if (dist < ball.r) {
    ball.dragging = true;
  }
});

canvas.addEventListener('mousemove', e => {
  let nowPos = new Vector(e.x, e.y);
  if (ball.dragging) {
    let delta = nowPos.sub(mousePos);

    ball.p = ball.p.add(delta);

    ball.v = delta.clone();
  }

  let dist = getDistance(nowPos, ball.p);
  if (dist < ball.r) {
    canvas.style.cursor = 'move';
  } else {
    canvas.style.cursor = 'initial';
  }
  mousePos = { x: e.x, y: e.y };
});

canvas.addEventListener('mouseup', e => {
  ball.dragging = false;
  canvas.style.cursor = 'initial';
});

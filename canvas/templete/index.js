//環境變數
var updateFPS = 30;
var showMouse = true;
var time = 0;
var bgColor = 'black';

//控制
var controls = {
  value: 0
};
var gui = new dat.GUI();
gui
  .add(controls, 'value', -2, 2)
  .step(0.01)
  .onChange(function(value) {});

//------------------------
// Vec2

class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  add(v) {
    return new Vec2(this.x + v.x, this.y + v.y);
  }
  sub(v) {
    return new Vec2(this.x - v.x, this.y - v.y);
  }
  mul(s) {
    return new Vec2(this.x * s, this.y * s);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  set length(nv) {
    let temp = this.unit.mul(nv);
    this.set(temp.x, temp.y);
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
  equal(v) {
    return this.x == v.x && this.y == v.y;
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  get unit() {
    return this.mul(1 / this.length);
  }
}
var a = new Vec2(3, 4);

//------

var canvas = /** @type {HTMLCanvasElement} */ document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
ctx.circle = function(v, r) {
  this.arc(v.x, v.y, r, 0, Math.PI * 2);
};
ctx.line = function(v1, v2) {
  this.moveTo(v1.x, v1.y);
  this.lineTo(v2.x, v2.y);
};

function initCanvas() {
  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;
}
initCanvas();

function init() {}
function update() {
  time++;
}
function draw() {
  //清空背景
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, ww, wh);

  //-------------------------
  //   在這裡繪製

  //-----------------------
  //繪製滑鼠座標

  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.circle(mousePos, 2);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.translate(mousePos.x, mousePos.y);
  ctx.strokeStyle = 'red';
  let len = 20;
  ctx.line(new Vec2(-len, 0), new Vec2(len, 0));
  ctx.line(new Vec2(0, -len), new Vec2(0, len));
  ctx.fillText(mousePos, 10, -10);
  ctx.stroke();
  ctx.restore();

  //schedule next render

  requestAnimationFrame(draw);
}
function loaded() {
  initCanvas();
  init();
  requestAnimationFrame(draw);
  setInterval(update, 1000 / updateFPS);
}
window.addEventListener('load', loaded);
window.addEventListener('resize', initCanvas);

//滑鼠事件跟紀錄
var mousePos = new Vec2(0, 0);
var mousePosDown = new Vec2(0, 0);
var mousePosUp = new Vec2(0, 0);

window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseup', mouseup);
window.addEventListener('mousedown', mousedown);
function mousemove(evt) {
  mousePos.set(evt.offsetX, evt.offsetY);
  // console.log(mousePos)
}
function mouseup(evt) {
  mousePos.set(evt.offsetX, evt.offsetY);
  mousePosUp = mousePos.clone();
}
function mousedown(evt) {
  mousePos.set(evt.offsetX, evt.offsetY);
  mousePosDown = mousePos.clone();
}

//環境變數
var updateFPS = 30;
var showMouse = true;
var time = 0;
var bgColor = 'black';

//控制
var controls = {
  value: 0,
  gcount: 3,
  ay: 0.6,
  ax: -0.6,
  fade: 0.96,
  v: 20,
  clearForce: function() {
    forcefields = [];
  }
};
var gui = new dat.GUI();
gui
  .add(controls, 'value', -2, 2)
  .step(0.01)
  .onChange(function(value) {});

gui
  .add(controls, 'gcount', 0, 30)
  .step(1)
  .onChange(function(value) {});

gui
  .add(controls, 'ay', -1, 1)
  .step(0.01)
  .onChange(function(value) {});

gui
  .add(controls, 'fade', 0, 1)
  .step(0.01)
  .onChange(function(value) {});
gui.add(controls, 'clearForce');
class Particle {
  constructor(args) {
    let def = {
      p: new Vec2(0, 0),
      v: new Vec2(1, 1),
      a: new Vec2(0, 0),
      r: 10,
      color: '#fff'
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
    ctx.translate(this.p.x, this.p.y);
    ctx.beginPath();
    ctx.arc(0, 0, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
  update() {
    this.p = this.p.add(this.v);
    this.v = this.v.add(this.a);
    this.v.move(0, controls.ay);

    this.v = this.v.mul(0.99);
    this.r *= controls.fade;

    if (this.p.y + this.r >= wh) {
      this.v.y = -Math.abs(this.v.y);
    }
    if (this.p.y - this.r <= 0) {
      this.v.y = Math.abs(this.v.y);
    }
    if (this.p.x + this.r >= ww) {
      this.v.x = -Math.abs(this.v.x);
    }
    if (this.p.x - this.r <= 0) {
      this.v.x = Math.abs(this.v.x);
    }
  }
}

class Forcefield {
  constructor(args) {
    let def = {
      p: new Vec2(),
      value: -100
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
    ctx.translate(this.p.x, this.p.y);
    ctx.beginPath();
    ctx.arc(0, 0, Math.sqrt(Math.abs(this.value)), 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  }
  affect(particle) {
    let delta = particle.p.sub(this.p);
    let len = this.value / (0.001 + delta.length);
    let force = delta.unit.mul(len);
    particle.v.move(force.x, force.y);
  }
}
//------------------------
// Vec2

class Vec2 {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
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

var canvas = document.getElementById('mycanvas');
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

let particles = [];
let forcefields = [];

function init() {}

function update() {
  time++;
  particles = particles.concat(
    Array.from({ length: controls.gcount }, (d, i) => {
      return new Particle({
        p: mousePos.clone(),
        v: new Vec2(Math.random() * controls.v - controls.v / 2, Math.random() * controls.v - controls.v / 2),
        r: Math.random() * 20,
        color: `rgb(255,${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 150)})`
      });
    })
  );
  particles.forEach(p => {
    p.update();
  });

  particles = particles.filter(e => {
    return e.r > 0.5;
  });

  particles.map(p => {
    forcefields.forEach(f => f.affect(p));
  });
}
function draw() {
  //清空背景
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, ww, wh);

  //-------------------------
  //   在這裡繪製

  particles.forEach(p => {
    p.draw();
  });

  forcefields.forEach(p => {
    p.draw();
  });

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

window.addEventListener('dblclick', dblclick);
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

function dblclick(e) {
  mousePos.set(e.x, e.y);
  console.log(123, mousePos);
  forcefields.push(new Forcefield({ p: mousePos.clone() }));
}

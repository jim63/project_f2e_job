let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('mycanvas'));

let ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

let ww = canvas.width;
let wh = canvas.height;
let time = 0;
function draw() {
  ctx.clearRect(0, 0, 400, 400);
  time++;
  ctx.beginPath();
  for (let i = 1; i < 10; i++) {
    let pos = i * 50;
    ctx.moveTo(0, pos);
    ctx.lineTo(ww, pos);
    ctx.fillText(pos, pos, 10);

    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, wh);
    ctx.fillText(pos, 10, pos);
  }
  ctx.strokeStyle = 'rgba(0,0,0,0.1)';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(25, 350);
  ctx.lineTo(375, 350);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();

  ctx.fillStyle = '#ed5a2a';
  ctx.fillRect(300, 300, 50, 50);
  ctx.strokeRect(300, 300, 50, 50);

  ctx.fillStyle = '#ff0';
  ctx.fillRect(50, 300, 50, 50);
  ctx.strokeRect(50, 300, 50, 50);
  ctx.fillRect(250, 250, 50, 100);
  ctx.strokeRect(250, 250, 50, 100);

  ctx.fillStyle = '#faa';
  ctx.fillRect(100, 250, 50, 100);
  ctx.strokeRect(100, 250, 50, 100);

  ctx.fillStyle = '#faa';
  ctx.fillRect(200, 250, 50, 100);
  ctx.strokeRect(200, 250, 50, 100);

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(100, 250);
  ctx.arc(175, 250, 25, Math.PI, Math.PI * 2);
  ctx.lineTo(250, 250);
  ctx.lineTo(250, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(175, 150);
  ctx.lineTo(250, 200);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = '#f00';
  ctx.fill();

  //flag
  ctx.beginPath();
  ctx.moveTo(175, 150);
  ctx.lineTo(175, 100 - mouse.y / 5);
  ctx.lineTo(200, 110 - mouse.y / 5 - (time % 5));
  ctx.lineTo(175, 120 - mouse.y / 5);
  ctx.fillStyle = `hsl(${mouse.x % 360},50%,50%)`;
  ctx.fill();
  ctx.stroke();

  //car
  ctx.fillStyle = 'white';
  let car_x = (time % 440) - 40;
  ctx.fillRect(car_x, 325, 40, 25);
  ctx.strokeRect(car_x, 325, 40, 25);
  ctx.beginPath();
  ctx.arc(car_x + 10, 350, 5, 0, 2 * Math.PI);
  ctx.arc(car_x + 30, 350, 5, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

setInterval(() => {
  draw();
}, 30);

let mouse = { x: 0, y: 0 };
canvas.addEventListener('mousemove', e => {
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;
  console.log('mouse', mouse);
});

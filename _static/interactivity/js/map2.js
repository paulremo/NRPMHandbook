class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


// create canvas element and append it to document body
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);
document.addEventListener('click', test);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  // mouse left button must be pressed
  /*if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!*/
}


class SquidFormula {
  constructor(centerX, centerY, r, nb, marge, context, canvas) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.r = r;
    this.nb = nb;
    this.marge = marge;
    this.context = context;
    this.canvas = canvas;

    this.alpha_dif = 360 / this.nb;
    this.rGrand = Math.trunc((2 * this.r + this.marge) / Math.sqrt((Math.cos(SquidFormula.torad(this.alpha_dif) - 1) ** 2 + (Math.sin(SquidFormula.torad(this.alpha_dif)) ** 2)))) + 1
    this.angles = [];
    this.points = [];
    this.colors = [];


  }

  static torad(deg) {
    return deg * Math.PI / 180;
  }

  init() {

    for (var i = 0; i < this.nb; i++) {
      this.angles[i] = 360 / this.nb * i;
    }

    for (var i = 0; i < this.nb; i++) {
      let px_i = this.centerX + this.rGrand * Math.cos(SquidFormula.torad(this.angles[i]));
      let py_i = this.centerY + this.rGrand * Math.sin(SquidFormula.torad(this.angles[i]));
      this.points[i] = new Point(px_i, py_i);
    }

    for (var i = 0; i < this.nb; i++) {
      this.colors[i] = 'black';
    }

    this.drawStructure();

  }

  drawStructure() {

    for (var i = 0; i < this.nb; i++) {
      this.context.strokeStyle = this.colors[i];
      this.context.beginPath();
      this.context.arc(this.points[i].x, this.points[i].y, this.r, 0, 2 * Math.PI);
      this.context.stroke();
      this.context.fill();
    }
  }

  testInCircle(pos) {
    let inside = false;
    var i = 0;
    while (!inside && i < this.nb) {
      let q = (pos.x - this.points[i].x) ** 2 + (pos.y - this.points[i].y) ** 2
      if (q <= this.r * this.r) {
        //console.log("clicked inside");
        inside = true;
        this.colors[i] = 'red';
        this.clear();
        this.drawStructure();
      }
      else {
        //console.log("clicked outside");
        inside = false;
      }
      i++;
    }

    if (inside){
      console.log("clicked button");
    }
    else{
      console.log("clicked somewhere else");
    }

  }

  clearCircle(i){
    console.log("color");
    this.context.clearRect(this.points[i].x - this.r - 10, this.points[i].y - this.r -10, 2*this.r+20, 2*this.r+20);
    this.context.restore();
  }

  colorCircle(i, color){
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.arc(this.points[i].x, this.points[i].y, this.r,0, 2 * Math.PI);
    this.context.stroke();
    this.context.fill();
  }

  clear(){
    this.canvas.remove();
  }

}

let sqf = new SquidFormula(300, 250, 20, 8, 100, ctx, canvas);
sqf.init();

function test(e) {
  sqf.testInCircle(pos);
}

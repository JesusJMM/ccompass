"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Ccompass {
  /**
  * @argument {CanvasRenderingContext2D} ctx
  * @argument {Number} width
  * @argument {Number} height
  */
  constructor(ctx) {
    let width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    let height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

    _defineProperty(this, "_fill", 'white');

    _defineProperty(this, "_stroke", 'black');

    _defineProperty(this, "_strokeWeight", 1);

    _defineProperty(this, "x", 0);

    _defineProperty(this, "y", 0);

    _defineProperty(this, "width", 0);

    _defineProperty(this, "height", 0);

    _defineProperty(this, "mouse", {
      x: 0,
      y: 0,
      click: false
    });

    this.ctx = ctx;
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.ctx.canvas.addEventListener('mousemove', e => {
      this.mouse.x = e.layerX;
      this.mouse.y = e.layerY;
    });
    this.ctx.canvas.addEventListener('mousedown', () => {
      this.mouse.click = true;
    });
    this.ctx.canvas.addEventListener('mouseup', () => {
      this.mouse.click = false;
    });
  }

  origin(x, y) {
    this.x = x;
    this.y = y;
  }

  fill(fill) {
    this._fill = fill;
  }

  noFill() {
    this._fill = '';
  }

  stroke(stroke) {
    this._stroke = stroke;
  }

  strokeWeight(w) {
    this._strokeWeight = w;
  }

  noStroke() {
    this._stroke = '';
  }

  lineCap(cap) {
    this.ctx.lineCap = cap;
  }

  draw() {
    if (this._fill != this.ctx.fillStyle) {
      this.ctx.fillStyle = this._fill;
    }

    if (this._stroke != this.ctx.strokeStyle) {
      this.ctx.strokeStyle = this._stroke;
    }

    if (this._strokeWeight != this.ctx.lineWidth) {
      this.ctx.lineWidth = this._strokeWeight;
    }

    this._fill && this.ctx.fill();
    this._stroke && this.ctx.stroke();
  }

  circle(x, y, r) {
    let startAngle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let endAngle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Math.PI * 2;
    this.ctx.beginPath();
    this.ctx.ellipse(this.x + x, this.y + y, r, r, 0, startAngle, endAngle);
    this.draw();
    this.ctx.closePath();
  }

  rect(x, y, width, height) {
    this.ctx.beginPath();
    this.ctx.rect(this.x + x, this.y + y, width, height);
    this.draw();
    this.ctx.closePath();
  }

  ellipse(x, y, rx, ry) {
    let rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    this.ctx.beginPath();
    this.ctx.ellipse(this.x + x, this.y + y, rx, ry, rotation, 0, Math.PI * 2);
    this.draw();
    this.ctx.closePath();
  }

  arc(x, y, width, height, startAngle, endAngle) {
    let rot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    this.ctx.beginPath();
    this.ctx.ellipse(this.x + x, this.y + y, width, height, rot, startAngle, endAngle);
    this.draw();
    this.ctx.closePath();
  }

  line(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + x1, this.y + y1);
    this.ctx.lineTo(this.x + x2, this.y + y2);
    this.ctx.strokeStyle = this._stroke;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  point(x, y) {
    this.ctx.beginPath();
    this.ctx.ellipse(this.x + x, this.y + y, this._strokeWeight, this._strokeWeight, 0, 0, Math.PI * 2);

    if (this.ctx.fillStyle !== this.stroke) {
      this.ctx.fillStyle = this._stroke;
    }

    this.ctx.fill();
    this.ctx.closePath();
  }

  background(r, g, b) {
    if (arguments.length === 1) this.ctx.fillStyle = "rgb(".concat(r, ",").concat(r, ",").concat(r, ")");else if (arguments.length === 2) this.ctx.fillStyle = "hsl(".concat(r, ",").concat(g, "%, 50%)");else if (arguments.length === 3) this.ctx.fillStyle = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

}

var _default = Ccompass;
exports.default = _default;
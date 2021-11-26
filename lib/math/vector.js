"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Vector {
  constructor(x, y) {
    _defineProperty(this, "x", 0);

    _defineProperty(this, "y", 0);

    this.x = x;
    this.y = y;
  }

  rotate(angle) {
    this.x = Math.cos(angle) * this.x + Math.sin(angle) * this.y;
    this.y = Math.cos(angle) * this.y - Math.sin(angle) * this.x;
    return this;
  }

  invert() {
    this.x *= -1;
    this.y *= -1;
    return this;
  }

  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get normalized() {
    const mag = this.magnitude;
    return new Vector(this.x / mag, this.y / mag);
  }

  get angle() {
    let angle = Math.atan2(this.y, this.x);

    if (angle < 0) {
      angle = Math.PI - angle * -1 + Math.PI;
    }

    return angle;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  add(x, y) {
    if (x instanceof Vector) {
      this.x += x.x;
      this.y += x.y;
    } else {
      this.x += x;
      this.y += y;
    }
  }

  substract(x, y) {
    if (x instanceof Vector) {
      this.x -= x.x;
      this.y -= x.y;
    } else {
      this.x -= x;
      this.y -= y;
    }
  }

  multiply(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  setMagnitude(mg) {
    const newVector = this.normalized.multiply(mg);
    this.x = newVector.x;
    this.y = newVector.y;
    return this;
  }

}

exports.default = Vector;
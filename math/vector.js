export default class Vector {
  x = 0
  y = 0
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  rotate(angle) {
    this.x = Math.cos(angle) * this.x + Math.sin(angle) * this.y
    this.y = Math.cos(angle) * this.y - Math.sin(angle) * this.x
    return this
  }
  invert() {
    this.x *= -1
    this.y *= -1
    return this
  }
  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
  get normalized() {
    const mag = this.magnitude
    return new Vector(this.x / mag, this.y / mag)
  }
  get angle() {
    let angle = Math.atan2(this.y, this.x)
    if (angle < 0) {
      angle = (Math.PI - (angle * -1)) + Math.PI
    }
    return angle
  }
  set(x, y) {
    this.x = x
    this.y = y
  }
  add(x, y) {
    if (x instanceof Vector) {
      this.x += x.x
      this.y += x.y
    } else {
      this.x += x
      this.y += y
    }
  }
  substract(x, y) {
    if (x instanceof Vector) {
      this.x -= x.x
      this.y -= x.y
    } else {
      this.x -= x
      this.y -= y
    }
  }

}

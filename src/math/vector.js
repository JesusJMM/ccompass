export default class Vector {
  x = 0
  y = 0
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  rotate(angle) {
    const m = this.mag
    this.x = m * Math.cos(angle)
    this.y = m * Math.sin(angle)
    return this
  }
  invert() {
    this.x *= -1
    this.y *= -1
    return this
  }
  get mag() {
    return Math.sqrt(this.magSq)
  }
  get magSq() {
    return this.x * this.x + this.y * this.y
  }
  get normalize() {
    const mag = this.magnitude
    this.x = this.x / mag
    this.y = this.y / mag
    return this
  }
  get angle() {
    let angle = Math.atan2(this.y, this.x)
    if (angle < 0) {
      angle = (Math.PI - (angle * -1)) + Math.PI
    }
    return angle
  }
  set(x, y) {
    if (x instanceof Vector) {
      this.x = x.x
      this.y = x.y
      return
    }
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
  multiply(s) {
    this.x *= s
    this.y *= s
    return this
  }
  setMagnitude(mg) {
    const newVector = this.normalized.multiply(mg)
    this.x = newVector.x
    this.y = newVector.y
    return this
  }
  dot(x, y) {
    if (x instanceof Vector) {
      return this.x * x.x + this.y * x.y
    }
    return this.x * x + this.y * y
  }
  copy(){
    return new Vector(this.x, this.y)
  }
}

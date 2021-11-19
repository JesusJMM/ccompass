export default class Vector {
  x = 0
  y = 0
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  rotate(angle){
    const x = Math.cos(angle) * this.x + Math.sin(angle) * this.y
    const y = Math.cos(angle) * this.y - Math.sin(angle) * this.x
    return new Vector(x, y)
  }
}

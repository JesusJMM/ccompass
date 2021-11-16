class Ccompass {
  _fill = 'white'
  _stroke = 'black'
  _strokeWeight = 1

  constructor(ctx) {
    this.ctx = ctx
  }
  fill(fill) {
    this._fill = fill
  }
  noFill() {
    this._fill = ''
  }
  stroke(stroke) {
    this._stroke = stroke
  }
  strokeWeight(w) {
    this._strokeWeight = w
  }
  noStroke() {
    this._stroke = ''
  }
  lineCap(cap) {
    this.ctx.lineCap = cap
  }
  draw() {
    this.ctx.fillStyle = this._fill
    this.ctx.strokeStyle = this._stroke
    this.ctx.lineWidth = this._strokeWeight
    this._fill && this.ctx.fill()
    this._stroke && this.ctx.stroke()
  }
  circle(x, y, r, startAngle = 0, endAngle = Math.PI * 2) {
    this.ctx.beginPath()
    this.ctx.ellipse(x, y, r, r, 0, startAngle, endAngle)
    this.draw()
    this.ctx.closePath()
  }
  rect(x, y, width, height) {
    this.ctx.beginPath()
    this.ctx.rect(x, y, width, height)
    this.draw()
    this.ctx.closePath()
  }
  ellipse(x, y, rx, ry, rotation = 0) {
    this.ctx.beginPath()
    this.ctx.ellipse(x, y, rx, ry, rotation, 0, Math.PI * 2)
    this.draw()
    this.ctx.closePath()
  }
  arc(x, y, width, height, startAngle, endAngle, rot = 0) {
    this.ctx.beginPath()
    this.ctx.ellipse(x, y, width, height, rot, startAngle, endAngle)
    this.draw()
    this.ctx.closePath()
  }
  line(x1, y1, x2, y2) {
    this.ctx.beginPath()
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.draw()
    this.ctx.closePath()
  }
  point(x, y) {
    this.ctx.beginPath()
    this.ctx.ellipse(x, y, this._strokeWeight / 2, this._strokeWeight / 2, 0, 0, Math.PI * 2)
    this.ctx.strokeStyle = ''
    this.ctx.fillStyle = this._stroke
    this.ctx.fill()
    this.ctx.closePath()
  }
  background(r, g, b) {
    if (arguments.length === 1)
      this.ctx.fillStyle = `rgb(${r},${r},${r})`
    else if (arguments.length === 2)
      this.ctx.fillStyle = `hsl(${r},${g}%, 50%)`
    else if (arguments.length === 3)
      this.ctx.fillStyle = `rgb(${r},${g},${b})`

    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }
}

export default Ccompass

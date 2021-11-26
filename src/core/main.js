class Ccompass {
  _fill = 'white'
  _stroke = 'black'
  _strokeWeight = 1
  x = 0
  y = 0
  width = 0
  height = 0
  mouse = { x: 0, y: 0, click: false }

  /**
  * @argument {CanvasRenderingContext2D} ctx
  * @argument {Number} width
  * @argument {Number} height
  */
  constructor(ctx, width = 100, height = 100) {
    this.ctx = ctx
    this.ctx.canvas.width = width
    this.ctx.canvas.height = height
    this.width = ctx.canvas.width
    this.height = ctx.canvas.height
    this.ctx.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.layerX
      this.mouse.y = e.layerY
    })
    this.ctx.canvas.addEventListener('mousedown', () => {
      this.mouse.click = true
    })
    this.ctx.canvas.addEventListener('mouseup', () => {
      this.mouse.click = false
    })
  }
  origin(x, y) {
    this.x = x
    this.y = y
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
    if (this._fill != this.ctx.fillStyle) {
      this.ctx.fillStyle = this._fill
    }
    if (this._stroke != this.ctx.strokeStyle) {
      this.ctx.strokeStyle = this._stroke
    }
    if (this._strokeWeight != this.ctx.lineWidth) {
      this.ctx.lineWidth = this._strokeWeight
    }
    this._fill && this.ctx.fill()
    this._stroke && this.ctx.stroke()
  }
  circle(x, y, r, startAngle = 0, endAngle = Math.PI * 2) {
    this.ctx.beginPath()
    this.ctx.ellipse(this.x + x, this.y + y, r, r, 0, startAngle, endAngle)
    this.draw()
    this.ctx.closePath()
  }
  rect(x, y, width, height) {
    this.ctx.beginPath()
    this.ctx.rect(this.x + x, this.y + y, width, height)
    this.draw()
    this.ctx.closePath()
  }
  ellipse(x, y, rx, ry, rotation = 0) {
    this.ctx.beginPath()
    this.ctx.ellipse(this.x + x, this.y + y, rx, ry, rotation, 0, Math.PI * 2)
    this.draw()
    this.ctx.closePath()
  }
  arc(x, y, width, height, startAngle, endAngle, rot = 0) {
    this.ctx.beginPath()
    this.ctx.ellipse(this.x + x, this.y + y, width, height, rot, startAngle, endAngle)
    this.draw()
    this.ctx.closePath()
  }
  line(x1, y1, x2, y2) {
    this.ctx.beginPath()
    this.ctx.moveTo(this.x + x1, this.y + y1)
    this.ctx.lineTo(this.x + x2, this.y + y2)
    this.ctx.strokeStyle = this._stroke
    this.ctx.stroke()
    this.ctx.closePath()
  }
  point(x, y) {
    this.ctx.beginPath()
    this.ctx.ellipse(this.x + x, this.y + y, this._strokeWeight, this._strokeWeight, 0, 0, Math.PI * 2)
    if (this.ctx.fillStyle !== this.stroke) {
      this.ctx.fillStyle = this._stroke
    }
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

    this.ctx.fillRect(0, 0, this.width, this.height)
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
}
export default Ccompass

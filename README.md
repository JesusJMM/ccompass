# Ccompass
A library for simplify your life with HTML5 canvas, inspired in [P5.js](https://p5js.org/)

## Objetive
Ccompass reduces the boilerplate code when draw in canvas

### without ccompass 
```js
// set up
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

// draw
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(100, 20)
ctx.strokeStyle = 'tomato'
ctx.stroke()
ctx.closePath()
```

### with ccompass
```js
// set up
import Ccompass from 'ccompass'

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const draw = new Ccompass(ctx)

// draw
draw.stroke('tomato')
draw.line(20, 20, 100, 20)
```

Todos
-------------------

### Vector Method
  - [x] Set 
  - [ ] Add
  - [ ] Subtract
  - [ ] Set Magnitude
  - [ ] Multiply
  - [ ] Copy

### Functions to add
  - [ ] Perling noice function
  - [ ] Lerp function

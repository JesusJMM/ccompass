export function rgb(r, g, b, a = 1) {
  if (arguments.length === 1) {
    return `rgba(${r}, ${r}, ${r}, 1)`
  }
  if (arguments.length === 2) {
    return `rgba(${r}, ${r}, ${r}, ${g})`
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function hsl(h, s, l, a) {
  if (arguments.length === 1) {
    return `hsla(${h}, 100%, 50%, 1)`
  }
  if (arguments.length === 2) {
    return `hsla(${h}, ${h}, ${h}, ${s})`
  }
  return `hsla(${h}, ${s}%, ${l}, ${a})`
}


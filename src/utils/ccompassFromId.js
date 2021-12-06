import Ccompass from '../core/ccompass'
export default function getCcompassFromId(id, width, height) {
  const el = document.getElementById(id)
  if (!el) {
    throw new Error(`Do not exist a element width id ${id}`)
  }
  if (el.tagName != 'CANVAS') {
    throw new Error(`The element: ${el} is not a canvas`)
  }
  return new Ccompass(el.getContext('2d'))
}

import Ccompass from '../core/main.js'
export default function(id, width = 100, height = 100) {
  const element = document.getElementById(id)//.getContext('2d')
  if(!element){
    throw new Error('Do not exist an CANVAS element with id: "'+ id + '"')
    return
  }
  if(element.tagName != 'CANVAS'){
    throw new Error('The element with the id' + id + 'must be a canvas element')
  }
  return new Ccompass(element.getContext('2d'), width, height)
}

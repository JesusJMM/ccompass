let subscribers = []

export function subscribe(f) {
  subscribers.push(f)
}
export function render(fps = 60, lastTime = Date.now()) {
  const frameDuration = 1000 / fps
  const currentTime = Date.now()
  const delta = (currentTime - lastTime)
  lastTime = currentTime - (delta % frameDuration)
  requestAnimationFrame(() => render(fps, lastTime))
  if (frameDuration >= delta) {
    return
  }
  subscribers.forEach(f => f(delta / 1000))
}

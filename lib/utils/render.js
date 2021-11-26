"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.subscribe = subscribe;
let subscribers = [];

function subscribe(f) {
  subscribers.push(f);
}

function render() {
  let fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
  let lastTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  const frameDuration = 1000 / fps;
  const currentTime = Date.now();
  const delta = currentTime - lastTime;
  lastTime = currentTime - delta % frameDuration;
  requestAnimationFrame(() => render(fps, lastTime));

  if (frameDuration >= delta) {
    return;
  }

  subscribers.forEach(f => f(delta / 1000));
}
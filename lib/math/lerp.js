"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lerp;

function lerp(start, end, per) {
  return (end - start) * per;
}
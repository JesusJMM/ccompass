"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deg2rad = deg2rad;
exports.rad2deg = rad2deg;

function rad2deg(r) {
  return r * (180 / Math.PI);
}

function deg2rad(d) {
  return d * Math.PI / 180;
}
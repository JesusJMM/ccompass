"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _main = _interopRequireDefault(require("../core/main.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BaseDraw {
  /**
  * @argument {Ccompass} draw
  */
  constructor(draw) {
    this.draw = draw;
  }

}

exports.default = BaseDraw;
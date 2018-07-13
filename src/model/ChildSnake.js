define([
  './PositionObject'
], function (PositionObject) {
  'use strict'

  return function (x, y) {
    this.x = x
    this.y = y

    PositionObject.call(this)
  }
})
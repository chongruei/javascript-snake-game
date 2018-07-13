define([
  'util/config'
], function (config) {
  'use strict'

  return function () {
    this.x
    this.y

    this.update = function (x, y) {
      this.x = x * config.unit
      this.y = y * config.unit
    }
  }
})
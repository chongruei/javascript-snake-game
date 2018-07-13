define([
  './PositionObject',
  'util/config'
], function (PositionObject, config) {
  'use strict'

  return function() {
    PositionObject.call(this)
    
    this.image = new Image()

    this.updateImage = function (src) {
      this.image.src = src
    }

    this.initPos = function () {
      let x = Math.floor(Math.random() * (config.size - 1) + 1)
      let y = Math.floor(Math.random() * (config.size - 1) + 1)
  
      this.update(x, y)
    }
  }
})
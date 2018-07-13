define([
  './ChildSnake',
  'util/config'
], function (ChildSnake, config) {
  'use strict'

  let snake = []

  // default position at middle of the ground
  let middleX = (config.size / 2) * config.unit
  let middleY = (config.size / 2) * config.unit

  let snakeHead = new ChildSnake(middleX, middleY)

  snake.push(snakeHead)
  return snake
})
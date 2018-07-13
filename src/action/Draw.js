define([
  'util/config'
], function (config) {
  'use strict';

  const unit = config.unit

  const drawGround = function (ctx, ground) {
    ctx.drawImage(ground, 0, 2)	// from 0, 0 to 800, 800 within canvas
  }

  const drawSanke = function (ctx, snake) {
    for (let i = 0; i < snake.length; i++) {
      ctx.fillStyle = (i == 0) ? 'yellow' : 'blue'
      ctx.fillRect(snake[i].x, snake[i].y, unit, unit)
    }
  }

  const drawFood = function (ctx, food) {
    ctx.drawImage(food.image, food.x, food.y, unit , unit)
  }

  const drawScore = function (ctx, score) {
    ctx.fillStyle = "white"
    ctx.font = 'normal 30px Helvetica, Arial, sans-serif';
    ctx.fillText('長度: ' + score + 'cm', 5, 30)
  }

  return function (ctx, ground, snake, food, score) {
    drawGround(ctx, ground)
    drawSanke(ctx, snake)
    drawFood(ctx, food)
    drawScore(ctx, score)
  }
});
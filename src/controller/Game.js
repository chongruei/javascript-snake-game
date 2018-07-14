define([
  'model/Food',
  'model/Snake',
  'model/ChildSnake',
  'model/Direct',
  'action/Draw',
  'util/config'
], function (Food, Snake, ChildSnake, DIRS, draw, config) {
  const unit = config.unit
  let canvas = document.getElementById('app')
  let ctx = canvas.getContext('2d')
  let ground = new Image()
  let food = new Food()
  let snake = Snake
  let gameStarFlag
  let score = 0
  let dirQueue = []

  const initSetting = function () {
    ground.src = 'image/background.jpg'
    food.updateImage('image/banana.jpg')
    food.initPos()
  }

  const start = function () {
    gameStarFlag = setInterval(running, 50) // 50 default game speed which means it has 10 fps (1000ms/50ms)
  }

  const end = function () {
    clearInterval(gameStarFlag)
  }

  const running = function () {
    isSnakeOverTheGround() ? end() : control()
  }

  const control = function () {
    draw(ctx, ground, snake, food, score)
    controlGameObject()
    controlDirQueue()
  }

  const controlGameObject = function () {
    let snakeNextPos = getSnakeNextPos()
    let snakeX = snakeNextPos.x
    let snakeY = snakeNextPos.y

    snake.unshift(new ChildSnake(snakeX, snakeY))
    if (!isSankeEatFood()) {
      snake.pop()
    } else {
      food.initPos()
      score++
    }
  }

  const controlDirQueue = function () {
    if (dirQueue.length > 1) dirQueue.shift()
  }

  const getSnakeNextPos = function () {
    let snakeHead = getSankeHeadPos()
    let snakeX = snakeHead.x;
    let snakeY = snakeHead.y;
    let dir = dirQueue[0]

    if (dir === DIRS.LEFT) snakeX -= unit
    if (dir === DIRS.RIGHT) snakeX += unit
    if (dir === DIRS.UP) snakeY -= unit
    if (dir === DIRS.DOWN) snakeY += unit

    return {
      x: snakeX,
      y: snakeY
    }
  }

  const getSankeHeadPos = function () {
    return {
      x: snake[0].x,
      y: snake[0].y
    }
  }

  const isSankeEatFood = function () {
    let head = getSankeHeadPos()

    return (head.x == food.x && head.y == food.y) ? true : false
  }

  const isSnakeOverTheGround = function () {
    let snakeHead = getSankeHeadPos()
    let snakeX = snakeHead.x
    let snakeY = snakeHead.y
    
    if (snakeX < 0 || snakeX > 19 * unit ||
      snakeY < 1 || snakeY > 19 * unit) {
        return true
    } 
    
    return false
  }

  function direct(event) {
    dir = dirQueue[0]

    switch (event.keyCode) {
      case 37:
        if (dir !== DIRS.RIGHT) dirQueue.push(DIRS.LEFT)
        break
      case 38: 
        if (dir !== DIRS.DOWN) dirQueue.push(DIRS.UP)
        break
      case 39:
        if (dir !== DIRS.LEFT) dirQueue.push(DIRS.RIGHT)
        break
      case 40:
        if (dir !== DIRS.UP) dirQueue.push(DIRS.DOWN)
        break
    }
  }

  document.addEventListener("keydown", direct)

  return {
    start: start,
    initSetting: initSetting
  }
});
define([], function () {
  'use strict';

  return {
    size: 20,       // size of canvas
    unit: 40,       // default object size.
    game_speed: {
      fast: 50,     // 50 default game speed which means it has 10 fps (1000ms/75ms)
      normal: 75,   // 75 default game speed which means it has 10 fps (1000ms/75ms)
      slow: 100     // 100 default game speed which means it has 10 fps (1000ms/100ms)
    }
  }
});
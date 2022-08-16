// Тебе пригодится класс Plant.
// Не переживай, он уже доступен этому файлу
// благодаря импорту с помощью require.

const Plant = require('../src/plant');

class Flower extends Plant {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

module.exports = Flower;

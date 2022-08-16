class Garden {
  /*
    Use object literal syntax to create a garden object with
    the attributes and behaviors described in spec/garden_spec.js.
  */
  constructor(name, location, flowers = []) {
    this.name = name;
    this.location = location;
    this.flowers = flowers;
  }

  addFlower(flower) {
    this.flowers.push(flower);
  }

  plant(arrFlowers) {
    this.flowers.concat(arrFlowers);
  }

  remove(flower) {
    this.flowers.splice(this.flowers.indexOf(flower), 1);
  }

  flowersByColor(color) {
    return this.flowers.filter(el => el.color === color);
  }

  flowersByName(name) {
    return this.flowers.filter(el => el.name === name);
  }

}

module.exports = Garden;

class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="125" cy="75" r="80" fill="${this.color}" stroke-width="5"/>`;
  }
}

//triangle and square classes left

module.exports = {Circle}
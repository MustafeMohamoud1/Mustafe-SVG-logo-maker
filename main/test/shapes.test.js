const { Circle, Triangle, Square } = require('../lib/shapes');

describe("Circle", () => {
    test('It should create a blue circle', () => {
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="blue"/>'
        const circle = new Circle()
        circle.setColor('blue')
        const mySvg = circle.render()

        expect(mySvg).toEqual(expectedSVG)
    })
});

describe("Triangle", () => {
    test('It should create a green triangle', () => {
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
        const triangle = new Triangle()
        triangle.setColor('green')
        const mySvg = triangle.render()

        expect(mySvg).toEqual(expectedSVG)
    })
});

describe("Square", () => {
    test('It should create a yellow square', () => {
        const expectedSVG = '<rect x="90" y="40" width="120" height="120" fill="yellow"/>'
        const square = new Square()
        square.setColor('yellow')
        const mySvg = square.render()

        expect(mySvg).toEqual(expectedSVG)
    })
});
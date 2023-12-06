const { Circle, Triangle, Square } = require('./shapes');

describe("Circle", () => {
    test('It should create a blue circle', () => {
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="blue" />'
        const circle = new Circle()
        circle.setColor('blue')
        const mySvg = circle.render()

        expect(mySvg).toEqual(expectedSVG)
    })
})
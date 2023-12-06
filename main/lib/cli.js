//inquirer to ask all the questions for the svg options
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const {Circle, Triangle, Square} = require("./lib/shapes");
const SVG = require('./svg');

class CLI {
    run() {
      return inquirer
        .prompt([
          {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape',
            choices: ['Circle', 'Triangle', 'Square']
          },
          {
            type: 'input',
            name: 'color',
            message: 'Please select a color',
          },
          {
            type: 'input',
            name: 'text',
            message: 'Please input 3 letters',
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Please select a text color',
          },
        ])
        .then(({shape, color, text, textColor}) => {
            let chosenShape;
            if (shape === 'Circle') {
                chosenShape = new Circle()
            }
            else if (shape === 'Triangle') {
                chosenShape = new Triangle()
            }
            else if (shape === 'Square') {
                chosenShape = new Square()
            }
            chosenShape.setColor(color) 
            const mySvg = new SVG()
            mySvg.setText(text, textColor)
            mySvg.setShape(chosenShape)

            return writeFile("logo.svg", mySvg.render())
        })
    }};

    module.exports = CLI
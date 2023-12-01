const { createPromptModule } = require("inquirer");

class SVG { 
    constructor(){
    this.text = "";
    this.shape = "";
    }

render(){
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.text}${this.shape}</svg>`
}

setText(message, color){
    this.text = `<text x="100" y="100" fill="${color}" font-size="50">${message}</text>`
}

setShape(shape){
    this.shape = shape.render()
}
}

module.exports =  SVG
class Square {
    constructor(width, height, length) {
        this.width = width
        this.height = height
        this.length = length
    }

    area() {
        return this.width * this.height
    }

    volume() {
        return this.width * this.height * this.length
    }
}

const square = new Square(32, 32, 32)

console.log("Área: " + square.area())
console.log("Volume: " + square.volume())
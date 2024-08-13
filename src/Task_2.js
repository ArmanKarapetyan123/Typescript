"use strict";
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
//1
function printColor(color) {
    if (color == Color.Red || color == Color.Green || color == Color.Blue) {
        return `the color is ${color}`;
    }
    else {
        return `unkonwn color`;
    }
}
console.log(printColor(Color.Red));
class CarFactory {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayCar() {
        console.log(`Car is ${this.make} ${this.model} ${this.year}`);
    }
}
const car = new CarFactory("BWM", "f90", 2020);
car.displayCar();

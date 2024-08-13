enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

//1
function printColor(color : Color):string {
    if(color == Color.Red || color == Color.Green || color == Color.Blue){
        return `the color is ${color}`;
    }else{
        return `unkonwn color`;
    }
}
console.log(printColor(Color.Red))


// 2
interface Car {
    make : string,
    model: string,
    year : number
}
class CarFactory implements Car{

    make : string;
    model: string;
    year : number;

    constructor(make : string,model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayCar(): void {
        console.log(`Car is ${this.make} ${this.model} ${this.year}`);
    }
}

const car = new CarFactory("BWM", "f90", 2020);
car.displayCar();
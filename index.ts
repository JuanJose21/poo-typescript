import { Car, Ferrari, Porsche } from './car';

let car = new Car('', 2020, 'Rojo', 10);
car.accelerate();

let ferrari = new Ferrari('AX-1', 2020, 'Rojo', 15);
let porsche = new Porsche('PS-A', 2020, 'Azul', 18);

ferrari.start();
ferrari.openSunroof();
ferrari.closeSunroof();

porsche.start();

function getModel(car: Car) {
  console.log(car.model);
}

getModel(ferrari);
getModel(porsche);

import { CarFactory } from './car.factory';
import { BmwCarFactory } from './bmw.factory';
import { Car } from './car.class';

function main() {
  const carFactory: CarFactory = new BmwCarFactory();
  const bmw: Car = carFactory.factoryMethod();
  bmw.startEngine();
}

main();

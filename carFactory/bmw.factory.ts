import { CarFactory } from './car.factory';
import { Car } from './car.class';
import { BmwCar } from './bmw.class';

export class BmwCarFactory extends CarFactory {
  public factoryMethod(): Car {
    return new BmwCar();
  }

}
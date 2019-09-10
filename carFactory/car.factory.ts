import { Car } from './car.class';

export abstract class CarFactory {
  public abstract factoryMethod(): Car;
}
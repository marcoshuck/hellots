import { Car } from "./car.class";

export class BmwCar extends Car {
  constructor() {
    const name: string = 'BMW';
    super(name);
  }
}
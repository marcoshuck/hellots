export class Car {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public startEngine() {
    console.log('Enciende motor', this.name);
  }

  public stopEngine() {
    console.log('Apaga motor', this.name);
  }
}
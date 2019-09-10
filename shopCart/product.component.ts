export abstract class Product {
  protected name: string;
  protected price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  abstract get getName(): string;
  abstract get getPrice(): number;
}
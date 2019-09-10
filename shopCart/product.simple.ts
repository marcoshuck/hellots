import { Product } from "./product.component";

export class SimpleProduct extends Product {
  public brand: string;
  constructor(name: string, price: number, brand: string) {
    super(name, price);
    this.brand = brand;
  }

  public get getName(): string {
    return this.name;
  }

  public get getPrice(): number {
    return this.price;
  }

  public printProduct() {
    console.log(`Consiga ${this.name} fabricado por ${this.brand} a un precio de $${this.price}`);
  }
}
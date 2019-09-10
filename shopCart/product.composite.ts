import { Product } from './product.component';

export class CompositeProduct extends Product {
  public products: Product[];

  constructor(name: string) {
    super(name, 0);
    this.products = [];
  }

  get getName(): string {
    return this.name;
  }

  get getPrice(): number {
    let totalPrice: number = 0;
    let product: Product;
    for (product of this.products) {
      totalPrice += product.getPrice;
    }
    return totalPrice;
  }

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public removeProduct(product: Product): boolean {
    const index: number = this.products.indexOf(product);
    if (!index) {
      return false;
    }

    const removed: Product[] = this.products.splice(index);

    if (!removed) {
      return false;
    }

    return true;
  }
}

import { Product } from './product.component';

export class SaleOrder {
  public orderId: number;
  public customer: string;
  public dateTime: Date;
  public products: Product[] = [];

  constructor(orderId: number, customer: string) {
    this.orderId = orderId;
    this.customer = customer;
    this.dateTime = new Date();
  }

  public getTotalPrice(): number {
    let sum: number = 0;
    let product: Product;
    for (product of this.products) {
      sum += product.getPrice;
    }
    return sum;
  }
}
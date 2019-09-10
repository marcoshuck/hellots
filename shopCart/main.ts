import { SaleOrder } from './sale-order.class';
import { Product } from './product.component';
import { SimpleProduct } from './product.simple';
import { CompositeProduct } from './product.composite';

function main() {
  const saleOrder: SaleOrder = new SaleOrder(5512345, 'Marcos Huck');
  const plaqueta: Product = new SimpleProduct('Plaqueta PCB', 100, 'Plaquetodo');
  const resistencias: Product = new CompositeProduct('Resistencias');
  (resistencias as CompositeProduct).addProduct(new SimpleProduct('100k', 1.5, 'STM'));
  (resistencias as CompositeProduct).addProduct(new SimpleProduct('150k', 1.5, 'STM'));
  (resistencias as CompositeProduct).addProduct(new SimpleProduct('100k', 1.5, 'STM'));
  const capacitores: Product = new CompositeProduct('Capacitores');
  (capacitores as CompositeProduct).addProduct(new SimpleProduct('100uF', 3, 'STM'));
  (capacitores as CompositeProduct).addProduct(new SimpleProduct('100uF', 3, 'STM'));
  (capacitores as CompositeProduct).addProduct(new SimpleProduct('100uF', 3, 'STM'));
  saleOrder.products.push(plaqueta, resistencias, capacitores);
  console.log(saleOrder.getTotalPrice());
}
main();

import { Product } from './Product';

export class CartProduct {
  quantity: number;
  product: Product;

  constructor() {
    this.quantity = 1;
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: ''
    };
  }
}

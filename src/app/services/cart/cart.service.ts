import { Injectable } from '@angular/core';
import { CartProduct } from '../../models/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: CartProduct[] = [];

  constructor() {}

  addCart(cartProducts: CartProduct) {
    if (
      this.cartProducts.some(
        item => item['product']['id'] === cartProducts['product']['id']
      )
    ) {
      for (const cart of this.cartProducts) {
        if (cart.product.id === cartProducts.product.id) {
          cart.quantity += cartProducts.quantity;
          break;
        }
      }
    } else {
      this.cartProducts.push(cartProducts);
    }
    alert(
      `${cartProducts.quantity} ${cartProducts.product.name} has been added `
    );
  }

  getCart(): CartProduct[] {
    return this.cartProducts;
  }

  removeFromCart(id: number): CartProduct[] {
    this.cartProducts = this.cartProducts.filter(
      cart => cart.product.id !== id
    );
    return this.cartProducts;
  }

  cartTotal() {
    let total = 0;
    this.cartProducts.forEach(product => {
      total += product.product.price * product.quantity;
    });
    return (total.toFixed(2) as unknown) as number;
  }

  clearCart() {
    this.cartProducts = [];
  }
}

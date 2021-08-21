import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from '../../models/CartProduct';
import { CartService } from '../../services/cart/cart.service';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  cartTotal: number = 0;
  fullName: string = '';
  address: string = '';
  card: string = '';

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
    this.getCartTotal();
  }

  quantityChange(cartProduct: CartProduct): void {
    if (cartProduct.quantity == 0) {
      this.cartProducts = this.cartService.removeFromCart(
        cartProduct.product.id
      );
      this.getCartTotal();
    }
    this.getCartTotal();
  }

  getCartTotal() {
    this.cartTotal = this.cartService.cartTotal();
  }
  addOrder() {
    this.orderService.addOrder(
      this.fullName,
      this.address,
      this.card,
      this.cartTotal
    );
    this.router.navigate(['confirmation']);
  }
}

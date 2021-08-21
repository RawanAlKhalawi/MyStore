import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  card: string = '';
  total: number = 0;

  constructor(
    private orderService: OrderService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fullName = this.orderService.getOrder().fullName;
    this.address = this.orderService.getOrder().address;
    this.card = this.orderService.getOrder().card;
    this.total = this.orderService.getOrder().total;
  }

  clear() {
    this.cartService.clearCart();
  }
}

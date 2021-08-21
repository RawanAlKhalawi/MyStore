import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  fullName: string = '';
  address: string = '';
  card: string = '';
  total: number = 0;

  constructor() {}

  addOrder(fullName: string, address: string, card: string, total: number) {
    this.fullName = fullName;
    this.address = address;
    this.card = card;
    this.total = total;
  }

  getOrder() {
    const order = {
      fullName: this.fullName,
      address: this.address,
      card: this.card,
      total: this.total
    };
    return order;
  }
}

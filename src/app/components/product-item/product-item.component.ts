import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity = 1;

  constructor(private cartService: CartService) {
    this.product = new Product();
  }

  ngOnInit(): void {}

  addToCart(product: Product, quantity: number) {
    const cartProduct: CartProduct = { product, quantity };
    this.cartService.addCart(cartProduct);
  }
}

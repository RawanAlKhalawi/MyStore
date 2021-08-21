import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product/product.service';
import { CartProduct } from '../../models/CartProduct';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    let id = 0;
    this.route.params.subscribe(params => {
      id = Number(params['id']);
    });

    this.productService.getProducts().subscribe(res => {
      this.product = res.filter(x => x.id === id)[0];
    });
  }

  addToCart(product: Product, quantity: number) {
    const cartProduct: CartProduct = { product, quantity };
    this.cartService.addCart(cartProduct);
  }
}

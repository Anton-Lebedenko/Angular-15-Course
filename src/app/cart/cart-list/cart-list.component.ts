import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../products/shared';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products!: ProductModel[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductsInCart();
  }

  trackByItems(index: number, item: ProductModel): string {
    return item.id;
  }
}

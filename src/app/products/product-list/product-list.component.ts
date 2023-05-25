import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../cart/cart-list/cart.service';
import { ProductModel } from '../shared';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ProductModel[]>;

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService
    ) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onPurchasingProduct(product: ProductModel): void {
    if (product) {
      this.cartService.addProductToCart(product);
    } else {
      alert('Возможно такой продукт уже закончился');
    }
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  products!: ProductModel[];

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService
    ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onPurchasingProduct(productId: string): void {
    const product: ProductModel | null = this.products.find((product: ProductModel) => product.id === productId) ?? null;
    if (product) {
      this.cartService.addProductToCart(product);
    } else {
      alert('Возможно такой продукт уже закончился');
    }
  }
}

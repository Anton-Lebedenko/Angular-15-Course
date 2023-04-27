import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemModel } from '../shared';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  products$!: Observable<CartItemModel[]>;
  totalQuantity$!: Observable<number>;
  totalCost$!: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products$ = this.cartService.productsInCart$;
    this.totalQuantity$ = this.cartService.totalQuantity$;
    this.totalCost$ = this.cartService.totalCost$;
  }

  trackByItems(index: number, item: CartItemModel): string {
    return item.product.id;
  }

  onDeleteProduct(productId: string): void {
    this.cartService.deleteProductFromCart(productId);
  }

  onQuantityIncrease(productId: string): void {
    this.cartService.increaseQuantity(productId);
  }

  onQuantityDecrease(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }
}

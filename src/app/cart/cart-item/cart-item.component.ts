import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItemModel } from '../shared';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() product!: CartItemModel;
  @Output() deleteProduct: EventEmitter<string> = new EventEmitter<string>();
  @Output() quantityDecrease: EventEmitter<string> = new EventEmitter<string>();
  @Output() quantityIncrease: EventEmitter<string> = new EventEmitter<string>();

  onDeleteItem(): void {
    this.deleteProduct.emit(this.product.product.id);
  }

  onQuantityDecrease() {
    this.quantityDecrease.emit(this.product.product.id);
  }

  onQuantityIncrease() {
    this.quantityIncrease.emit(this.product.product.id);
  }
}

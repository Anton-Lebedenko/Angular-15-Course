import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() purchasingProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onAddToCart(): void {
    this.purchasingProduct.emit(this.product);
  }
}

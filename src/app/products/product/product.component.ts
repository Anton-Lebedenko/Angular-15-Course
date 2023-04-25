import { Component, Input } from '@angular/core';
import { ProductModel } from '../shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductModel;

  onAddToCart(product: ProductModel): void {
    console.log(`${product.name} was purchased`);
  }
}

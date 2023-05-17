import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  imports: [SharedModule],
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductListComponent]
})
export class ProductsModule {}

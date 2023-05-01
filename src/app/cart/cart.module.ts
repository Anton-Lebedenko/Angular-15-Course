import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CartListComponent, CartItemComponent],
  exports: [CartListComponent]
})
export class CartModule {}

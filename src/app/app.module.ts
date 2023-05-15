import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartModule } from './cart';
import { OrdersModule } from './orders';
import { ProductsModule } from './products';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// OK

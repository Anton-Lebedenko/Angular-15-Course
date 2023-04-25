import { Injectable } from '@angular/core';
import { Categories, Product, ProductModel } from '../../products/shared';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  getProductsInCart(): ProductModel[] {
    return [
      new Product('2', 'Water', 'Pure mineral water', 10, Categories.DRINKS, true),
      new Product('3', 'Jeans', 'Denim in your style', 1000, Categories.CLOTHES, true)
    ];
    // Uncomment to see an empty cart
    //return [];
  }
}

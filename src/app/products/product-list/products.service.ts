import { Injectable } from '@angular/core';
import { Categories, Product, ProductModel } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  getProducts(): ProductModel[] {
    return [
      new Product('1', 'Milk', 'Fresh milk', 100, Categories.PRODUCTS, false),
      new Product('2', 'Water', 'Pure mineral water', 10, Categories.DRINKS, true),
      new Product('3', 'Jeans', 'Denim in your style', 1000, Categories.CLOTHES, true),
      new Product('4', 'Meat', 'Fresh meat', 200, Categories.PRODUCTS, false)
    ];
  }
}

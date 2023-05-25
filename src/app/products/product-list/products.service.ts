import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Categories, Product, ProductModel } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([
    new Product('1', 'Milk', 'Fresh milk', 1000, Categories.PRODUCTS, true),
    new Product('2', 'Water', 'Pure mineral water', 10, Categories.DRINKS, true),
    new Product('3', 'Jeans', 'Denim in your style', 1000, Categories.CLOTHES, true),
    new Product('4', 'Meat', 'Fresh meat', 200, Categories.PRODUCTS, false)
  ]);
  constructor() {}

  getProducts(): Observable<ProductModel[]> {
    return this.products.asObservable();
  }
}

import { Component } from '@angular/core';

enum Categories {
  CLOTHES = 'clothes',
  PRODUCTS = 'products',
  DRINKS = 'drinks'
}

interface ProductsItem {
  name: string,
  description: string,
  price: number,
  category: Categories,
  isAvailable: boolean
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  caption: string = 'List';
  listOfProducts: ProductsItem[] = [
    {
      name: 'Cheese',
      description: 'A dairy product produced in wide ranges of flavors, textures, and forms by coagulation of the milk protein casein',
      price: 100,
      category: Categories.PRODUCTS,
      isAvailable: true
    },
    {
      name: 'Milk',
      description: 'Fresh milk',
      price: 50,
      category: Categories.PRODUCTS,
      isAvailable: false
    }
  ]
}

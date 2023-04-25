export enum Categories {
  CLOTHES = 'clothes',
  PRODUCTS = 'products',
  DRINKS = 'drinks'
}

export interface ProductModel {
  id: string,
  name: string,
  description: string,
  price: number,
  category: Categories,
  isAvailable: boolean
}

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public category: Categories,
    public isAvailable: boolean
  ) {}
}

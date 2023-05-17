import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ProductModel } from '../../products/shared';
import { CartItemModel, getIndex } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: BehaviorSubject<CartItemModel[]> = new BehaviorSubject<CartItemModel[]>([]);

  constructor() {}

  get productsInCart$(): Observable<CartItemModel[]> {
    return this.cartProducts.asObservable();
  }

  get totalCost$(): Observable<number> {
    return this.productsInCart$.pipe(map((products: CartItemModel[]) => products.reduce(
      (sum: number, product: CartItemModel) => sum + product.product.price * product.quantity, 0
    )));
  }

  get totalQuantity$(): Observable<number> {
    return this.productsInCart$.pipe(map((products: CartItemModel[]) => (products.length)));
  }

  get isEmptyCart$(): Observable<boolean> {
    return this.productsInCart$.pipe(map((products: CartItemModel[]) => (products.length === 0)));
  }

  addProductToCart(product: ProductModel): void {
    this.updatePurchasedProducts(this.addCartItemCb, product.id, product);
  }

  deleteProductFromCart(productId: string): void {
    this.updatePurchasedProducts(this.deleteProductCb, productId);
  }

  increaseQuantity(productId: string): void {
    this.updatePurchasedProducts(this.increaseQuantityCb, productId);
  }

  decreaseQuantity(productId: string): void {
    this.updatePurchasedProducts(this.decreaseQuantityCb.bind(this), productId);
  }

  removeAllProducts(): void {
    this.cartProducts.next([]);
  }

  private addCartItemCb(purchasedProducts: CartItemModel[], searchingCartItemIndex: number, product: ProductModel): void {
    if (searchingCartItemIndex > -1) {
      const currentCartItem: CartItemModel = purchasedProducts[searchingCartItemIndex];
      currentCartItem.quantity++;
      purchasedProducts[searchingCartItemIndex] = { ...currentCartItem };
    } else {
      purchasedProducts.push({ product, quantity: 1 });
    }
  }

  private deleteProductCb(purchasedProducts: CartItemModel[], searchingCartItemIndex: number): void {
    purchasedProducts.splice(searchingCartItemIndex, 1);
  }

  private increaseQuantityCb(purchasedProducts: CartItemModel[], searchingCartItemIndex: number): void {
    purchasedProducts[searchingCartItemIndex].quantity += 1;
  }

  private decreaseQuantityCb(purchasedProducts: CartItemModel[], searchingCartItemIndex: number): void {
    const quantity: number = purchasedProducts[searchingCartItemIndex].quantity -= 1;
    if (quantity < 1) {
      this.deleteProductCb(purchasedProducts, searchingCartItemIndex)
    }
  }

  private updatePurchasedProducts(cb: Function, productId: string, product?: ProductModel): void {
    const purchasedProducts: CartItemModel[] = this.cartProducts.getValue();
    const searchingCartItemIndex: number = getIndex(purchasedProducts, productId);
    cb(purchasedProducts, searchingCartItemIndex, product);
    this.cartProducts.next(purchasedProducts);
  }
}

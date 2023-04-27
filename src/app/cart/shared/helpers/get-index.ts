import { CartItemModel } from '../models/cart.model';

export function getIndex(purchasedProducts: CartItemModel[], productId: string): number {
  return purchasedProducts.findIndex((item: CartItemModel) => item.product.id === productId);
}

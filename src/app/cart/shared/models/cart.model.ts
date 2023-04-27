import { ProductModel } from '../../../products/shared';

export interface CartItemModel {
  product: ProductModel,
  quantity: number
}

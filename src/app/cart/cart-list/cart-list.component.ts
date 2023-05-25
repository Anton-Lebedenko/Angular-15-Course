import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { OrderByPipe } from '../../shared';
import { CartItemModel, SortConfigModel, SortOptionsModel } from '../shared';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit {
  products$!: Observable<CartItemModel[]>;
  totalQuantity$!: Observable<number>;
  totalCost$!: Observable<number>;

  sortOptions: SortOptionsModel[] = [
    { value: 'price', label: 'Price' },
    { value: 'quantity', label: 'Quantity' },
    { value: 'name', label: 'Name' }
  ];

  selectedSortOption: string = 'price';

  private sortConfig: SortConfigModel = {
    'price': ['product', 'price'],
    'name': ['product', 'name'],
    'quantity': ['quantity']
  };

  private sortOptionSource: BehaviorSubject<string[][]> = new BehaviorSubject<string[][]>([this.sortConfig[this.selectedSortOption]]);
  private sortOption$: Observable<string[][]> = this.sortOptionSource.asObservable();

  isAscending: boolean = false;
  private sortOrderSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAscending);
  private sortOrder$: Observable<boolean> = this.sortOrderSource.asObservable();

  constructor(private cartService: CartService, private orderByPipe: OrderByPipe) {}

  ngOnInit(): void {
    this.products$ = combineLatest([
      this.cartService.productsInCart$,
      this.sortOption$,
      this.sortOrder$
    ]).pipe(
      map(([products, sortOption, sortOrder]: [CartItemModel[], string[][], boolean]) =>
        this.orderByPipe.transform(products, sortOption, !sortOrder)
      )
    );
    this.totalQuantity$ = this.cartService.totalQuantity$;
    this.totalCost$ = this.cartService.totalCost$;
  }

  trackByItems(index: number, item: CartItemModel): string {
    return item.product.id;
  }

  onDeleteProduct(productId: string): void {
    this.cartService.deleteProductFromCart(productId);
  }

  onQuantityIncrease(productId: string): void {
    this.cartService.increaseQuantity(productId);
  }

  onQuantityDecrease(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  onSortOptionChange(): void {
    this.sortOptionSource.next([this.sortConfig[this.selectedSortOption]]);
  }

  onSortOrderingChange(): void {
    this.sortOrderSource.next(this.isAscending);
  }
}
